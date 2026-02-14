const jobs = [
  // ============================================================
  // CATEGORY 1: Publishing & Editorial — Houston, TX
  // ============================================================
  {
    id: "pub-1",
    title: "Editorial Assistant",
    company: "The Daily Grace Co.",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Provide administrative, editorial, and organizational support to the Editorial Director. Manage communications, organize schedules, review submissions, and assist with content development through the publishing process. Knowledge of Chicago Manual of Style preferred. Located in Spring, TX (Houston metro). Ideal for detail-oriented individuals with a passion for books.",
    url: "https://www.indeed.com/q-editorial-assistant-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-2",
    title: "Assistant Acquisitions Editor",
    company: "The Daily Grace Co.",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Support evaluation, development, and management of book and Bible study acquisitions pipeline. Help identify publishing opportunities and steward submissions through the review process. BA in publishing, English, or related field required. 0-2 years experience — ideal for someone early in their publishing career.",
    url: "https://www.indeed.com/q-publishing-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-3",
    title: "Senior Scientific Editor",
    company: "UTHealth Houston",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Deliver writing education and research assistance related to scientific publishing. Collaborate with scientific and clinical teams to develop, edit, and review high-quality scientific writing deliverables including grant applications and peer-reviewed publications.",
    url: "https://www.indeed.com/q-publishing-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-4",
    title: "Digital Publishing Editor",
    company: "Hart Energy",
    location: "houston",
    category: "publishing",
    source: "Indeed",
    description: "Shape how Hart Energy informs and influences its audience through digital publishing. Requires strong digital publishing familiarity including WordPress, SEO basics, and analytics tools. Play a key role in content strategy for energy industry publications.",
    url: "https://www.indeed.com/q-publishing-editor-l-houston,-tx-jobs.html"
  },
  {
    id: "pub-5",
    title: "Publishing Jobs — Search All Houston Openings",
    company: "Multiple Companies",
    location: "houston",
    category: "publishing",
    source: "Glassdoor",
    description: "Browse 13+ publishing jobs in Houston from companies including University of Houston, Cognizant, Pearson, and Houston Methodist Academic Institute. Roles range from editorial to digital publishing. Salary range $40K-$72K.",
    url: "https://www.glassdoor.com/Job/houston-publishing-jobs-SRCH_IL.0,7_IC1140171_KO8,18.htm"
  },
  {
    id: "pub-5b",
    title: "Publishing Jobs — Houston (iHirePublishing)",
    company: "Multiple Companies",
    location: "houston",
    category: "publishing",
    source: "iHirePublishing",
    description: "Dedicated publishing job board with Houston-area openings. Includes editorial, production, and publishing management roles across the industry. A niche board specifically for publishing professionals.",
    url: "https://www.ihirepublishing.com/t-publishing-s-texas-c-houston-jobs.html"
  },

  // ============================================================
  // CATEGORY 2: Remote Publishing & Editorial
  // ============================================================
  {
    id: "pub-rem-1",
    title: "Editorial & Publishing Associate",
    company: "Simon & Schuster",
    location: "remote",
    category: "publishing",
    source: "Publishers Marketplace",
    description: "Support a Publisher-at-Large and Editor. Manage the Stephen King frontlist and extensive backlist, plus support authors including Jennifer Egan, Anthony Doerr, and Rachel Kushner. Hybrid/NYC, $60,000 salary. Requires 2-3 years publishing experience. Posted January 27, 2026.",
    url: "https://www.publishersmarketplace.com/jobs/view.cgi?job_no=42733"
  },
  {
    id: "pub-rem-2",
    title: "Editorial Assistant — Tin House",
    company: "Zando / Tin House",
    location: "remote",
    category: "publishing",
    source: "Publishers Marketplace",
    description: "Support Masie Cochran, Editorial Director for Tin House / Zando partner imprint lists. Ideal for candidates who enjoy a fast pace, are organized, adaptable, detail-oriented, collaborative, and communicative. Entry-level at a nimble independent publisher.",
    url: "https://www.publishersmarketplace.com/jobs/"
  },
  {
    id: "pub-rem-3",
    title: "Editorial Assistant — Knopf / Pantheon",
    company: "Alfred A. Knopf / Penguin Random House",
    location: "remote",
    category: "publishing",
    source: "Penguin Random House",
    description: "The editorial group of Knopf and Pantheon Books is looking for an assistant to report to three senior editors. Entry-level opportunity at one of the most prestigious literary imprints in publishing. Hybrid format.",
    url: "https://careers.penguinrandomhouse.com/"
  },
  {
    id: "pub-rem-4",
    title: "Acquisitions Editor — Arts & Culture (Part-Time)",
    company: "Flatpage",
    location: "remote",
    category: "publishing",
    source: "FlexJobs",
    description: "Part-time remote role (US-based only). $35-40/hour for up to 20 hours per week. Focus on arts and culture content acquisition. Great for building publishing experience on a flexible schedule.",
    url: "https://www.flexjobs.com/remote-jobs/publishing"
  },
  {
    id: "pub-rem-5",
    title: "Editorial Assistant",
    company: "Red Line Editorial",
    location: "remote",
    category: "publishing",
    source: "ZipRecruiter",
    description: "Join a high-energy team of publishing professionals. Work on key aspects of editorial projects from manuscript to publication. Salary range $42K-$76K for remote editorial assistant roles.",
    url: "https://www.ziprecruiter.com/Jobs/Remote-Editorial-Assistant"
  },
  {
    id: "pub-rem-6",
    title: "2026 Summer Publishing Internship (Remote)",
    company: "Lanternfish Press",
    location: "remote",
    category: "publishing",
    source: "Submittable",
    description: "Learn about editorial, production, marketing, and sales departments. Up to 35 hours/week for 13 weeks (June 1 - August 31, 2026). Fully remote. Apply via Submittable by February 28. Must be eligible for academic credit.",
    url: "https://www.indeed.com/q-entry-level-publishing-l-remote-jobs.html"
  },
  {
    id: "pub-rem-7",
    title: "Publishing Prologue Program (Free Virtual)",
    company: "Simon & Schuster",
    location: "remote",
    category: "publishing",
    source: "Company Website",
    description: "Free week-long virtual careers-in-book-publishing lecture series. Must be a 2025 or 2026 college graduate. Learn about every department through S&S employees. Submit resume and cover letter; notified by May 3, 2026. Free — no cost to attend.",
    url: "https://www.simonandschuster.biz/p/internships-at-simon-schuster"
  },
  {
    id: "pub-rem-8",
    title: "Developmental Editor (Part-Time Remote)",
    company: "Various Publishers (via FlexJobs)",
    location: "remote",
    category: "publishing",
    source: "FlexJobs",
    description: "Work with book authors on quality manuscripts in a mentoring/coaching role. Part-time remote. Requires 1+ years of experience in substantive editing. 131 remote publishing jobs on FlexJobs as of February 2026.",
    url: "https://www.flexjobs.com/remote-jobs/publishing"
  },
  {
    id: "pub-rem-9",
    title: "Jobs with Publishers — All Listings",
    company: "Community of Literary Magazines & Presses",
    location: "remote",
    category: "publishing",
    source: "CLMP",
    description: "Browse jobs from independent literary publishers and magazines. Updated regularly with editorial, marketing, and production roles across the literary publishing world. Curated specifically for literary publishing careers.",
    url: "https://www.clmp.org/programs-opportunities/jobs-with-publishers/"
  },
  {
    id: "pub-rem-10",
    title: "Paid Remote Publishing Internships",
    company: "Penguin Random House",
    location: "remote",
    category: "publishing",
    source: "Company Website",
    description: "Paid, remote internship opportunities to learn about book publishing. With 300+ publishing imprints worldwide, PRH offers a variety of career opportunities to fit every skill set and literary interest. Check their careers portal for current openings.",
    url: "https://careers.penguinrandomhouse.com/"
  },

  // ============================================================
  // CATEGORY 3: Content Writing / Copywriting — Houston, TX
  // ============================================================
  {
    id: "cw-1",
    title: "Content Writer",
    company: "Bizopia (Houston SEO Agency)",
    location: "houston",
    category: "content-writing",
    source: "Company Site",
    description: "Write strategic content pieces of 500-3,000 words for digital marketing projects. Full-time in office (Katy, TX), Monday-Friday 8:30am-5:30pm, with potential WFH/remote hybrid after 90 days. Seeking detail-oriented, organized writers.",
    url: "https://bizopia.com/copywriter/"
  },
  {
    id: "cw-2",
    title: "Content Developer & Copywriter",
    company: "HexaGroup",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Prolific and talented B2B copywriter for a growing marketing team. Work with project managers on diverse content projects. Estimated salary $64K-$104K. Great opportunity to develop business writing skills.",
    url: "https://www.indeed.com/q-copywriting-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-3",
    title: "Senior Marketing Copywriter",
    company: "Vego Garden",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Write to make readers feel excitement about products — storytelling, not just informing. A great fit for fiction writers who want to apply narrative skills commercially. Craft compelling brand copy that connects emotionally.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-4",
    title: "Marketing Copywriter",
    company: "SynergenX Health Holdings",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Houston-based marketing copywriter position. Salary range $70K-$75K. Create compelling marketing copy for a healthcare organization. Excellent benefits and stable employment.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-5",
    title: "Content Writer",
    company: "SpaceManager Closets",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Content writing for one of Houston's fastest-growing home organization companies. Salary range $50K-$60K. Write engaging product descriptions, blog posts, and marketing materials.",
    url: "https://www.indeed.com/q-content-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-6",
    title: "Senior Copywriter",
    company: "Mattress Firm",
    location: "houston",
    category: "content-writing",
    source: "Indeed",
    description: "Craft compelling written content on the brand creative team supporting brand, marketing, and business initiatives. Established Houston-headquartered company with strong brand presence.",
    url: "https://www.indeed.com/q-copywriter-l-houston,-tx-jobs.html"
  },
  {
    id: "cw-7",
    title: "Creative Content Writer — Houston Listings",
    company: "Multiple Companies",
    location: "houston",
    category: "content-writing",
    source: "Glassdoor",
    description: "Browse 7+ creative content writer jobs in Houston. Roles emphasizing creative storytelling, brand voice, and content strategy. Skills needed: writing, Chicago Manual of Style, copywriting, AP style.",
    url: "https://www.glassdoor.com/Job/houston-creative-content-writer-jobs-SRCH_IL.0,7_IC1140171_KO8,31.htm"
  },

  // ============================================================
  // CATEGORY 4: Remote Content Writing / Copywriting
  // ============================================================
  {
    id: "cw-rem-1",
    title: "Senior Copywriter (Remote)",
    company: "gt.school",
    location: "remote",
    category: "content-writing",
    source: "LinkedIn",
    description: "Remote senior copywriter position at $100,000/year. Create compelling content for an education technology company. Strong writing skills and content strategy experience preferred.",
    url: "https://www.linkedin.com/jobs/content-writer-jobs-houston-tx"
  },
  {
    id: "cw-rem-2",
    title: "Copywriter (Remote)",
    company: "Coalition Technologies",
    location: "remote",
    category: "content-writing",
    source: "Remotive",
    description: "Remote copywriter role at a digital marketing agency. Write compelling content for web, marketing campaigns, and client projects. Open worldwide.",
    url: "https://remotive.com/remote-jobs/writing/copywriter-1749306"
  },
  {
    id: "cw-rem-3",
    title: "AI Training Copywriter (Remote)",
    company: "DataAnnotation.tech",
    location: "remote",
    category: "content-writing",
    source: "We Work Remotely",
    description: "Help train AI chatbots by writing diverse conversations, high-quality answers, and fact-checking AI responses. Flexible hours, $20+/hr starting (expert projects $40+/hr). Requires bachelor's degree and excellent writing skills. Min 10 hrs/week. Apply by March 7, 2026.",
    url: "https://dataannotation.tech/"
  },
  {
    id: "cw-rem-4",
    title: "Web Content Manager (Remote, Temporary)",
    company: "Robert Half",
    location: "remote",
    category: "content-writing",
    source: "Robert Half",
    description: "Manage, update, and optimize website content to ensure accuracy, usability, and alignment with organizational goals. Temporary remote position through a major staffing agency.",
    url: "https://www.roberthalf.com/us/en/jobs/all/copywriter"
  },
  {
    id: "cw-rem-5",
    title: "Remote Content Writer — Browse 383+ Openings",
    company: "Multiple Companies",
    location: "remote",
    category: "content-writing",
    source: "Indeed",
    description: "Browse hundreds of remote content writer openings including blog writing, SEO content, brand storytelling, and marketing copy across various industries. New listings added daily.",
    url: "https://www.indeed.com/q-remote-content-writer-jobs.html"
  },
  {
    id: "cw-rem-6",
    title: "Remote Copywriting — Browse 335+ Openings",
    company: "Multiple Companies",
    location: "remote",
    category: "content-writing",
    source: "FlexJobs",
    description: "Remote, part-time, freelance, and flexible copywriting jobs. Produce blog posts, social media content, guides, proposals, and sales copy. Work-from-home and hybrid options. $27-$67/hr range.",
    url: "https://www.flexjobs.com/remote-jobs/online-copywriting"
  },

  // ============================================================
  // CATEGORY 5: Technical Writing — Houston, TX
  // ============================================================
  {
    id: "tw-1",
    title: "Technical Writer / Illustrator",
    company: "Fairbanks Morse Defense",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Develop data for O&M technical manuals, maintenance standards, and other technical documents. 3+ years of technical writing experience preferred, in software or industrial products.",
    url: "https://www.indeed.com/q-technical-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-2",
    title: "Technical Writer — Engineering",
    company: "Integra Mission Critical LLC",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Work closely with engineers to transform complex technical concepts into accessible documentation. Requires strong technical background and ability to write clearly for varied audiences.",
    url: "https://www.indeed.com/q-technical-writing-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-3",
    title: "Technical Writer",
    company: "RCP Inc.",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Scan/print technical document packages and assist in cataloging and controlling technical documentation. Entry-level opportunity to build technical documentation skills in an industrial setting.",
    url: "https://www.indeed.com/q-technical-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-4",
    title: "Technical Writer (Fed Civ)",
    company: "KBR",
    location: "houston",
    category: "technical-writing",
    source: "LinkedIn",
    description: "Flexible on degree and years of experience if you have technical certifications and/or proven writing experience. Major Houston employer with excellent benefits. $27-$62/hr range.",
    url: "https://www.linkedin.com/jobs/technical-writer-jobs-houston-tx"
  },
  {
    id: "tw-5",
    title: "Technical Writer",
    company: "Enchanted Rock Management LLC",
    location: "houston",
    category: "technical-writing",
    source: "Glassdoor",
    description: "Write and edit technical documentation in the energy sector. 3-5 years experience writing or editing technical documentation, preferably in industrial, energy, or field operations environment.",
    url: "https://www.glassdoor.com/Job/houston-technical-writer-jobs-SRCH_IL.0,7_IC1140171_KO8,24.htm"
  },
  {
    id: "tw-6",
    title: "Senior Scientific Writer",
    company: "Houston Methodist",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "Collaborate with scientific and clinical teams to develop, edit, and review grant applications, peer-reviewed publications, and other scientific writing deliverables. Houston's premier medical institution.",
    url: "https://www.indeed.com/q-technical-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-7",
    title: "Senior Technical Writer (Contract)",
    company: "Contact Government Services, LLC",
    location: "houston",
    category: "technical-writing",
    source: "Indeed",
    description: "5+ years of experience with development of technical documentation. Work closely with project stakeholders on government-related technical writing projects.",
    url: "https://www.indeed.com/q-technical-writing-l-houston,-tx-jobs.html"
  },
  {
    id: "tw-8",
    title: "Technical Writer I (Entry-Level Contract)",
    company: "Various (via ZipRecruiter)",
    location: "houston",
    category: "technical-writing",
    source: "ZipRecruiter",
    description: "On-site technical writer in Houston (5x/week). Pay rate $23-$28/hour (W2). Entry-level opportunity to gain technical writing experience. 165+ technical writer jobs in the Houston area.",
    url: "https://www.ziprecruiter.com/Jobs/Technical-Writer/-in-Houston,TX"
  },

  // ============================================================
  // CATEGORY 6: Freelance Writing (Remote)
  // ============================================================
  {
    id: "fl-1",
    title: "Freelance Writer",
    company: "IAPWE (Intl Assoc. of Professional Writers & Editors)",
    location: "remote",
    category: "freelance",
    source: "Remotive",
    description: "Remote freelance writer role. $50-$75/hr. Open worldwide. IAPWE provides career support and professional development opportunities to the freelancing community. Flexible schedule.",
    url: "https://remotive.com/remote-jobs/writing/freelance-writer-1185979"
  },
  {
    id: "fl-2",
    title: "Freelance Article Writer",
    company: "Static Media",
    location: "remote",
    category: "freelance",
    source: "Indeed",
    description: "Claim and write 300-900 word articles using a custom CMS. $21/hour rate. Flexible schedule — choose your own articles and write on topics that interest you. Great way to build published clips.",
    url: "https://www.indeed.com/q-remote-freelance-writer-jobs.html"
  },
  {
    id: "fl-3",
    title: "Paid Literary Magazine Submissions (Fiction)",
    company: "Hayden's Ferry Review, Nightmare, Bourbon Penn & more",
    location: "remote",
    category: "freelance",
    source: "CLMP",
    description: "Multiple paid literary magazines accepting submissions NOW: Hayden's Ferry Review ($1,000 prizes, Feb 1-28 deadline), Nightmare Magazine ($0.08/word for fiction), Bourbon Penn ($100/story), Mississippi Review Prize ($1,000). Perfect for fiction writers building credits.",
    url: "https://www.clmp.org/programs-opportunities/calls-for-submissions/"
  },
  {
    id: "fl-4",
    title: "Freelance Essay Writer",
    company: "FundsforWriters / Poets & Writers Magazine",
    location: "remote",
    category: "freelance",
    source: "FundsforWriters",
    description: "FundsforWriters pays $200 for 1,000-2,500 word essays. Poets & Writers accepts News & Trends (500-1,200 words), Literary Life essays (1,500-2,500 words), and feature profiles (2,000-3,000 words). Excellent publication credits.",
    url: "https://fundsforwriters.com/markets/"
  },
  {
    id: "fl-5",
    title: "40+ Paying Literary Magazines (No Submission Fee)",
    company: "Bennington Review, Book XI, Grain & more",
    location: "remote",
    category: "freelance",
    source: "Valley of Writers",
    description: "Curated list of 40+ literary magazines that pay and charge no fee. Rates: Bennington Review ($100-200), Book XI ($200/piece), Grain ($50/page up to $250), Canthius ($50-150). Ideal for fiction writers seeking publication credits and income.",
    url: "https://www.valleyofwriters.com/40-literary-magazines-that-pay-writers/"
  },
  {
    id: "fl-6",
    title: "Freelance Proofreader (Part-Time Remote)",
    company: "JM Services and Consulting",
    location: "remote",
    category: "freelance",
    source: "Indeed",
    description: "Part-time proofreader reviewing and editing documents for accuracy and consistency. 20 hours/week, flexible schedule. Requires keen eye for detail and excellent grammar. Work with writers, editors, and designers.",
    url: "https://www.indeed.com/q-entry-level-publishing-l-remote-jobs.html"
  },
  {
    id: "fl-7",
    title: "Freelance Writing Gigs",
    company: "Multiple Clients (via Upwork)",
    location: "remote",
    category: "freelance",
    source: "Upwork",
    description: "Earn $15-$40/hr writing blogs, articles, press releases, and white papers. Build your own client base and set your own rates. No experience minimum — portfolio quality matters most.",
    url: "https://www.upwork.com/freelance-jobs/writing/"
  },
  {
    id: "fl-8",
    title: "Paid Writing Opportunities — 200+ Publications",
    company: "Various Publications",
    location: "remote",
    category: "freelance",
    source: "BloggingPro",
    description: "Handpicked job board for paid content writing. Premium database of 200+ publications across various niches paying $15-$500+ per article. Freelance, full-time, and remote opportunities.",
    url: "https://www.bloggingpro.com/jobs/"
  },
  {
    id: "fl-9",
    title: "Writing Contests, Grants & Fellowships (No Entry Fee)",
    company: "Various Organizations",
    location: "remote",
    category: "freelance",
    source: "Freedom with Writing",
    description: "36+ contests, grants, and fellowships with no entry/application fees. Prizes up to $5,000 plus literary representation. Updated monthly with current deadlines for fiction, poetry, and nonfiction writers.",
    url: "https://www.freedomwithwriting.com/freedom/uncategorized/36-contests-grants-and-fellowships-for-writers-no-entry-application-fees-for-january-2026/"
  },
  {
    id: "fl-10",
    title: "Freelance Book Proofreading",
    company: "Reedsy Marketplace",
    location: "remote",
    category: "freelance",
    source: "Reedsy",
    description: "Connect with indie authors as a freelance proofreader. Set your own rates ($600-$750 per manuscript average). Per hour, per word, or per project pricing. Build a profile and get discovered by authors seeking editing help.",
    url: "https://reedsy.com/freelancer/remote-proofreading-jobs/"
  },
  {
    id: "fl-11",
    title: "Remote Writing & Editing Jobs — All Listings",
    company: "Multiple Companies",
    location: "remote",
    category: "freelance",
    source: "FlexJobs",
    description: "Browse 335+ remote writing, editing, and journalism jobs. Includes freelance, part-time, and full-time. Blog posts, social media, guides, grant writing, and sales copy across industries.",
    url: "https://www.flexjobs.com/remote-jobs/writing-editing-journalism"
  },
  {
    id: "fl-12",
    title: "Remote Writing Jobs — Curated Board",
    company: "Multiple Companies",
    location: "remote",
    category: "freelance",
    source: "Working Nomads",
    description: "Curated board of remote writing positions: content writer, copywriter, technical writer, and more. Full-time, part-time, freelance, or work-from-anywhere options. Updated daily.",
    url: "https://www.workingnomads.com/remote-writing-jobs"
  },

  // ============================================================
  // CATEGORY 7: Literary, Agency & Bookstore — Houston
  // ============================================================
  {
    id: "lit-1",
    title: "Bookseller / Team Member",
    company: "Kindred Stories",
    location: "houston",
    category: "literary",
    source: "Company Site",
    description: "Community bookstore highlighting Black literature in Houston's Third Ward (2310 Elgin St). Expanding and seeking passionate, self-starting, community-oriented individuals. A unique opportunity in Houston's independent literary scene. Check website or Instagram @kindredstorieshtx.",
    url: "https://kindredstorieshtx.com/pages/work-with-kindred-stories"
  },
  {
    id: "lit-2",
    title: "Assistant Store Manager — College Bookstore",
    company: "Barnes & Noble Education / Houston City College",
    location: "houston",
    category: "literary",
    source: "Indeed",
    description: "Manage the HCC Northline campus bookstore. Create customer experiences that enhance bookstore loyalty and deliver measurable results. Retail management in a book-focused environment.",
    url: "https://www.indeed.com/q-book-store-l-houston,-tx-jobs.html"
  },
  {
    id: "lit-3",
    title: "Seasonal Campus Retail Associate",
    company: "Houston Community College — Eastside Bookstore",
    location: "houston",
    category: "literary",
    source: "Indeed",
    description: "Assist with processing sales transactions at HCC Eastside Bookstore. Seasonal position ideal for getting your foot in the door at a campus bookstore. Handle cash, credit, and financial aid payments.",
    url: "https://www.indeed.com/q-bookstore-l-houston,-tx-jobs.html"
  },
  {
    id: "lit-4",
    title: "eBooks Clerk (Part-Time)",
    company: "Goodwill Industries of Houston",
    location: "houston",
    category: "literary",
    source: "Indeed",
    description: "Support GWH's eCommerce Department focused on books. Part-time role combining book knowledge with digital commerce — sort, evaluate, and list books for online sale.",
    url: "https://www.indeed.com/q-book-store-l-houston,-tx-jobs.html"
  },
  {
    id: "lit-5",
    title: "Bookstore Jobs — All Houston Listings",
    company: "Multiple Companies ($17-$45/hr)",
    location: "houston",
    category: "literary",
    source: "ZipRecruiter",
    description: "Browse all bookstore positions in Houston. Includes bookseller, manager, and specialty roles at independent and chain bookstores. 20+ listings on SimplyHired alone.",
    url: "https://www.ziprecruiter.com/Jobs/Houston-Bookstore"
  },
  {
    id: "lit-6",
    title: "Volunteer Editor / Manuscript Reader",
    company: "The Writer's Workout",
    location: "remote",
    category: "literary",
    source: "CLMP",
    description: "Read fiction, poetry, or creative nonfiction submissions; accept or decline; copyedit; and discuss for quarterly issues. Spring interns: read 10-15 short stories/week, remote, ~8 hrs/week for 9 weeks (March 6 - May 5, 2026). Volunteer but excellent for publishing resume.",
    url: "https://www.clmp.org/programs-opportunities/jobs-with-publishers/"
  },

  // ============================================================
  // CATEGORY 8: Marketing & Communications — Houston, TX
  // ============================================================
  {
    id: "mc-1",
    title: "Marketing Coordinator",
    company: "UTHealth Houston",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Marketing and content creation role at a major Houston health institution. Requires experience in marketing, content creation, communications, or digital media. Strong writing essential.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-2",
    title: "Content Marketing Specialist",
    company: "Region 4 Education Service Center",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "BA in marketing or communications preferred. Strong written and verbal communication skills required. Create compelling content for an education-focused organization. Stable public-sector employer.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-3",
    title: "Senior Marketing & Communication Specialist",
    company: "Rice University",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Develop marketing and communications strategies for one of Houston's most prestigious universities. Knowledge of trends in higher ed communications preferred. Strong writing background highly valued.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-4",
    title: "Streaming Content & Marketing Specialist",
    company: "Houston Astros / Space City Home Network",
    location: "houston",
    category: "marketing",
    source: "Indeed",
    description: "Execute marketing campaigns to promote streaming content and network programming for the Houston Astros media network. Combine writing skills with sports and entertainment marketing.",
    url: "https://www.indeed.com/q-marketing-communication-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-5",
    title: "Marketing Communications Specialist",
    company: "AMOT",
    location: "houston",
    category: "marketing",
    source: "AMA Houston",
    description: "Multi-channel marketing communications role at an industrial company. 5-10 years experience preferred. Posted February 3, 2026 on AMA Houston job board.",
    url: "https://jobs.amahouston.org/"
  },
  {
    id: "mc-6",
    title: "Communications Specialist",
    company: "Haynes Boone LLP",
    location: "houston",
    category: "marketing",
    source: "ZipRecruiter",
    description: "Support firm management, CMO, and Director of Media Relations at a major law firm. Writing-intensive: develop donor-centric marketing collateral, client interviews, social media posts, and newsletters.",
    url: "https://www.ziprecruiter.com/Jobs/Communications/-in-Houston,TX"
  },
  {
    id: "mc-7",
    title: "Social & Digital Marketing Coordinator",
    company: "Gillman Automotive Group",
    location: "houston",
    category: "marketing",
    source: "AMA Houston",
    description: "Coordinate social and digital marketing for one of Houston's largest automotive groups. 2-5 years experience. Posted January 19, 2026. Combines writing with social media management.",
    url: "https://jobs.amahouston.org/"
  },
  {
    id: "mc-8",
    title: "Data Reporter",
    company: "Houston Chronicle / Hearst",
    location: "houston",
    category: "marketing",
    source: "Hearst Careers",
    description: "Find and tell stories with data in a fast-paced, audience-centered newsroom at the Houston Chronicle. For writers who love research and data-driven storytelling. Houston's largest newspaper.",
    url: "https://eevd.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_10007"
  },
  {
    id: "mc-9",
    title: "Communications & Marketing Jobs",
    company: "Houston METRO",
    location: "houston",
    category: "marketing",
    source: "Company Site",
    description: "Roles in marketing, corporate communications, social media, and promotional partnerships at Houston's public transit authority. Stable government employer with good benefits.",
    url: "https://jobs.ridemetro.org/go/Communications-and-Marketing/8181300/"
  },
  {
    id: "mc-10",
    title: "Communications Coordinator",
    company: "University of Houston",
    location: "houston",
    category: "marketing",
    source: "UH Careers",
    description: "Communications coordination at your alma mater. UH has multiple communications roles including content creation, digital media, and PR. Great benefits as a state employer. Check careers.uh.edu for current openings.",
    url: "https://www.indeed.com/q-university-of-houston-communications-jobs.html"
  },
  {
    id: "mc-11",
    title: "Entry Level Communications — 38+ Listings",
    company: "Multiple Houston Companies",
    location: "houston",
    category: "marketing",
    source: "Glassdoor",
    description: "Browse 38+ entry-level communications jobs in Houston. Great for recent grads with an English or writing background. Includes corporate comms, content, PR, and marketing roles. Salary range $46K-$115K.",
    url: "https://www.glassdoor.com/Job/houston-entry-level-communications-jobs-SRCH_IL.0,7_IC1140171_KO8,34.htm"
  },
  {
    id: "mc-12",
    title: "Scholar-in-Residence — Creative Writing (2026-27)",
    company: "University of Houston — Cynthia Woods Mitchell Center",
    location: "houston",
    category: "marketing",
    source: "UH Careers",
    description: "Nine-month post-graduate fellowship in Creative Writing for 2026-27. Teach one course per semester. $45,000 salary with $1,250 project budget. Apply through careers.uh.edu. Competitive but ideal for committed creative writers.",
    url: "https://careers.uh.edu/jobs/scholar-in-residence-creative-writing-program-houston-texas-united-states"
  },
  {
    id: "mc-13",
    title: "Inbound Digital Marketing Specialist",
    company: "Frazer, Ltd.",
    location: "houston",
    category: "marketing",
    source: "AMA Houston",
    description: "Digital marketing role in Sugar Land (Houston metro). $60,000-$73,000/year. Content creation, SEO, email marketing, and lead generation. Writing skills are central to the role.",
    url: "https://jobs.amahouston.org/"
  }
];
