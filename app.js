document.addEventListener('DOMContentLoaded', () => {
  const listingsContainer = document.getElementById('job-listings');
  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const searchInput = document.getElementById('search-input');
  const countEl = document.getElementById('count');
  const lastUpdatedEl = document.getElementById('last-updated');

  lastUpdatedEl.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  function getFilteredJobs() {
    const category = categoryFilter.value;
    const location = locationFilter.value;
    const search = searchInput.value.toLowerCase().trim();

    return jobs.filter(job => {
      if (category !== 'all' && job.category !== category) return false;
      if (location !== 'all' && job.location !== location) return false;
      if (search) {
        const haystack = `${job.title} ${job.company} ${job.description}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });
  }

  function renderJobs() {
    const filtered = getFilteredJobs();
    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
      listingsContainer.innerHTML = `
        <div class="empty-state">
          <p>No listings match your filters. Try broadening your search.</p>
        </div>`;
      return;
    }

    const saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');

    listingsContainer.innerHTML = filtered.map(job => {
      const locationBadgeClass = job.location === 'remote' ? 'badge-remote' : 'badge-location';
      const locationLabel = job.location === 'remote' ? 'Remote' : 'Houston, TX';
      const isSaved = saved.includes(job.id);
      const categoryLabels = {
        'publishing': 'Publishing & Editorial',
        'content-writing': 'Content & Copywriting',
        'technical-writing': 'Technical Writing',
        'marketing': 'Marketing & Comms',
        'literary': 'Literary & Bookstore',
        'freelance': 'Freelance'
      };

      return `
        <div class="job-card" data-id="${job.id}">
          <div class="job-card-header">
            <div>
              <div class="job-title">${job.title}</div>
              <div class="job-company">${job.company}</div>
            </div>
          </div>
          <div class="job-meta">
            <span class="badge ${locationBadgeClass}">${locationLabel}</span>
            <span class="badge badge-category">${categoryLabels[job.category] || job.category}</span>
            <span class="badge badge-source">${job.source}</span>
          </div>
          <div class="job-description">${job.description}</div>
          <div class="job-card-actions">
            <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn-apply">View Listing &rarr;</a>
            <button class="btn-save ${isSaved ? 'saved' : ''}" onclick="toggleSave('${job.id}')">
              ${isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>`;
    }).join('');
  }

  window.toggleSave = function(jobId) {
    let saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    if (saved.includes(jobId)) {
      saved = saved.filter(id => id !== jobId);
    } else {
      saved.push(jobId);
    }
    localStorage.setItem('savedJobs', JSON.stringify(saved));
    renderJobs();
  };

  categoryFilter.addEventListener('change', renderJobs);
  locationFilter.addEventListener('change', renderJobs);
  searchInput.addEventListener('input', renderJobs);

  renderJobs();
});
