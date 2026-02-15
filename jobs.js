const jobs = [
  // ============================================================
  // CATEGORY 1: Operations & Admin — Houston, TX
  // ============================================================
  {
    id: "oa-1",
    title: "Operations Coordinator",
    company: "Houston Methodist",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Coordinate daily operations, manage scheduling, and support leadership across departments. Strong organizational skills and ability to work cross-functionally required. Excellent benefits at Houston's premier medical institution.",
    url: "https://www.indeed.com/q-operations-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "oa-2",
    title: "Administrative Coordinator",
    company: "Rice University",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide administrative support including calendar management, event coordination, and document preparation. Bachelor's degree required. Strong communication and organizational skills valued. Competitive university benefits.",
    url: "https://www.indeed.com/q-administrative-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "oa-3",
    title: "Executive Assistant",
    company: "Memorial Hermann Health System",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Support C-suite executives with scheduling, travel coordination, meeting preparation, and correspondence. Requires excellent organizational skills and ability to manage multiple priorities in a fast-paced environment.",
    url: "https://www.linkedin.com/jobs/search/?keywords=executive+assistant&location=Houston%2C+Texas"
  },
  {
    id: "oa-4",
    title: "Office Manager",
    company: "Various Companies",
    location: "houston",
    category: "operations-admin",
    source: "ZipRecruiter",
    description: "Oversee office operations, manage vendor relationships, coordinate meetings, and maintain organizational systems. Ideal for candidates with operations management and team coordination experience. $45K-$65K range.",
    url: "https://www.ziprecruiter.com/Jobs/Office-Manager/-in-Houston,TX"
  },
  {
    id: "oa-5",
    title: "Operations Manager",
    company: "Various Companies",
    location: "houston",
    category: "operations-admin",
    source: "Glassdoor",
    description: "Manage daily operations, supervise teams, oversee inventory and vendor relationships, and ensure smooth service delivery. Restaurant and retail operations experience highly valued. Browse 200+ listings.",
    url: "https://www.glassdoor.com/Job/houston-operations-manager-jobs-SRCH_IL.0,7_IC1140171_KO8,26.htm"
  },
  {
    id: "oa-6",
    title: "Project Coordinator",
    company: "University of Houston",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Coordinate project activities, manage timelines, prepare documentation, and facilitate communication between stakeholders. Bachelor's degree required. Strong organizational and problem-solving skills essential.",
    url: "https://www.indeed.com/q-project-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "oa-7",
    title: "Administrative Assistant",
    company: "Texas Children's Hospital",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide high-level administrative support including scheduling, correspondence, and document management. Requires strong attention to detail and ability to handle confidential information. Great benefits package.",
    url: "https://www.indeed.com/q-administrative-assistant-l-houston,-tx-jobs.html"
  },
  {
    id: "oa-rem-1",
    title: "Remote Operations Coordinator",
    company: "Various Companies",
    location: "remote",
    category: "operations-admin",
    source: "FlexJobs",
    description: "Coordinate operations remotely including vendor management, scheduling, and process documentation. Ideal for candidates with cross-cultural communication skills. Browse 100+ remote operations roles.",
    url: "https://www.flexjobs.com/remote-jobs/operations"
  },
  {
    id: "oa-rem-2",
    title: "Virtual Executive Assistant",
    company: "Various Companies",
    location: "remote",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide remote executive support including calendar management, travel booking, meeting coordination, and correspondence. Multilingual skills are a strong plus. Flexible scheduling available.",
    url: "https://www.indeed.com/q-remote-executive-assistant-jobs.html"
  },

  // ============================================================
  // CATEGORY 2: Bilingual & Translation — Houston & Remote
  // ============================================================
  {
    id: "bt-1",
    title: "Bilingual Administrative Assistant (Spanish)",
    company: "Various Companies",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Provide administrative support in a bilingual environment. Spanish fluency required. Handle correspondence, scheduling, and customer interactions in both English and Spanish. Browse 300+ bilingual jobs in Houston.",
    url: "https://www.indeed.com/q-bilingual-spanish-administrative-assistant-l-houston,-tx-jobs.html"
  },
  {
    id: "bt-2",
    title: "Bilingual Customer Service Representative",
    company: "Various Companies",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Assist Spanish and English-speaking customers with inquiries, service requests, and issue resolution. Fluent Spanish required. Strong communication and conflict resolution skills valued. Multiple openings across industries.",
    url: "https://www.linkedin.com/jobs/search/?keywords=bilingual+spanish&location=Houston%2C+Texas"
  },
  {
    id: "bt-3",
    title: "Bilingual Coordinator",
    company: "Houston ISD",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Coordinate bilingual programs and serve as a liaison between Spanish-speaking families and school staff. Bachelor's degree and fluent Spanish required. Meaningful work supporting the community.",
    url: "https://www.indeed.com/q-bilingual-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "bt-4",
    title: "Japanese Bilingual Jobs — Houston & Remote",
    company: "Various Companies",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Roles requiring Japanese language skills in Houston including coordination, translation, and client services for Japanese companies with US operations. Professional-level Japanese proficiency valued.",
    url: "https://www.indeed.com/q-japanese-bilingual-l-houston,-tx-jobs.html"
  },
  {
    id: "bt-5",
    title: "Bilingual Receptionist / Front Desk",
    company: "Various Companies",
    location: "houston",
    category: "bilingual-translation",
    source: "ZipRecruiter",
    description: "Greet visitors and manage front desk operations in English and Spanish. Handle phone calls, scheduling, and visitor management. Customer service experience preferred. $15-$22/hr.",
    url: "https://www.ziprecruiter.com/Jobs/Bilingual-Receptionist/-in-Houston,TX"
  },
  {
    id: "bt-rem-1",
    title: "Remote Spanish Interpreter",
    company: "Various Companies",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Provide over-the-phone or video interpretation services between Spanish and English speakers. Flexible scheduling, work from home. Fluent Spanish required. $18-$35/hr depending on experience.",
    url: "https://www.indeed.com/q-remote-spanish-interpreter-jobs.html"
  },
  {
    id: "bt-rem-2",
    title: "Remote Translation & Localization",
    company: "Various Companies",
    location: "remote",
    category: "bilingual-translation",
    source: "FlexJobs",
    description: "Translate documents, marketing materials, and digital content between English and Spanish or Japanese. Remote and freelance options available. Browse 50+ translation and localization roles.",
    url: "https://www.flexjobs.com/remote-jobs/translation"
  },
  {
    id: "bt-rem-3",
    title: "Japanese Language Specialist (Remote)",
    company: "Various Companies",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Remote roles requiring Japanese proficiency including translation, localization, client services, and business coordination for US-Japan business operations. Professional Japanese skills required.",
    url: "https://www.linkedin.com/jobs/search/?keywords=japanese+language&location=United+States&f_WT=2"
  },
  {
    id: "bt-rem-4",
    title: "Bilingual Virtual Assistant",
    company: "Various Companies",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Provide remote administrative support in multiple languages. Handle email, scheduling, research, and customer communication. Spanish and/or Japanese skills give you a competitive edge. Flexible hours.",
    url: "https://www.indeed.com/q-bilingual-virtual-assistant-remote-jobs.html"
  },

  // ============================================================
  // CATEGORY 3: Teaching & Education — Houston & Remote
  // ============================================================
  {
    id: "te-1",
    title: "ESL Teacher",
    company: "Houston Community College",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Teach English as a Second Language to adult learners. Design lesson plans, assess proficiency, and deliver engaging instruction. Bachelor's degree required. Experience with multilingual learners preferred.",
    url: "https://www.indeed.com/q-esl-teacher-l-houston,-tx-jobs.html"
  },
  {
    id: "te-2",
    title: "Bilingual Teacher / Tutor",
    company: "Various Schools & Centers",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Teach or tutor students in bilingual settings. Spanish fluency highly valued. Experience with K-12 or adult learners. Develop curriculum materials and track student progress. Multiple openings across Houston.",
    url: "https://www.indeed.com/q-bilingual-teacher-l-houston,-tx-jobs.html"
  },
  {
    id: "te-3",
    title: "Education Coordinator",
    company: "Various Organizations",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Coordinate educational programs, manage schedules, and support instructors. Strong organizational skills and cross-cultural communication experience valued. Bachelor's degree required.",
    url: "https://www.linkedin.com/jobs/search/?keywords=education+coordinator&location=Houston%2C+Texas"
  },
  {
    id: "te-4",
    title: "After-School Program Coordinator",
    company: "Various Organizations",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Plan and oversee after-school activities and enrichment programs. Manage staff, coordinate logistics, and communicate with parents. Experience with youth programs and bilingual skills are a plus.",
    url: "https://www.indeed.com/q-after-school-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "te-rem-1",
    title: "Online English Teacher",
    company: "Various Platforms",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Teach English online to international students. Set your own schedule. Bachelor's degree required. Experience teaching ESL in Japan or abroad is a major advantage. $15-$30/hr.",
    url: "https://www.indeed.com/q-online-english-teacher-remote-jobs.html"
  },
  {
    id: "te-rem-2",
    title: "Remote Japanese Language Tutor",
    company: "Various Platforms",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Tutor students learning Japanese online. Professional Japanese proficiency required. Create lesson materials, assess progress, and provide feedback. Flexible scheduling. Great for candidates with teaching experience in Japan.",
    url: "https://www.indeed.com/q-japanese-tutor-remote-jobs.html"
  },
  {
    id: "te-rem-3",
    title: "Curriculum Developer (Remote)",
    company: "Various EdTech Companies",
    location: "remote",
    category: "teaching-education",
    source: "FlexJobs",
    description: "Design and develop educational curriculum and lesson plans for language learning programs. Experience creating ESL materials and adapting content for varied proficiency levels is ideal.",
    url: "https://www.flexjobs.com/remote-jobs/education-training"
  },
  {
    id: "te-rem-4",
    title: "Remote ESL Instructor",
    company: "Various Companies",
    location: "remote",
    category: "teaching-education",
    source: "ZipRecruiter",
    description: "Teach English to adult learners via video conferencing. Use communicative methods and assess proficiency. Bachelor's degree and ESL teaching experience required. Flexible hours. $20-$35/hr.",
    url: "https://www.ziprecruiter.com/Jobs/Remote-ESL-Teacher"
  },

  // ============================================================
  // CATEGORY 4: Hospitality & Service — Houston
  // ============================================================
  {
    id: "hs-1",
    title: "Restaurant Manager",
    company: "Various Restaurants",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Oversee front- and back-of-house operations, manage staff, control inventory and COGS, and ensure excellent guest experiences. Operations management and team leadership experience required. Browse 500+ listings.",
    url: "https://www.indeed.com/q-restaurant-manager-l-houston,-tx-jobs.html"
  },
  {
    id: "hs-2",
    title: "Bar Manager",
    company: "Various Establishments",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Manage bar operations including inventory, staff scheduling, and customer service. Bartending experience and leadership skills required. Handle high-volume service while maintaining quality and professionalism.",
    url: "https://www.indeed.com/q-bar-manager-l-houston,-tx-jobs.html"
  },
  {
    id: "hs-3",
    title: "Front of House Manager",
    company: "Various Restaurants",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Lead front-of-house team, manage reservations, coordinate with kitchen staff, and ensure seamless guest experiences. Experience with reservation systems (OpenTable/Resy) and high-volume service preferred.",
    url: "https://www.linkedin.com/jobs/search/?keywords=front+of+house+manager&location=Houston%2C+Texas"
  },
  {
    id: "hs-4",
    title: "Event Coordinator",
    company: "Various Venues",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Plan and execute events including private dining, large parties, and special occasions. Coordinate with vendors, manage timelines, and ensure client satisfaction. Hospitality and organizational experience valued.",
    url: "https://www.indeed.com/q-event-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "hs-5",
    title: "Hotel Operations Coordinator",
    company: "Various Hotels",
    location: "houston",
    category: "hospitality",
    source: "Glassdoor",
    description: "Coordinate hotel operations including guest services, scheduling, and vendor management. Bilingual skills (Spanish/Japanese) are a significant advantage in Houston's international hospitality market.",
    url: "https://www.glassdoor.com/Job/houston-hotel-operations-jobs-SRCH_IL.0,7_IC1140171_KO8,24.htm"
  },
  {
    id: "hs-6",
    title: "Hospitality Jobs — All Houston Listings",
    company: "Multiple Companies",
    location: "houston",
    category: "hospitality",
    source: "ZipRecruiter",
    description: "Browse all hospitality management positions in Houston. Includes restaurant management, bar supervision, event coordination, and guest services roles. $40K-$70K salary range.",
    url: "https://www.ziprecruiter.com/Jobs/Hospitality-Manager/-in-Houston,TX"
  },
  {
    id: "hs-7",
    title: "Food & Beverage Manager",
    company: "Various Companies",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Oversee food and beverage operations including menu development, vendor relationships, inventory management, and staff training. Strong operations background and customer service skills essential.",
    url: "https://www.indeed.com/q-food-beverage-manager-l-houston,-tx-jobs.html"
  },
  {
    id: "hs-8",
    title: "Bilingual Guest Services Manager",
    company: "Various Hotels & Venues",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Manage guest relations and front desk operations. Bilingual skills (Spanish/Japanese) highly valued for serving Houston's diverse international clientele. Conflict resolution and customer service experience essential.",
    url: "https://www.linkedin.com/jobs/search/?keywords=bilingual+hospitality+manager&location=Houston%2C+Texas"
  },

  // ============================================================
  // CATEGORY 5: Marketing & Communications — Houston & Remote
  // ============================================================
  {
    id: "mc-1",
    title: "Marketing Coordinator",
    company: "Various Companies",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Coordinate marketing campaigns, manage social media content, and support promotional activities. Graphic design skills and bilingual abilities are a plus. Bachelor's degree preferred.",
    url: "https://www.indeed.com/q-marketing-coordinator-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-2",
    title: "Social Media Coordinator",
    company: "Various Companies",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Create and manage social media content, track performance metrics, and coordinate weekly promotions. Experience with social media scheduling tools and basic graphic design required.",
    url: "https://www.linkedin.com/jobs/search/?keywords=social+media+coordinator&location=Houston%2C+Texas"
  },
  {
    id: "mc-3",
    title: "Graphic Designer / Marketing Assistant",
    company: "Various Companies",
    location: "houston",
    category: "marketing-comms",
    source: "Glassdoor",
    description: "Create visual content for marketing campaigns, social media, and print materials. Proficiency in design tools (Canva, Adobe Suite) and strong visual communication skills required. Browse 100+ listings.",
    url: "https://www.glassdoor.com/Job/houston-graphic-designer-jobs-SRCH_IL.0,7_IC1140171_KO8,24.htm"
  },
  {
    id: "mc-4",
    title: "Communications Specialist",
    company: "Various Companies",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Develop internal and external communications, manage content calendars, and coordinate with stakeholders. Strong writing skills and organizational abilities essential. Bilingual candidates preferred.",
    url: "https://www.indeed.com/q-communications-specialist-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-5",
    title: "Bilingual Marketing Specialist",
    company: "Various Companies",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Create marketing content in English and Spanish for diverse audiences. Manage bilingual campaigns, translate marketing materials, and support multicultural outreach. Spanish fluency required.",
    url: "https://www.indeed.com/q-bilingual-marketing-l-houston,-tx-jobs.html"
  },
  {
    id: "mc-rem-1",
    title: "Remote Social Media Manager",
    company: "Various Companies",
    location: "remote",
    category: "marketing-comms",
    source: "FlexJobs",
    description: "Manage social media accounts, create content, and track analytics remotely. Experience with content scheduling, graphic design, and performance metrics. Browse 200+ remote social media roles.",
    url: "https://www.flexjobs.com/remote-jobs/social-media"
  },
  {
    id: "mc-rem-2",
    title: "Remote Marketing Coordinator",
    company: "Various Companies",
    location: "remote",
    category: "marketing-comms",
    source: "Indeed",
    description: "Coordinate marketing activities remotely including campaign management, content creation, and vendor coordination. Strong organizational skills and graphic design experience valued.",
    url: "https://www.indeed.com/q-remote-marketing-coordinator-jobs.html"
  },

  // ============================================================
  // CATEGORY 6: Writing & Publishing — Houston & Remote
  // ============================================================
  {
    id: "wr-1",
    title: "Content Writer",
    company: "Various Companies",
    location: "houston",
    category: "writing",
    source: "Indeed",
    description: "Write strategic content for digital marketing, blogs, and web copy. Strong writing skills and attention to detail required. Cross-cultural perspective and bilingual abilities are a bonus.",
    url: "https://www.indeed.com/q-content-writer-l-houston,-tx-jobs.html"
  },
  {
    id: "wr-2",
    title: "Editorial Assistant",
    company: "Various Publishers",
    location: "houston",
    category: "writing",
    source: "Indeed",
    description: "Provide administrative, editorial, and organizational support. Manage communications, organize schedules, review submissions, and assist with content development. Detail-oriented individuals with strong language skills preferred.",
    url: "https://www.indeed.com/q-editorial-assistant-l-houston,-tx-jobs.html"
  },
  {
    id: "wr-rem-1",
    title: "Freelance Writer",
    company: "Various Publications",
    location: "remote",
    category: "writing",
    source: "Remotive",
    description: "Remote freelance writing opportunities across multiple publications. $50-$75/hr. Flexible schedule. Strong writing skills and ability to research and produce quality content required.",
    url: "https://remotive.com/remote-jobs/writing"
  },
  {
    id: "wr-rem-2",
    title: "Remote Content Writer",
    company: "Various Companies",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "Write blog posts, articles, and marketing content remotely. Cross-cultural experience and multilingual skills add unique perspective. Browse 300+ remote content writer openings.",
    url: "https://www.indeed.com/q-remote-content-writer-jobs.html"
  },
  {
    id: "wr-rem-3",
    title: "Copywriter (Remote)",
    company: "Various Companies",
    location: "remote",
    category: "writing",
    source: "FlexJobs",
    description: "Produce blog posts, social media content, guides, and marketing copy remotely. Part-time, freelance, and full-time options available. $27-$67/hr range. Browse 300+ remote copywriting roles.",
    url: "https://www.flexjobs.com/remote-jobs/online-copywriting"
  },
  {
    id: "wr-rem-4",
    title: "Remote Writing & Editing Jobs — All Listings",
    company: "Multiple Companies",
    location: "remote",
    category: "writing",
    source: "Working Nomads",
    description: "Curated board of remote writing positions: content writer, copywriter, editor, and more. Full-time, part-time, freelance, or work-from-anywhere options. Updated daily.",
    url: "https://www.workingnomads.com/remote-writing-jobs"
  }
];
