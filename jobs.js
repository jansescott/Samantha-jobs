const jobs = [
  // ============================================================
  // CATEGORY 1: Operations & Admin — Houston, TX
  // ============================================================
  {
    id: "oa-1",
    title: "Operations Coordinator",
    company: "Cartier",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Coordinate daily operations at luxury retailer Cartier's Houston location. Support store leadership with scheduling, inventory, and client experience initiatives.",
    url: "https://www.linkedin.com/jobs/view/operations-coordinator-houston-at-cartier-4098225710"
  },
  {
    id: "oa-2",
    title: "Administrative Coordinator",
    company: "Levy Park",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Coordinate administrative operations for one of Houston's premier urban green spaces. Support programming, events, and day-to-day park management.",
    url: "https://www.linkedin.com/jobs/view/administrative-coordinator-at-levy-park-4257005259"
  },
  {
    id: "oa-3",
    title: "Executive Assistant / Office Coordinator",
    company: "Burnett Specialists Staffing",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Executive Assistant and Office Coordinator role in Uptown Houston. Provide high-level administrative support including calendar management, travel coordination, and project oversight.",
    url: "https://www.linkedin.com/jobs/view/executive-assistant-office-coordinator-uptown-houston-at-burnett-specialists-staffing-recruiting-4374049701"
  },
  {
    id: "oa-4",
    title: "Office Administrator",
    company: "Insight Global",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Manage office operations and administrative workflows for Insight Global's Houston location. Oversee facilities, vendor relations, and daily office support.",
    url: "https://www.linkedin.com/jobs/view/office-administrator-at-insight-global-4370430292"
  },
  {
    id: "oa-5",
    title: "Senior Operations Coordinator",
    company: "Flexicrew Technical Services",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Senior-level operations coordination role in Houston. Manage project logistics, client communications, and ensure operational efficiency across technical service engagements.",
    url: "https://www.linkedin.com/jobs/view/senior-operations-coordinator-at-flexicrew-technical-services-4288066696"
  },
  {
    id: "oa-6",
    title: "Project Coordinator",
    company: "FirePro Tech, LLC",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Coordinate with clients, vendors, and internal teams at a full-service fire protection company. Knowledge of construction industry and building codes a plus. PMP certification preferred.",
    url: "https://www.linkedin.com/jobs/view/project-coordinator-at-firepro-tech-llc-3705685537"
  },
  {
    id: "oa-7",
    title: "Administrative Assistant",
    company: "Hines",
    location: "houston",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Provide administrative support at Hines, a global real estate investment firm headquartered in Houston. Handle scheduling, correspondence, and office coordination.",
    url: "https://www.linkedin.com/jobs/view/administrative-assistant-at-hines-4299389862"
  },
  {
    id: "oa-rem-1",
    title: "Executive Assistant (Fully Remote)",
    company: "33Vincent / Base",
    location: "remote",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Create and determine your own workflow as a remote Executive Assistant. Manage your hours, work product, and client interactions independently. US-based remote position.",
    url: "https://www.linkedin.com/jobs/view/executive-assistant-fully-remote-at-33vincent-3114060814"
  },
  {
    id: "oa-rem-2",
    title: "Virtual Executive Assistant (Remote)",
    company: "Zirtual",
    location: "remote",
    category: "operations-admin",
    source: "LinkedIn",
    description: "Provide high-level professional administrative service to clients remotely. Work independently on tasks and projects as assigned. Requires Associate's/Bachelor's degree or equivalent EA experience.",
    url: "https://www.linkedin.com/jobs/view/executive-assistant-remote-at-zirtual-2921438979"
  },

  // ============================================================
  // CATEGORY 2: Bilingual & Translation — Houston & Remote
  // ============================================================
  {
    id: "bt-1",
    title: "Bilingual Administrative Assistant",
    company: "MK Personnel",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Growing firm near Downtown Houston seeking an ambitious Bilingual Administrative Assistant. Degree highly preferred with 1-3 years office experience. Fluent Spanish required.",
    url: "https://www.linkedin.com/jobs/view/bilingual-administrative-assistant-at-mk-personnel-2824940838"
  },
  {
    id: "bt-2",
    title: "Bilingual (Spanish) Customer Service Rep",
    company: "GEICO",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Serve as the bilingual point of contact for Spanish- and English-speaking customers at GEICO's Houston office. Handle inquiries, policy changes, and claims support.",
    url: "https://www.linkedin.com/jobs/view/bilingual-spanish-customer-service-rep-houston-tx-at-geico-4043099001"
  },
  {
    id: "bt-3",
    title: "Bilingual Customer Service Representative",
    company: "Perfection Staffing",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Bilingual English/Spanish Customer Service Representative in Houston. Coordinate appointments with families and discuss relocation processes. Strong communication skills required.",
    url: "https://www.linkedin.com/jobs/view/bilingual-english-spanish-customer-service-representative-i-at-perfection-staffing-3717936437"
  },
  {
    id: "bt-4",
    title: "Bilingual Contact Center Representative",
    company: "First Service Credit Union",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Bilingual Spanish-speaking role at 16430 Park Ten Pl, Houston. Handle member needs via telephone, fax, and email including loans and account services. $300 sign-on bonus included.",
    url: "https://www.linkedin.com/jobs/view/bilingual-spanish-speaking-contact-center-representative-%E2%80%8B-at-first-service-credit-union-3442901494"
  },
  {
    id: "bt-5",
    title: "Administrative Support Specialist (Bilingual)",
    company: "Harris County",
    location: "houston",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Provide administrative and programmatic support to the Refugee Health Services program under the Harris County Public Health department. Bilingual in Spanish, Arabic, Vietnamese, or Dari preferred.",
    url: "https://www.linkedin.com/jobs/view/specialist-administrative-support-at-harris-county-3100980415"
  },
  {
    id: "bt-rem-1",
    title: "Remote Spanish/English Interpreter",
    company: "Kelly Services",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Work from home interpreting high-volume inbound calls across healthcare, government, insurance, and hospitality. Must reside in the US or Puerto Rico. Video interpreting required.",
    url: "https://www.linkedin.com/jobs/view/remote-spanish-english-interpreters-at-kelly-3787885216"
  },
  {
    id: "bt-rem-2",
    title: "Remote Spanish Interpreter (Texas)",
    company: "Kelly Services",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Bilingual Call Center Interpreter role specifically for Texas residents. Handle telephone calls on demand from a quiet home office, translating across healthcare and government settings.",
    url: "https://www.linkedin.com/jobs/view/remote-opportunities-in-texas-for-english-spanish-interpreters-at-kelly-3383426972"
  },
  {
    id: "bt-rem-3",
    title: "Remote Japanese/English Interpreter & Translator",
    company: "OSI Engineering",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Remote Japanese/English interpretation and translation for a global automotive company. Morning shift. Professional-level fluency in both Japanese and English required.",
    url: "https://www.linkedin.com/jobs/view/remote-japanese-english-interpreter-and-translator-for-global-automotive-company-in-raymond-oh-morning-shift-at-osi-engineering-4259926183"
  },
  {
    id: "bt-rem-4",
    title: "Japanese Translator & Interpreter (Hybrid)",
    company: "Lions Clubs International",
    location: "remote",
    category: "bilingual-translation",
    source: "LinkedIn",
    description: "Translate correspondence and publications from English to Japanese and vice versa. Handle voice-over, subtitling, and simultaneous interpretation at board meetings and international conventions.",
    url: "https://www.linkedin.com/jobs/view/japanese-translator-interpreter-ft-hybrid-at-lions-clubs-international-3770193285"
  },

  // ============================================================
  // CATEGORY 3: Teaching & Education — Houston & Remote
  // ============================================================
  {
    id: "te-1",
    title: "Adult Education Instructor — ESL",
    company: "BakerRipley",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Provide quality ESL instruction to adult learners, integrating meaningful classroom activities. Teach ESL and digital literacy in online or community center settings. Bachelor's in Education required.",
    url: "https://www.linkedin.com/jobs/view/adult-education-instructor-esl-at-bakerripley-2886329157"
  },
  {
    id: "te-2",
    title: "ESL Lecturer",
    company: "Rice University",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Full-time, benefits-eligible lecturer position teaching and designing curricula for multilingual students. 12-month appointment with renewable contracts and conference travel funding.",
    url: "https://www.linkedin.com/jobs/view/esl-lecturer-at-rice-university-3397117787"
  },
  {
    id: "te-3",
    title: "Bilingual Self-Contained Teacher",
    company: "Alief ISD",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "3rd grade bilingual teaching position at Boone Elementary in Alief ISD. Requires valid Texas teaching certificate with required endorsements and ESL certification.",
    url: "https://www.linkedin.com/jobs/view/re-post-3rd-grade-bilingual-self-contained-teacher-@-boone-elementary-at-alief-independent-school-district-3367196030"
  },
  {
    id: "te-4",
    title: "Special Projects Coordinator",
    company: "YES Prep Public Schools",
    location: "houston",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Maximize efficiency of the Chief Program Officer and Program Leadership Team through high-level administrative and operational support. $47,900-$56,000/year.",
    url: "https://www.linkedin.com/jobs/view/special-projects-coordinator-immediate-opening-at-yes-prep-public-schools-2871238467"
  },
  {
    id: "te-rem-1",
    title: "Online ESL Teacher (Remote)",
    company: "EF Teach Online",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Teach English online with EF Education First, one of the world's largest education companies. Flexible remote schedule with pay based on skills and experience.",
    url: "https://www.linkedin.com/jobs/view/online-esl-teacher-at-ef-teach-online-3825740507"
  },
  {
    id: "te-rem-2",
    title: "Remote ESL Teacher",
    company: "TeachCast",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Teach ESL to students in Indonesia as part of their mandatory English program. One of the only ESL companies that pays by hourly blocks, not by number of classes. Late evening/early morning hours.",
    url: "https://www.linkedin.com/jobs/view/remote-esl-teacher-late-evening-early-morning-at-teachcast-3680929939"
  },
  {
    id: "te-rem-3",
    title: "Online ESL Teacher (Remote)",
    company: "TESOL International Association",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Remote ESL teaching position listed through TESOL International Association, the global authority on teaching English to speakers of other languages.",
    url: "https://www.linkedin.com/jobs/view/online-esl-teacher-remote-at-tesol-international-association-4020112252"
  },
  {
    id: "te-rem-4",
    title: "Online ESL Teacher (Remote)",
    company: "Get It Recruit — Educational Services",
    location: "remote",
    category: "teaching-education",
    source: "LinkedIn",
    description: "Teach ESL and pronunciation remotely via Skype. Part-time contract up to 30 hrs/week. Requires Bachelor's in Linguistics/English or TEFL/TESOL certificate. Starting at $15/hr, up to $25/hr.",
    url: "https://www.linkedin.com/jobs/view/online-esl-teacher-remote-wfh-at-get-it-recruit-educational-services-3452569677"
  },

  // ============================================================
  // CATEGORY 4: Hospitality & Service — Houston
  // ============================================================
  {
    id: "hs-1",
    title: "Restaurant Manager & Kitchen Manager",
    company: "Pappas Bros. Steakhouse",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Lead restaurant and kitchen operations at Pappas Bros. Steakhouse, one of Houston's premier fine dining destinations. Manage staff, service quality, and guest experiences.",
    url: "https://www.linkedin.com/jobs/view/restaurant-manager-and-kitchen-manager-pappas-bros-steakhouse-at-pappas-restaurants-inc-4239712351"
  },
  {
    id: "hs-2",
    title: "Restaurant Manager / Maitre D'",
    company: "Lombardi Family Concepts",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Lead front-of-house operations as Restaurant Manager and Maitre D' at a Lombardi Family Concepts restaurant in Houston. Deliver exceptional dining experiences and manage service staff.",
    url: "https://www.linkedin.com/jobs/view/restaurant-manager-maitre-d-at-lombardi-family-concepts-inc-4317715305"
  },
  {
    id: "hs-3",
    title: "Culinary Manager",
    company: "Hillstone Restaurant Group",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Manage culinary operations at Hillstone Restaurant Group's Houston location. Oversee kitchen staff, menu execution, food quality, and operational efficiency.",
    url: "https://www.linkedin.com/jobs/view/culinary-manager-at-hillstone-restaurant-group-4286646402"
  },
  {
    id: "hs-4",
    title: "Community Events Coordinator",
    company: "ADA Business Solutions",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Plan and coordinate community events in the Houston area. Manage event logistics, vendor relationships, and ensure successful execution of programs and activities.",
    url: "https://www.linkedin.com/jobs/view/community-events-coordinator-at-ada-business-solutions-4144140787"
  },
  {
    id: "hs-5",
    title: "Front Desk Agent",
    company: "The Post Oak Hotel at Uptown Houston",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Provide exceptional guest services at The Post Oak Hotel, Houston's premier luxury hotel in the Uptown/Galleria area. Handle check-ins, reservations, and concierge requests.",
    url: "https://www.linkedin.com/jobs/view/front-desk-agent-at-the-post-oak-hotel-at-uptown-houston-4297967582"
  },
  {
    id: "hs-6",
    title: "Marketing & Events Coordinator",
    company: "Affinity Management Group",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Coordinate marketing initiatives and events in the Greater Houston area. Manage event planning, promotional materials, and community engagement activities.",
    url: "https://www.linkedin.com/jobs/view/marketing-events-coordinator-at-affinity-management-group-4280881862"
  },
  {
    id: "hs-7",
    title: "Director of Food and Beverage",
    company: "Lensa",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Lead food and beverage operations at a Houston hospitality property. Develop strategy, manage teams, control costs, and ensure exceptional dining service standards.",
    url: "https://www.linkedin.com/jobs/view/director-of-food-and-beverage-at-lensa-4286627987"
  },
  {
    id: "hs-8",
    title: "Restaurant Manager",
    company: "Landry's",
    location: "houston",
    category: "hospitality",
    source: "LinkedIn",
    description: "Manage restaurant operations at Landry's, Houston's iconic hospitality and entertainment company. Oversee staff, service quality, and daily operations.",
    url: "https://www.linkedin.com/jobs/view/restaurant-manager-at-landry-s-4262184155"
  },

  // ============================================================
  // CATEGORY 5: Marketing & Communications — Houston & Remote
  // ============================================================
  {
    id: "mc-1",
    title: "Marketing Coordinator",
    company: "Softbase Systems",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Coordinate marketing activities and campaigns for Softbase Systems in Houston. Support content creation, campaign execution, and marketing analytics.",
    url: "https://www.linkedin.com/jobs/view/marketing-coordinator-at-softbase-systems-4370735664"
  },
  {
    id: "mc-2",
    title: "Marketing & Events Coordinator",
    company: "Affinity Management Group",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Support marketing strategy, coordination, and execution of business area initiatives and events in the Greater Houston region. Manage social media and promotional materials.",
    url: "https://www.linkedin.com/jobs/view/marketing-events-coordinator-at-affinity-management-group-4280881862"
  },
  {
    id: "mc-3",
    title: "Graphic Designer",
    company: "Harris County Engineering Department",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Design visuals for print and electronic media including publications, brochures, signs, banners, emails, video, and web pages. Requires 5+ years experience and expert Adobe proficiency.",
    url: "https://www.linkedin.com/jobs/view/graphic-designer-at-harris-county-engineering-department-3414162111"
  },
  {
    id: "mc-4",
    title: "Director of Marketing and Communications",
    company: "Interfaith Ministries for Greater Houston",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Manage communications to stakeholders including donors, media, community leaders, and public officials. Lead marketing strategy for one of Houston's largest social service nonprofits.",
    url: "https://www.linkedin.com/jobs/view/director-of-marketing-and-communications-at-interfaith-ministries-for-greater-houston-3804445377"
  },
  {
    id: "mc-5",
    title: "Marketing Specialist",
    company: "SLB (Schlumberger)",
    location: "houston",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Lead execution of marketing campaigns and partner with product teams at SLB, a global technology company headquartered in Houston. Support brand initiatives and market positioning.",
    url: "https://www.linkedin.com/jobs/view/marketing-specialist-at-slb-3435919779"
  },
  {
    id: "mc-rem-1",
    title: "Social Media Marketing Manager (US Remote)",
    company: "Luxury Presence",
    location: "remote",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Lead social media strategy for the fastest-growing digital platform for real estate agents and brokerages. Requires world-class content creation skills and seasoned social media expertise.",
    url: "https://www.linkedin.com/jobs/view/social-media-marketing-manager-us-remote-at-luxury-presence-3912304620"
  },
  {
    id: "mc-rem-2",
    title: "Social Media Manager — B2B Tech (Remote)",
    company: "Stage 4 Solutions",
    location: "remote",
    category: "marketing-comms",
    source: "LinkedIn",
    description: "Execute and measure social media programs driving awareness and engagement for a high-growth B2B tech company. 6-month contract (potential FTE), 40 hrs/week. W2 with health benefits.",
    url: "https://www.linkedin.com/jobs/view/social-media-manager-%E2%80%93-b2b-tech-remote-at-stage-4-solutions-3214982729"
  },

  // ============================================================
  // CATEGORY 6: Writing & Publishing — Houston & Remote
  // ============================================================
  {
    id: "wr-1",
    title: "Graphic Designer (In-Office)",
    company: "Design Observer",
    location: "houston",
    category: "writing",
    source: "LinkedIn",
    description: "In-office graphic design and visual content creation role at Design Observer in Houston. Produce creative assets for print and digital media.",
    url: "https://www.linkedin.com/jobs/view/graphic-designer-in-office-at-design-observer-4145161023"
  },
  {
    id: "wr-2",
    title: "Copywriter (Remote)",
    company: "Legrand, North America",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Support marketing communications including product launches, web content, and editorial writing for the Wiremold Team. Requires 3-5 years of copywriting or content development experience.",
    url: "https://www.linkedin.com/jobs/view/copywriter-remote-at-legrand-north-america-2818093888"
  },
  {
    id: "wr-rem-1",
    title: "Corporate Content Writer (Remote)",
    company: "First American Title",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Edit, create, and manage corporate-driven content for websites and marketing materials. Requires 3+ years of online copywriting experience including SEO/SEM writing technique.",
    url: "https://www.linkedin.com/jobs/view/corporate-content-writer-remote-at-first-american-title-2982835593"
  },
  {
    id: "wr-rem-2",
    title: "Content Writer (Remote) — $100K/year",
    company: "Crossover",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Turn AI-generated drafts into compelling marketing narratives. $50/hr ($100K/year). Requires 3+ years creating written content for B2C or D2C audiences. Blend cutting-edge AI with human creativity.",
    url: "https://www.linkedin.com/jobs/view/content-writer-remote-$100-000-year-usd-at-crossover-3901743195"
  },
  {
    id: "wr-rem-3",
    title: "Associate Content Writer (Remote)",
    company: "Breaktime Media",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Craft copy and develop rich, engaging content for advertising campaigns, editorial content, and email marketing. Work closely with Lead Content Producer on client campaigns and creative ideation.",
    url: "https://www.linkedin.com/jobs/view/associate-content-writer-remote-at-breaktime-media-3126243766"
  },
  {
    id: "wr-rem-4",
    title: "Marketing Copywriter & Editor (Remote)",
    company: "Dropbox",
    location: "remote",
    category: "writing",
    source: "LinkedIn",
    description: "Shape and strengthen the Dropbox voice within high-impact marketing initiatives. 6+ years experience in copywriting, editorial content, or journalism. $128K-$196K plus RSUs.",
    url: "https://www.linkedin.com/jobs/view/marketing-copywriter-editor-remote-at-dropbox-4365892107"
  }
];
