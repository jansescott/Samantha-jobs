const jobs = [
  // ============================================================
  // CATEGORY 1: Operations & Admin — Houston, TX & Remote
  // ============================================================
  {
    id: "oa-1",
    title: "Senior Executive Assistant",
    company: "Primary Services",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Senior-level executive assistant supporting leadership in Houston, TX. Calendar management, travel coordination, and high-level administrative support for executives.",
    url: "https://www.linkedin.com/jobs/view/senior-executive-assistant-at-primary-services-4425267913"
  },
  {
    id: "oa-2",
    title: "Administrative Assistant",
    company: "Brooksource",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Administrative support role in Houston, TX via consulting firm Brooksource. General office coordination, scheduling, and clerical support.",
    url: "https://www.linkedin.com/jobs/view/administrative-assistant-at-brooksource-4425269462"
  },
  {
    id: "oa-3",
    title: "Executive Assistant",
    company: "Houston City Personnel",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Executive assistant placement in Houston, TX. Calendar management, scheduling, and executive support for a local employer.",
    url: "https://www.linkedin.com/jobs/view/executive-assistant-at-houston-city-personnel-4412927983"
  },
  {
    id: "oa-4",
    title: "Executive Assistant",
    company: "Critical Project Services",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Executive assistant role in Houston, TX supporting executives with administrative coordination and project support.",
    url: "https://www.linkedin.com/jobs/view/executive-assistant-at-critical-project-services-4412990337"
  },
  {
    id: "oa-5",
    title: "Administrative Assistant / Receptionist",
    company: "Easter Seals Greater Houston",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Combined administrative assistant and front-desk reception role in Houston, TX. Front-office coordination, visitor management, and clerical support for a nonprofit.",
    url: "https://www.linkedin.com/jobs/view/administrative-assistant-receptionist-at-easter-seals-greater-houston-4424144218"
  },
  {
    id: "oa-6",
    title: "Business Development Coordinator",
    company: "City of Houston",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Operations and administrative coordination role within a City of Houston department. Stakeholder coordination, scheduling, and program support.",
    url: "https://www.linkedin.com/jobs/view/business-development-coordinator-at-city-of-houston-4421665841"
  },
  {
    id: "oa-7",
    title: "C-Suite Executive Assistant",
    company: "Addison Group",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "C-suite executive assistant placement in Greater Houston. High-level support including scheduling, travel, and confidential coordination.",
    url: "https://www.linkedin.com/jobs/view/c-suite-executive-assistant-at-addison-group-4405818227"
  },
  {
    id: "oa-rem-1",
    title: "Remote Operations Coordinator",
    company: "Talentoma",
    location: "remote",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Fully remote operations coordinator role. Coordinates day-to-day operations, scheduling, and administrative workflows for a distributed team.",
    url: "https://www.linkedin.com/jobs/view/remote-operations-coordinator-at-talentoma-4396339930"
  },
  {
    id: "oa-rem-2",
    title: "Executive Assistant / Operations Coordinator (Remote Startup)",
    company: "Assist World",
    location: "remote",
    category: "operations-admin",
    source: "Lever",
    description: "Remote executive assistant / operations coordinator supporting two co-founders at an early-stage deep-tech startup. Scheduling, investor coordination, and operational support.",
    url: "https://jobs.lever.co/assist-world/cee3b689-ebeb-424d-bcc0-9edbe7ec1340"
  },

  // ============================================================
  // CATEGORY 2: Bilingual & Translation — Houston & Remote
  // ============================================================
  {
    id: "bt-1",
    title: "Call Center Specialist — Bilingual Spanish (Behavioral Health)",
    company: "Legacy Community Health",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Bilingual Spanish/English call center role handling patient inquiries and scheduling for a Houston community health network. Strong fit for trilingual customer-service candidates.",
    url: "https://www.linkedin.com/jobs/view/call-center-specialist-bilingual-spanish-bh-at-legacy-community-health-4408867489"
  },
  {
    id: "bt-2",
    title: "Call Center Specialist — Bilingual Spanish",
    company: "Legacy Community Health",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Spanish/English bilingual contact-center position supporting patients across Legacy's Houston-area clinics. Phone-based customer service with high call volume.",
    url: "https://www.linkedin.com/jobs/view/call-center-specialist-bilingual-spanish-at-legacy-community-health-4407794701"
  },
  {
    id: "bt-3",
    title: "Bilingual Psychologist (Spanish/English) — Psychological Evaluations",
    company: "The IMA Group",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Houston-based role conducting Spanish/English psychological evaluations. A bilingual professional listing requiring clinical credentials.",
    url: "https://www.linkedin.com/jobs/view/bilingual-psychologist-spanish-english-%E2%80%93-psychological-evaluations-houston-tx-at-the-ima-group-4401779113"
  },
  {
    id: "bt-4",
    title: "Middle School Spanish Foreign Language Teacher",
    company: "Archdiocese of Galveston-Houston",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Spanish-language instruction role in Houston requiring native/near-native Spanish fluency. Suitable for a trilingual candidate seeking a language-focused position.",
    url: "https://www.linkedin.com/jobs/view/middle-school-spanish-foreign-language-teacher-at-archdiocese-of-galveston-houston-4404551018"
  },
  {
    id: "bt-rem-1",
    title: "Remote Japanese/English Interpreter & Translator",
    company: "OSI Engineering",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Remote Japanese/English interpretation and translation supporting a global automotive client. Excellent match for a Temple University Japan graduate with Japanese fluency.",
    url: "https://www.linkedin.com/jobs/view/remote-japanese-english-interpreter-and-translator-for-global-automotive-company-in-raymond-oh-at-osi-engineering-4427726638"
  },
  {
    id: "bt-rem-2",
    title: "Bilingual Paralegal (Spanish/English)",
    company: "The Mom Project",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Remote bilingual Spanish/English paralegal role supporting legal case work. Strong fit for bilingual administrative/legal support.",
    url: "https://www.linkedin.com/jobs/view/bilingual-paralegal-at-the-mom-project-4422134864"
  },
  {
    id: "bt-rem-3",
    title: "Remote Bilingual Interpreter (English ⇄ Spanish)",
    company: "TransPerfect Connect",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Work-from-home over-the-phone Spanish/English interpreter handling on-demand calls across healthcare, legal, and customer-service settings.",
    url: "https://www.linkedin.com/jobs/view/remote-bilingual-interpreter-english-spanish-at-transperfect-connect-4398073057"
  },
  {
    id: "bt-rem-4",
    title: "Bilingual Interpreter (English-Spanish) — Independent Service",
    company: "Distro",
    location: "remote",
    category: "bilingual-translation",
    source: "Lever",
    description: "Remote real-time English-Spanish interpreting between professionals and Spanish-speaking individuals across healthcare, insurance, legal, and customer-service contexts. Flexible part- or full-time.",
    url: "https://jobs.lever.co/distro/9043ec41-e595-4411-9007-3cd395fb63cf"
  },

  // ============================================================
  // CATEGORY 3: Teaching & Education — Houston & Remote
  // ============================================================
  {
    id: "te-1",
    title: "Middle School Spanish Teacher",
    company: "Presbyterian School of Houston",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Middle school Spanish teaching role at a private school in Houston, TX. Strong fit for a native/fluent Spanish speaker; classroom instruction for the upcoming school year.",
    url: "https://www.linkedin.com/jobs/view/middle-school-spanish-teacher-at-presbyterian-school-of-houston-4392918681"
  },
  {
    id: "te-2",
    title: "Teacher — PreK Bilingual (2026-2027 School Year)",
    company: "Channelview ISD",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "PreK bilingual (Spanish) teaching openings for the 2026-2027 school year in the Houston metro. Requires Spanish bilingual proficiency.",
    url: "https://www.linkedin.com/jobs/view/teacher-prek-bilingual-5-positions-2026-2027-school-year-at-channelview-isd-4376659830"
  },
  {
    id: "te-3",
    title: "High School English Language Arts Teacher (2026-2027)",
    company: "KIPP Texas Public Schools",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "High school ELA teaching position in Houston, TX for the 2026-2027 school year at a large charter network. ESL/bilingual background a plus.",
    url: "https://www.linkedin.com/jobs/view/high-school-english-language-arts-teacher-26-27-at-kipp-texas-public-schools-4372109940"
  },
  {
    id: "te-4",
    title: "LOTE Spanish Teacher 2026-2027",
    company: "New Caney Independent School District",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Languages Other Than English (LOTE) Spanish teacher role for 2026-2027 in the Houston metro (New Caney/Porter, TX). Secondary Spanish instruction.",
    url: "https://www.linkedin.com/jobs/view/lote-spanish-teacher-2026-2027-at-new-caney-independent-school-district-4380746449"
  },
  {
    id: "te-rem-1",
    title: "Spanish Tutor (Remote)",
    company: "Tutor Me LA",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Fully remote, flexible-hours Spanish tutoring role. Online one-on-one and small-group tutoring; ideal for a fluent Spanish speaker.",
    url: "https://www.linkedin.com/jobs/view/spanish-tutor-remote-at-tutor-me-la-llc-4412755252"
  },
  {
    id: "te-rem-2",
    title: "Specialized Online ESL Teacher (Remote)",
    company: "The Really Great Teacher Company",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Remote online ESL teaching position delivering English lessons to learners virtually. Flexible scheduling; fits a TESOL/ESL-oriented English instructor.",
    url: "https://www.linkedin.com/jobs/view/specialized-online-esl-teacher-remote-special-needs-instructor-at-the-really-great-teacher-company-4398561542"
  },
  {
    id: "te-rem-3",
    title: "Online Japanese Teacher — Weekly Tutoring",
    company: "Sponge School",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Remote/online weekly Japanese tutoring role. Direct match for a trilingual candidate with Japanese fluency and a Temple University Japan background.",
    url: "https://www.linkedin.com/jobs/view/online-japanese-teacher-weekly-tutoring-washington-at-sponge-school-4256590530"
  },
  {
    id: "te-rem-4",
    title: "Higher Education Curriculum Specialist (Remote)",
    company: "Crossing Hurdles",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Remote education coordination / curriculum specialist role supporting higher-ed instructional content. Good fit for education coordination beyond direct classroom teaching.",
    url: "https://www.linkedin.com/jobs/view/higher-education-curriculum-specialist-$98-hr-remote-at-crossing-hurdles-4369896483"
  },

  // ============================================================
  // CATEGORY 4: Hospitality & Service — Houston
  // ============================================================
  {
    id: "hs-1",
    title: "Food & Beverage Supervisor — Craft F&B",
    company: "The Post Oak Hotel at Uptown Houston",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "F&B supervisory role at Houston's only Forbes Five-Star hotel, overseeing service operations at the Craft food & beverage outlet. Guest-facing leadership ideal for a multilingual professional.",
    url: "https://www.linkedin.com/jobs/view/food-beverage-supervisor-craft-f-b-at-the-post-oak-hotel-at-uptown-houston-4425085216"
  },
  {
    id: "hs-2",
    title: "Front Desk Supervisor — Magnolia Houston",
    company: "Magnolia Hotels",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Supervises front desk operations at the downtown Magnolia Houston, leading guest check-in/out and team coordination. Strong fit for a guest-facing, multilingual candidate.",
    url: "https://www.linkedin.com/jobs/view/front-desk-supervisor-magnolia-houston-at-magnolia-hotels-4424617928"
  },
  {
    id: "hs-3",
    title: "Assistant Front Desk Manager — Magnolia Houston",
    company: "Magnolia Hotels",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Assists in managing the front office team and elevating the guest experience at Magnolia Houston. A step-up leadership role for an experienced guest services professional.",
    url: "https://www.linkedin.com/jobs/view/assistant-front-desk-manager-magnolia-houston-at-magnolia-hotels-4424613813"
  },
  {
    id: "hs-4",
    title: "Food & Beverage Supervisor",
    company: "Westmont Hospitality",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Oversees daily food and beverage service operations for a Houston hospitality property. Service-floor leadership role with direct guest interaction.",
    url: "https://www.linkedin.com/jobs/view/food-beverage-supervisor-at-westmont-hospitality-4418673945"
  },
  {
    id: "hs-5",
    title: "Restaurant Manager",
    company: "Thind Management",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Manages restaurant operations, staffing, and guest satisfaction for a Houston-area property. Full-service restaurant leadership role.",
    url: "https://www.linkedin.com/jobs/view/restaurant-manager-at-thind-management-4416837166"
  },
  {
    id: "hs-6",
    title: "Front Desk Agent",
    company: "Hotel Granduca Houston",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Front-of-house guest reception role at a luxury boutique Italian-inspired hotel in Houston's Uptown/Galleria area. Multilingual guest service skills are a strong asset.",
    url: "https://www.linkedin.com/jobs/view/front-desk-agent-at-hotel-granduca-houston-4414686016"
  },
  {
    id: "hs-7",
    title: "Hotel Guest Services Agent",
    company: "Pyramid Global Hospitality",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Provides front-line guest services including check-in, concierge support, and issue resolution at a Houston hotel. Ideal for a service-oriented, multilingual candidate.",
    url: "https://www.linkedin.com/jobs/view/hotel-guest-services-agent-at-pyramid-global-hospitality-4413456851"
  },
  {
    id: "hs-8",
    title: "Food Server — Hilton Houston Convention Center",
    company: "Hilton Americas-Houston",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Food & beverage server role at the large Hilton Americas convention center hotel in downtown Houston. Guest-facing service position in a high-volume hospitality setting.",
    url: "https://www.linkedin.com/jobs/view/food-server-hilton-houston-convention-center-at-hilton-americas-houston-4405359996"
  },

  // ============================================================
  // CATEGORY 5: Marketing & Communications — Houston & Remote
  // ============================================================
  {
    id: "mc-1",
    title: "Marketing & Communications Specialist (Part-Time)",
    company: "Communities In Schools of Houston",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Nonprofit marketing and communications role supporting brand messaging, content, and outreach for a Houston education-focused organization. Strong fit for multilingual writing/communications skills.",
    url: "https://www.linkedin.com/jobs/view/marketing-communications-specialist-part-time-at-communities-in-schools-of-houston-4426521960"
  },
  {
    id: "mc-2",
    title: "Social Media Manager",
    company: "Houston Astros",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Manages social media content and channel strategy for an MLB franchise. Content-driven, writing-focused role with the Houston Astros.",
    url: "https://www.linkedin.com/jobs/view/social-media-manager-at-houston-astros-4413612634"
  },
  {
    id: "mc-3",
    title: "Specialist, Product Marketing",
    company: "Fluence",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Product marketing specialist supporting campaigns, content, and go-to-market messaging in Greater Houston.",
    url: "https://www.linkedin.com/jobs/view/specialist-product-marketing-at-fluence-4413469626"
  },
  {
    id: "mc-4",
    title: "Marketing Coordinator",
    company: "Ultimate Staffing",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Early-career marketing coordinator role in Houston supporting campaigns, content, and coordination. Well-matched to a coordinator-level candidate.",
    url: "https://www.linkedin.com/jobs/view/marketing-coordinator-at-ultimate-staffing-4407047069"
  },
  {
    id: "mc-rem-1",
    title: "Marketing Coordinator — Content Creation & Events (Remote)",
    company: "Updater",
    location: "remote",
    category: "marketing-comms",
    source: "Greenhouse",
    description: "Fully remote coordinator role split roughly evenly between content creation (social posts, blog, email copy, case studies) and event support. Strong writing/communications fit.",
    url: "https://boards.greenhouse.io/updater/jobs/5051212"
  },
  {
    id: "mc-rem-2",
    title: "Marketing & Content Coordinator (Remote, US)",
    company: "Jobgether",
    location: "remote",
    category: "marketing-comms",
    source: "Lever",
    description: "Remote content coordinator role creating, scheduling, and optimizing digital content across social media, websites, and email campaigns, including basic video editing.",
    url: "https://jobs.lever.co/jobgether/8c067226-c35c-477f-a333-cb1f98e98b1a"
  },

  // ============================================================
  // CATEGORY 6: Writing & Publishing — Remote
  // ============================================================
  {
    id: "wr-1",
    title: "Technical Content Writer (Mobile / UX) — Remote",
    company: "BairesDev",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Fully remote technical content writer focused on mobile and UX topics. Strong fit for a multilingual writer with sharp editing skills.",
    url: "https://www.linkedin.com/jobs/view/technical-content-writer-mobile-ux-specialist-remote-work-at-bairesdev-4426114092"
  },
  {
    id: "wr-2",
    title: "Senior Conversion Copywriter — B2B Tech (Remote)",
    company: "BairesDev",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Remote conversion-focused copywriting role for B2B tech, writing persuasive marketing and web copy.",
    url: "https://www.linkedin.com/jobs/view/senior-conversion-copywriter-b2b-tech-remote-work-at-bairesdev-4424634453"
  },
  {
    id: "wr-rem-1",
    title: "Copywriter (Remote)",
    company: "YO IT Consulting",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Fully remote copywriter position producing marketing and web copy across channels.",
    url: "https://www.linkedin.com/jobs/view/copywriter-remote-at-yo-it-consulting-4422000741"
  },
  {
    id: "wr-rem-2",
    title: "Technical Writer (Remote)",
    company: "Conexess Group",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Remote technical writer creating documentation and guides that explain technical concepts and procedures clearly.",
    url: "https://www.linkedin.com/jobs/view/technical-writer-remote-at-conexess-group-4408677868"
  },
  {
    id: "wr-rem-3",
    title: "Content Writer (US, Remote)",
    company: "Wing Assistant",
    location: "remote",
    category: "writing",
    source: "Lever",
    description: "Remote (US) content writer producing blogs, articles, web pages, social posts, newsletters, white papers, and case studies. Hosted on a stable Lever career page.",
    url: "https://jobs.lever.co/getwingapp/3a620870-47f7-4a7e-beca-9a4611e755e6"
  },
  {
    id: "wr-rem-4",
    title: "Bilingual Social Media & Content Creator (Remote)",
    company: "FuseGlobal Partners",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Remote bilingual (English/Spanish) social media and content creation role producing posts, copy, and campaign assets. Strong match for a multilingual writer.",
    url: "https://www.linkedin.com/jobs/view/bilingual-social-media-content-creator-at-fuseglobal-partners-4378046460"
  }
];
