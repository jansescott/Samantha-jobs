const jobs = [
  // ============================================================
  // CATEGORY 1: Operations & Admin — Houston, TX
  // ============================================================
  {
    id: "oa-1",
    title: "Development Operations Coordinator",
    company: "The Council on Recovery",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Support fundraising, donor stewardship, and campaign efforts through project management, CRM oversight, gift processing, and administrative support for the Planning & Development Department.",
    url: "https://www.indeed.com/viewjob?jk=bc2925b6fa41020b"
  },
  {
    id: "oa-2",
    title: "OEM Administrative Coordinator",
    company: "City of Deer Park",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide routine and complex administrative, technical, and clerical work in support of emergency services divisions. Responsible for daily office management of the Office of Emergency Management.",
    url: "https://www.indeed.com/viewjob?jk=17a736374060dec1"
  },
  {
    id: "oa-3",
    title: "Executive Assistant",
    company: "Satterfield & Pontikes Construction",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide high-level administrative support to Executive leadership across business and personal matters. Requires a high school diploma (bachelor's preferred) and at least four years of related experience.",
    url: "https://www.indeed.com/viewjob?jk=547cf405995f4ebb"
  },
  {
    id: "oa-4",
    title: "Operations Administrator",
    company: "C3",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Serve as the primary point of contact for companies seeking to participate in C3 programs. Manage all aspects of the application process and annual renewals.",
    url: "https://www.indeed.com/viewjob?jk=a934350ff97483d7"
  },
  {
    id: "oa-5",
    title: "Regional Operations Manager",
    company: "The Millennium Group",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Provide leadership and operational support, ensure best practices compliance and client satisfaction. Responsible for training employees and monitoring operations budgets.",
    url: "https://www.indeed.com/viewjob?jk=e3aa2ed9aebc7efb"
  },
  {
    id: "oa-6",
    title: "Project Coordinator",
    company: "Enbridge (via Raise)",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Coordinate the project team to achieve quality results in a cost-effective and timely manner. Hybrid role requiring 5-10 years of project-related support experience.",
    url: "https://www.indeed.com/viewjob?jk=3a8d9d902a44ed4d"
  },
  {
    id: "oa-7",
    title: "Senior Administrative Assistant",
    company: "San Jacinto College",
    location: "houston",
    category: "operations-admin",
    source: "Indeed",
    description: "Interface daily with students, administrators, departments, and faculty. Enter student data and maintain computer-based records. Requires three years of office or administrative support experience.",
    url: "https://www.indeed.com/viewjob?jk=a1aca56a2a74c451"
  },
  {
    id: "oa-rem-1",
    title: "Remote Operations Coordinator",
    company: "Sales Operations Coordinator — TriSMART Solar",
    location: "remote",
    category: "operations-admin",
    source: "Indeed",
    description: "Full-time position at $50K-$55K/year. Connect homeowners, sales reps, and the solar install team. Coordinate operations and manage project timelines remotely.",
    url: "https://www.indeed.com/viewjob?jk=023a11a84145ccab"
  },
  {
    id: "oa-rem-2",
    title: "Virtual Executive Assistant",
    company: "Zirtual",
    location: "remote",
    category: "operations-admin",
    source: "Indeed",
    description: "Work-life balanced company offering remote executive assistant services. Requires Associate's/Bachelor's degree or 7+ years EA experience supporting C-level executives. 1099 contractor, flexible scheduling.",
    url: "https://www.indeed.com/viewjob?jk=87f40b29716732a2"
  },

  // ============================================================
  // CATEGORY 2: Bilingual & Translation — Houston & Remote
  // ============================================================
  {
    id: "bt-1",
    title: "Bilingual Administrative Assistant (Spanish)",
    company: "Meneses Law PLLC",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Manage daily administrative operations at a Houston immigration law firm. Bilingual English/Spanish required. Support clients seeking legal solutions with comprehensive benefits included.",
    url: "https://www.indeed.com/viewjob?jk=66af145d74ff80df"
  },
  {
    id: "bt-2",
    title: "Bilingual Customer Service Representative",
    company: "Mygrant Glass",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Serve as the first point of contact for English- and Spanish-speaking customers. Provide outstanding support, handle inquiries, and ensure customer satisfaction at this growing company.",
    url: "https://www.indeed.com/viewjob?jk=20666d0a6b278d72"
  },
  {
    id: "bt-3",
    title: "Traveling Operations Coordinator (Bilingual)",
    company: "Effex Management Solutions",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Launch new client sites and support on-the-ground operations nationwide. Houston-based with travel, $50K base plus bonuses. Bilingual skills essential for diverse workforce coordination.",
    url: "https://www.indeed.com/viewjob?jk=ba714a8dd330f515"
  },
  {
    id: "bt-4",
    title: "Japanese Bilingual — Interpreter/Translator & Admin Support",
    company: "PASONA N A, Inc.",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Support an expatriate manager leading a new engineering project. Provide Japanese-English interpretation, translation, and administrative assistance. Professional Japanese proficiency required.",
    url: "https://www.indeed.com/viewjob?jk=244d3168bb554eb2"
  },
  {
    id: "bt-5",
    title: "Bilingual Front Desk Receptionist",
    company: "North Houston Pole Line (Quanta Services)",
    location: "houston",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Create a welcoming atmosphere in a fast-paced construction office. Bilingual English/Spanish required. Must be warm, organized, and confident handling phones, scheduling, and visitors.",
    url: "https://www.indeed.com/viewjob?jk=8b395a36e3fe31a3"
  },
  {
    id: "bt-rem-1",
    title: "Remote Spanish Interpreter",
    company: "Certified Languages International",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "100% over-the-phone interpretation, high volume of medical calls. Work from home as an independent contractor with flexible scheduling. Requires 2+ years professional OPI experience.",
    url: "https://www.indeed.com/viewjob?jk=9b41d58b72a45c63"
  },
  {
    id: "bt-rem-2",
    title: "Localization Specialist (Remote)",
    company: "Soho Square Solutions",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Requires knowledge of localization issues and cross-cultural awareness. Experience with MS Word, Excel, and specialized technical programs. Knowledge of The Chicago Manual of Style preferred.",
    url: "https://www.indeed.com/viewjob?jk=5e97c0c3675fa82b"
  },
  {
    id: "bt-rem-3",
    title: "Japanese Interpreter (Remote)",
    company: "LanguageBridge Solutions",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "US-based Japanese and English remote speakers needed for over-the-phone interpreting. Vital role in communication between Japanese-speaking patients and healthcare providers.",
    url: "https://www.indeed.com/viewjob?jk=db83dbfb0482302b"
  },
  {
    id: "bt-rem-4",
    title: "Bilingual Virtual Assistant",
    company: "Virtual Staffing Careers",
    location: "remote",
    category: "bilingual-translation",
    source: "Indeed",
    description: "Legal Virtual Assistant role requiring bilingual English/Spanish at C1 level. Manage legal documents, communicate with clients, handle scheduling, and maintain case files remotely.",
    url: "https://www.indeed.com/viewjob?jk=7413850215e505e8"
  },

  // ============================================================
  // CATEGORY 3: Teaching & Education — Houston & Remote
  // ============================================================
  {
    id: "te-1",
    title: "ESL Teacher",
    company: "English 4U Texas",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Teach English as a Second Language at the Greenspoint school location. $18/hr contract basis. Bilingual Spanish-English and teaching experience preferred. Must have excellent English proficiency.",
    url: "https://www.indeed.com/viewjob?jk=0248b4159ffd0107"
  },
  {
    id: "te-2",
    title: "Bilingual/ESL Teacher Assistant",
    company: "Spring Branch ISD",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Bilingual/ESL (LEP) Teacher Assistant position (half-time) for the 2025-2026 school year. Support bilingual learners in a paraprofessional role at one of Houston's largest school districts.",
    url: "https://www.indeed.com/viewjob?jk=bf37f8b3c22aa65e"
  },
  {
    id: "te-3",
    title: "ESL Instructor",
    company: "Interactive College of Technology",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Full-time ESL instruction at the South Houston Campus serving students from 100+ countries. Benefits include medical, dental, vision, and 401(k). Part-time adjunct positions also available.",
    url: "https://www.indeed.com/viewjob?jk=973982620de54be5"
  },
  {
    id: "te-4",
    title: "Student Life Assistant — Events & Programs",
    company: "Houston Community College",
    location: "houston",
    category: "teaching-education",
    source: "Indeed",
    description: "Assist in developing, coordinating, and evaluating student events and activities. Support the Student Life Coordinator with program management and implementation at NW College.",
    url: "https://www.indeed.com/viewjob?jk=bb963808557dda3a"
  },
  {
    id: "te-rem-1",
    title: "Online English Teacher",
    company: "SetSail Global",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Provide English Language Arts instruction to students ages 6-17. Curriculum focuses on reading comprehension, writing development, debate skills, and critical thinking. Flexible remote schedule.",
    url: "https://www.indeed.com/viewjob?jk=b9e08d1bac48388b"
  },
  {
    id: "te-rem-2",
    title: "Online ESL Teacher (Fully Remote)",
    company: "My Virtual Academy",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Join the Virtual English Language Instruction Program helping K-12 students find their voice in a new language. Fully remote position with a mission-driven online school.",
    url: "https://www.indeed.com/viewjob?jk=73f74013dfd0ed77"
  },
  {
    id: "te-rem-3",
    title: "Curriculum Developer (Remote)",
    company: "Correlation One",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Draft and write lessons as contextual business case studies, self-paced labs, and homework assignments. Part-time contract supporting AI education initiatives for high school students.",
    url: "https://www.indeed.com/viewjob?jk=79041f03389705bc"
  },
  {
    id: "te-rem-4",
    title: "Curriculum Designer (Remote)",
    company: "Client Engagement Academy",
    location: "remote",
    category: "teaching-education",
    source: "Indeed",
    description: "Translate client training needs into engaging educational courses. Select instructional methods, define timeframes, and prepare training materials in digital formats. Fully remote position.",
    url: "https://www.indeed.com/viewjob?jk=7519216d665f9a20"
  },

  // ============================================================
  // CATEGORY 4: Hospitality & Service — Houston
  // ============================================================
  {
    id: "hs-1",
    title: "Restaurant Manager",
    company: "Caribbean Jerk Palace",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Oversee daily operations at a Houston restaurant with a strong food industry background. Manage kitchen staff including cooks and bartenders, handle cash management and financial reporting.",
    url: "https://www.indeed.com/viewjob?jk=9ee249ffd3772904"
  },
  {
    id: "hs-2",
    title: "Bar Manager",
    company: "Mac Haik Restaurant Group — Kirkwood",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Lead a bar program from the ground up at Houston's newest upscale dining destination. Manage inventory, recruit and train bartenders, deliver world-class guest experiences. $55K+ plus bonus.",
    url: "https://www.indeed.com/viewjob?jk=64514e5bcb97be36"
  },
  {
    id: "hs-3",
    title: "Hotel Restaurant Manager",
    company: "Davidson Hospitality Group — Le Meridien Houston",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Take charge of the restaurant at Le Meridien Houston Downtown where culinary excellence meets top-notch service. Drive guest satisfaction and ensure smooth daily operations.",
    url: "https://www.indeed.com/viewjob?jk=64eaabaa0e60edd0"
  },
  {
    id: "hs-4",
    title: "Event Coordinator",
    company: "Walters Wedding Estates",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Ensure venue guests have the best experience. Lead rehearsal activities, oversee ceremony processionals, and coordinate receptions. Detail-oriented with strong communication skills required.",
    url: "https://www.indeed.com/viewjob?jk=d41461e3ac7cec6b"
  },
  {
    id: "hs-5",
    title: "Hotel Front Desk Manager",
    company: "Days Inn & Suites — Southwest Houston",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Manage front desk operations, rent rooms, provide customer service, and handle reservations. Located in Southwest Houston on Highway 6. $37K-$42K/year.",
    url: "https://www.indeed.com/viewjob?jk=6fec6423473b2b21"
  },
  {
    id: "hs-6",
    title: "Catering Sales Event Planner",
    company: "Swift + Company",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Manage and produce events from conception through completion. Committed to outstanding customer service and organizing unique, memorable events. Full-time at a growing events company.",
    url: "https://www.indeed.com/viewjob?jk=c2b808616e4874d2"
  },
  {
    id: "hs-7",
    title: "Food & Beverage Manager",
    company: "Lone Star Market",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Ensure smooth kitchen operations at a convenience store, meeting sales targets and food cost goals. Train, supervise, and evaluate staff. Leadership and customer service skills essential.",
    url: "https://www.indeed.com/viewjob?jk=51bb6e2f0d79d65e"
  },
  {
    id: "hs-8",
    title: "Assistant Food & Beverage Director",
    company: "La Colombe D'or",
    location: "houston",
    category: "hospitality",
    source: "Indeed",
    description: "Key role in the F&B department at La Colombe D'or. Drive strategies to develop long-term business relationships, make on-site presentations, and conduct outside sales calls.",
    url: "https://www.indeed.com/viewjob?jk=4285aa1b53276293"
  },

  // ============================================================
  // CATEGORY 5: Marketing & Communications — Houston & Remote
  // ============================================================
  {
    id: "mc-1",
    title: "Marketing Coordinator",
    company: "Baxter & Woodman Inc",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Maintain marketing information systems, develop proposals and presentations, and support Business Development. Bachelor's in Marketing/Communications, Adobe InDesign proficiency required.",
    url: "https://www.indeed.com/viewjob?jk=d23a8680af2bcdba"
  },
  {
    id: "mc-2",
    title: "Social Media and Brand Coordinator",
    company: "TMD Staffing",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Develop and execute social media strategy across Facebook, Instagram, TikTok, and LinkedIn. 2+ years managing business social media accounts. Experience with Meta Business Suite and Canva required.",
    url: "https://www.indeed.com/viewjob?jk=975bc7b8c35efd2a"
  },
  {
    id: "mc-3",
    title: "Graphic Designer",
    company: "On-Board Services",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Create visual content for marketing campaigns, social media, and print materials in Houston. Proficiency in design tools and strong visual communication skills required.",
    url: "https://www.indeed.com/viewjob?jk=6179aced1e352125"
  },
  {
    id: "mc-4",
    title: "Marketing Communications Specialist",
    company: "Grocery Services, Inc.",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Entry-level marketing communications role at a retail partner specializing in the WIC supplemental food program. Serve the Greater Houston Area with community-focused marketing initiatives.",
    url: "https://www.indeed.com/viewjob?jk=4569997744386411"
  },
  {
    id: "mc-5",
    title: "Marketing Specialist",
    company: "Cenikor Foundation",
    location: "houston",
    category: "marketing-comms",
    source: "Indeed",
    description: "Manage digital marketing plan implementation, printed materials, website, and social media for a substance abuse and healthcare nonprofit. 1+ year marketing experience required.",
    url: "https://www.indeed.com/viewjob?jk=9f187d8507588c0b"
  },
  {
    id: "mc-rem-1",
    title: "Remote Social Media Manager",
    company: "Hilton",
    location: "remote",
    category: "marketing-comms",
    source: "Indeed",
    description: "Shape the social media presence of Hilton's Lifestyle brands portfolio. Develop and execute social strategies that enhance brand reputation and drive engagement. Contract role, Eastern time preferred.",
    url: "https://www.indeed.com/viewjob?jk=d5a442dd9c8ce417"
  },
  {
    id: "mc-rem-2",
    title: "Remote Marketing Coordinator",
    company: "RSAC (Cybersecurity Conference)",
    location: "remote",
    category: "marketing-comms",
    source: "Indeed",
    description: "Support go-to-market strategies and multi-channel campaigns for the cybersecurity industry's premier conference. Fully remote team operating across the United States.",
    url: "https://www.indeed.com/viewjob?jk=7cac0895f0e269f3"
  },

  // ============================================================
  // CATEGORY 6: Writing & Publishing — Houston & Remote
  // ============================================================
  {
    id: "wr-1",
    title: "Content Writer",
    company: "DISA Global Solutions",
    location: "houston",
    category: "writing",
    source: "Indeed",
    description: "Create accurate, on-brand content for blogs, website copy, internal/external communications, and newsletters. Collaborate with subject matter experts to produce clear, SEO-friendly copy.",
    url: "https://www.indeed.com/viewjob?jk=8556a57bf3f9833e"
  },
  {
    id: "wr-2",
    title: "Editorial Assistant (Remote)",
    company: "Advantage Informatics",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "Support day-to-day publishing operations across online and print news portfolio. Aid in content production including CMS management, copy editing, fact-checking, and contributor communication.",
    url: "https://www.indeed.com/viewjob?jk=6e6bd15d1fe7bda6"
  },
  {
    id: "wr-rem-1",
    title: "Freelance Content Writer",
    company: "Various Companies",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "Create well-researched, original content for websites, blogs, press releases, and case studies. 2-6 years experience required with strong grasp of writing for tech and mobile app development.",
    url: "https://www.indeed.com/viewjob?jk=4bbcfb54cf6e659a"
  },
  {
    id: "wr-rem-2",
    title: "Remote Content Writer",
    company: "Served With Honor",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "100% remote content writer position at $67,800/year ($32.60/hr). Evaluate analytics, regularly submit website content, and promote the company blog by pitching articles to third-party platforms.",
    url: "https://www.indeed.com/viewjob?jk=69946222760530c4"
  },
  {
    id: "wr-rem-3",
    title: "Copywriter (Remote)",
    company: "Snapfish / Shutterfly",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "Write across marketing channels with focus on email, website, app, SMS, and paid social. 3+ years copywriting experience in digital-forward retail/ecommerce. Remote with state restrictions.",
    url: "https://www.indeed.com/viewjob?jk=a53d61d85ad0cadf"
  },
  {
    id: "wr-rem-4",
    title: "Marketing Copywriter & Editor (Remote)",
    company: "Dropbox",
    location: "remote",
    category: "writing",
    source: "Indeed",
    description: "Shape and strengthen the Dropbox voice within high-impact marketing initiatives on the Writing Studio team. $128K-$196K depending on location. Accomplished copywriter, editor, and story strategist needed.",
    url: "https://www.indeed.com/viewjob?jk=62010cdf36ada390"
  }
];
