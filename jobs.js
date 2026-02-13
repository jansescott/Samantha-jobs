const jobs = [
  // ── Publishing & Editorial ──────────────────────────────────────
  {
    id: "pub-1",
    title: "Editorial Assistant",
    company: "The Daily Grace Co.",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Provide administrative, editorial, and organizational support to the Editorial Director. Manage communications, organize schedules, review submissions, and assist with content development through the publishing process. Knowledge of Chicago Manual of Style preferred. Ideal for detail-oriented individuals with a passion for books.",
    url: "https://www.indeed.com/q-editorial-assistant-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-2",
    title: "Assistant Acquisitions Editor",
    company: "The Daily Grace Co.",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Support evaluation, development, and management of book and Bible study acquisitions pipeline. Help identify publishing opportunities and steward submissions through the review process. BA in publishing, English, or related field required. 0–2 years experience — ideal for someone early in their publishing career.",
    url: "https://www.indeed.com/q-publishing-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-3",
    title: "Publishing Jobs — Search All Openings",
    company: "Multiple Companies",
    location: "houston",
    category: "publishing",
    source: "Glassdoor",
    description: "Browse 13+ publishing jobs in Houston from companies including University of Houston, Cognizant, Pearson, and Houston Methodist Academic Institute. Roles range from editorial to digital publishing.",
    url: "https://www.glassdoor.com/Job/houston-publishing-jobs-SRCH_IL.0,7_IC1140171_KO8,18.htm"
  },
  {
    id: "pub-4",
    title: "Editorial Assistant (Remote)",
    company: "Simon & Schuster",
    location: "remote",
    category: "publishing",
    source: "LinkedIn",
    description: "Seeking a highly organized and proactive Editorial & Publishing Associate to support a Publisher-at-Large and Editor at one of the world's leading publishing houses.",
    url: "https://www.linkedin.com/jobs/remote-editorial-assistant-jobs"
  },
  {
    id: "pub-5",
    title: "Editorial Assistant — Tin House",
    company: "Zando / Tin House",
    location: "remote",
    category: "publishing",
    source: "LinkedIn",
    description: "Support Masie Cochran, Editorial Director for Tin House / Zando partner imprint lists. Ideal candidate enjoys a fast pace, is organized, adaptable, detail-oriented, collaborative, and an eager learner.",
    url: "https://www.linkedin.com/jobs/remote-editorial-assistant-jobs"
  },
  {
    id: "pub-6",
    title: "Editorial Assistant — Knopf / Pantheon",
    company: "Alfred A. Knopf / Pantheon Books",
    location: "remote",
    category: "publishing",
    source: "Publishers Marketplace",
    description: "The editorial group of Knopf and Pantheon Books is looking for an assistant to report to three senior editors. Entry-level opportunity at a prestigious literary publisher.",
    url: "https://www.publishersmarketplace.com/jobs/"
  },
  {
    id: "pub-7",
    title: "Acquisitions Editor — Arts & Culture (Part-Time)",
    company: "Flatpage",
    location: "remote",
    category: "publishing",
    source: "FlexJobs",
    description: "Part-time remote role (US-based only). $35–40/hour for up to 20 hours per week. Focus on arts and culture acquisitions.",
    url: "https://www.flexjobs.com/remote-jobs/editorial-assistant"
  },
  {
    id: "pub-8",
    title: "Publishing Jobs — All Houston Listings",
    company: "Multiple Companies",
    location: "houston",
    category: "publishing",
    source: "iHirePublishing",
    description: "Dedicated publishing job board with Houston-area openings. Includes editorial, production, and publishing management roles across the industry.",
    url: "https://www.ihirepublishing.com/t-publishing-s-texas-c-houston-jobs.html"
  },
  {
    id: "pub-9",
    title: "Editorial Assistant — Remote Listings",
    company: "Red Line Editorial",
    location: "remote",
    category: "publishing",
    source: "ZipRecruiter",
    description: "Join a high-energy team of publishing professionals. Work on key aspects of editorial projects. Salary range $42k–$76k for remote editorial assistant roles.",
    url: "https://www.ziprecruiter.com/Jobs/Remote-Editorial-Assistant"
  },
  {
    id: "pub-10",
    title: "Jobs with Publishers — All Listings",
    company: "Community of Literary Magazines & Presses",
    location: "remote",
    category: "publishing",
    source: "CLMP",
    description: "Browse jobs from independent literary publishers and magazines. Updated regularly with editorial, marketing, and production roles across the literary publishing world.",
    url: "https://www.clmp.org/programs-opportunities/jobs-with-publishers/"
  },

  // ── Content Writing & Copywriting ───────────────────────────────
  {
    id: "cw-1",
    title: "Content Writer",
    company: "Bizopia",
    location: "houston",
    category: "content-writing",
    source: "Company Site",
    description: "In-person content writer for an SEO agency in Katy, TX. Detail-oriented, organized, creating digital marketing content and copy. Full-time M–F, with potential hybrid/remote after 90 days.",
    url: "https://bizopia.com/copywriter/"
  },
  {
    id: "cw-2",
    title: "Content Developer & Copywriter",
    company: "HexaGroup",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Prolific and talented B2B copywriter for a growing marketing team. Work with project managers on content development. Estimated salary $64K–$104K.",
    url: "https://www.indeed.com/q-copywriting-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-3",
    title: "Senior Marketing Copywriter",
    company: "Vego Garden",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Write to feel, not just inform — a storyteller who makes readers feel excitement about products. Craft compelling brand narratives and marketing copy.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-4",
    title: "Marketing Copy Writer",
    company: "SynergenX Health Holdings",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Houston-based copywriting position with a health and wellness company. Salary range $70K–$75K.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-5",
    title: "Content Writer",
    company: "SpaceManager Closets",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Content writing for one of Houston's fastest-growing home organization companies. Salary range $50K–$60K.",
    url: "https://www.indeed.com/q-content-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-6",
    title: "Senior Copywriter",
    company: "Mattress Firm",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Craft compelling written content on Mattress Firm's brand creative team supporting brand, marketing, and business initiatives.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-7",
    title: "Copywriter (Remote)",
    company: "Coalition Technologies",
    location: "remote",
    category: "content-writing",
    source: "Remotive",
    description: "Remote copywriter role at a digital marketing agency. Write compelling content for web, marketing campaigns, and client projects.",
    url: "https://remotive.com/remote-jobs/writing/copywriter-1749306"
  },
  {
    id: "cw-8",
    title: "Web Content Manager (Remote)",
    company: "Robert Half",
    location: "remote",
    category: "content-writing",
    source: "Robert Half",
    description: "Manage, update, and optimize website content to ensure accuracy, usability, and alignment with organizational goals. Temporary remote position.",
    url: "https://www.roberthalf.com/us/en/jobs/all/copywriter"
  },
  {
    id: "cw-9",
    title: "Remote Content Writer — All Listings",
    company: "Multiple Companies",
    location: "remote",
    category: "content-writing",
    source: "Indeed",
    description: "Browse 383+ remote content writer openings. Roles in blog writing, SEO content, brand storytelling, and marketing copy across various industries.",
    url: "https://www.indeed.com/q-remote-content-writer-jobs.html"
  },
  {
    id: "cw-10",
    title: "Creative Content Writer — Houston Listings",
    company: "Multiple Companies",
    location: "houston",
    category: "content-writing",
    source: "Glassdoor",
    description: "Browse 7+ creative content writer jobs in Houston. Roles emphasizing creative storytelling, brand voice, and content strategy.",
    url: "https://www.glassdoor.com/Job/houston-creative-content-writer-jobs-SRCH_IL.0,7_IC1140171_KO8,31.htm"
  },

  // ── Technical Writing ───────────────────────────────────────────
  {
    id: "tw-1",
    title: "Technical Writer",
    company: "RCP Inc.",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Scan/print technical document packages and assist in cataloging and controlling technical documentation for industrial projects.",
    url: "https://www.indeed.com/q-technical-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-2",
    title: "Technical Writer / Illustrator",
    company: "Fairbanks Morse Defense",
    location: "houston",
    category: "technical-writing",
    source: "Glassdoor",
    description: "Develop data for O&M technical manuals, maintenance standards, and other technical documents. 3+ years experience preferred, but entry-level may be considered.",
    url: "https://www.glassdoor.com/Job/houston-technical-writer-jobs-SRCH_IL.0,7_IC1140171_KO8,24.htm"
  },
  {
    id: "tw-3",
    title: "Senior Scientific Writer",
    company: "Houston Methodist",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Collaborate with scientific and clinical teams to develop, edit, and review grant applications, peer-reviewed publications, and other scientific writing deliverables.",
    url: "https://www.indeed.com/q-technical-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-4",
    title: "Technical Writer — Engineering",
    company: "Integra Mission Critical LLC",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Work closely with engineers to transform complex technical concepts into accessible documentation. Strong technical background preferred.",
    url: "https://www.indeed.com/q-technical-writing-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-5",
    title: "Technical Writer",
    company: "KBR",
    location: "houston",
    category: "technical-writing",
    source: "LinkedIn",
    description: "Technical Writer (Fed Civ) position. Flexible on degree/years if you have technical certifications and/or proven writing experience. $27–$62/hr range.",
    url: "https://www.linkedin.com/jobs/technical-writer-jobs-houston-tx"
  },
  {
    id: "tw-6",
    title: "Technical Writer — All Houston Listings",
    company: "Multiple Companies (165+ jobs)",
    location: "houston",
    category: "technical-writing",
    source: "LinkedIn",
    description: "Browse 165+ technical writer positions in Houston. Companies include KBR, Houston Methodist, Fairbanks Morse, and more. $48K–$87K salary range.",
    url: "https://www.linkedin.com/jobs/technical-writer-jobs-houston-tx"
  },

  // ── Marketing & Communications ──────────────────────────────────
  {
    id: "mc-1",
    title: "Marketing Coordinator",
    company: "UTHealth Houston",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Marketing and content creation role at a major Houston health institution. 5 years related experience in marketing, content creation, communications, or digital media.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-2",
    title: "Content Marketing Specialist",
    company: "Region 4 Education Service Center",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "BA in marketing or communications preferred. Strong written and verbal communication skills required. Create content for an education-focused organization.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-3",
    title: "Senior Marketing & Communication Specialist",
    company: "Rice University",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Develop marketing and communications materials for one of the nation's top universities. Knowledge of trends in higher education communications preferred.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-4",
    title: "Streaming Content & Marketing Specialist",
    company: "Houston Astros / Space City Home Network",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Execute marketing campaigns to promote streaming content and network programming for Houston's MLB franchise.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-5",
    title: "Marketing Communications Specialist",
    company: "AMOT",
    location: "houston",
    category: "marketing",
    source: "AMA Houston",
    description: "5–10 years experience preferred. Multi-channel marketing communications role. Posted February 2026.",
    url: "https://jobs.amahouston.org/"
  },
  {
    id: "mc-6",
    title: "Entry Level Communications — All Listings",
    company: "Multiple Companies (38+ jobs)",
    location: "houston",
    category: "marketing",
    source: "Glassdoor",
    description: "Browse 38+ entry-level communications jobs in Houston. Great for recent grads with an English or writing background. Includes roles in corporate comms, content, and PR.",
    url: "https://www.glassdoor.com/Job/houston-entry-level-communications-jobs-SRCH_IL.0,7_IC1140171_KO8,34.htm"
  },
  {
    id: "mc-7",
    title: "Communications & Marketing Jobs",
    company: "Houston METRO",
    location: "houston",
    category: "marketing",
    source: "Company Site",
    description: "Roles in marketing, corporate communications, social media, and promotional partnerships at Houston's public transit authority.",
    url: "https://jobs.ridemetro.org/go/Communications-and-Marketing/8181300/"
  },

  // ── Literary & Bookstore ────────────────────────────────────────
  {
    id: "lit-1",
    title: "Bookseller / Team Member",
    company: "Kindred Stories",
    location: "houston",
    category: "literary",
    source: "Company Site",
    description: "Community bookstore highlighting Black literature in Houston's Third Ward. Looking for passionate, self-starting individuals who are community-oriented. A unique opportunity to work in Houston's independent literary scene.",
    url: "https://kindredstorieshtx.com/pages/work-with-kindred-stories"
  },
  {
    id: "lit-2",
    title: "Assistant Store Manager — Bookstore",
    company: "Barnes & Noble Education / Houston City College",
    location: "houston",
    category: "literary",
    source: "Indeed",
    description: "Manage the HCC Northline campus bookstore. Create customer experiences that enhance loyalty and deliver measurable results. Retail management in a book-focused environment.",
    url: "https://www.indeed.com/q-book-store-l-houston,-tx-jobs.html"
  },
  {
    id: "lit-3",
    title: "Bookstore Jobs — All Houston Listings",
    company: "Multiple Companies",
    location: "houston",
    category: "literary",
    source: "ZipRecruiter",
    description: "Browse all bookstore positions in Houston. $17–$45/hr range. Includes bookseller, manager, and specialty roles at independent and chain bookstores.",
    url: "https://www.ziprecruiter.com/Jobs/Houston-Bookstore"
  },
  {
    id: "lit-4",
    title: "eBooks Clerk (Part-Time)",
    company: "Goodwill Industries of Houston",
    location: "houston",
    category: "literary",
    source: "Indeed",
    description: "Support GWH's eCommerce Department focused on books. Part-time role combining books with digital commerce — great for book lovers.",
    url: "https://www.indeed.com/q-book-store-l-houston,-tx-jobs.html"
  },

  // ── Freelance & Contract ────────────────────────────────────────
  {
    id: "fl-1",
    title: "Freelance Writer",
    company: "IAPWE",
    location: "remote",
    category: "freelance",
    source: "Remotive",
    description: "Remote freelance writer role. $50–$75/hr. Open worldwide through the International Association of Professional Writers and Editors. Flexible schedule.",
    url: "https://remotive.com/remote-jobs/writing/freelance-writer-1185979"
  },
  {
    id: "fl-2",
    title: "Freelance Writing Jobs — All Remote Listings",
    company: "Multiple Companies",
    location: "remote",
    category: "freelance",
    source: "Indeed",
    description: "Browse hundreds of remote freelance writer openings including script writing, academic writing, blog posts, and more. Filter by pay, experience level, and type.",
    url: "https://www.indeed.com/q-remote-freelance-writer-jobs.html"
  },
  {
    id: "fl-3",
    title: "Remote Writing Jobs — All Listings",
    company: "Multiple Companies",
    location: "remote",
    category: "freelance",
    source: "Working Nomads",
    description: "Curated board of remote writing positions: content writer, copywriter, technical writer, and more. Full-time, part-time, and freelance options.",
    url: "https://www.workingnomads.com/remote-writing-jobs"
  },
  {
    id: "fl-4",
    title: "Freelance Writing Gigs",
    company: "Multiple Clients",
    location: "remote",
    category: "freelance",
    source: "Upwork",
    description: "Earn $15–$40/hr writing blogs, articles, press releases, and white papers for clients worldwide. Build a freelance portfolio and set your own rates.",
    url: "https://www.upwork.com/freelance-jobs/writing/"
  },
  {
    id: "fl-5",
    title: "Paid Writing Opportunities — All Listings",
    company: "Multiple Publications",
    location: "remote",
    category: "freelance",
    source: "BloggingPro",
    description: "Handpicked job board for paid content writing. Premium database of 200+ publications across various niches paying $15–$500+ per article. Freelance, full-time, and remote.",
    url: "https://www.bloggingpro.com/jobs/"
  },
  {
    id: "fl-6",
    title: "Remote Writing & Editing Jobs",
    company: "Multiple Companies",
    location: "remote",
    category: "freelance",
    source: "FlexJobs",
    description: "Browse 335+ remote copywriting and content writing jobs. Includes work-from-home and hybrid options across industries. Blog posts, social media, guides, and sales copy.",
    url: "https://www.flexjobs.com/remote-jobs/writing-editing-journalism"
  }
];
