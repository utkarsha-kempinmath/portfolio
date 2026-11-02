export const projects = [
  {
    slug: "monthend",
    title: "MonthEnd",
    subtitle: "Behavioral Budgeting & Expense Tracker",
    flagship: true,
    outcome: "Behavioral budgeting app. 65 test users, 70% retention over 30 days, 200+ on the waitlist.",
    meta: {
      role: "Founder & Full-Stack Mobile Developer",
      timeline: "4 months (IIT Delhi Emergence)",
      stack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Google OAuth 2.0",
        "Docker",
        "Render",
        "EAS",
      ],
      status: "Beta / 65 Test Users",
    },
    links: {
      github: "https://github.com/utkarsha-kempinmath",
    },
    accentColor: "#C98A4B",
    overview:
      "A behavioral finance platform engineered to bridge the gap between intention and real-world spending discipline. Built end to end from initial market research to deployment.",
    sections: [
      {
        heading: "The Problem",
        paragraphs: [
          "Most budgeting utilities require painstaking line-item logging and retrospective guilt trips. Users typically abandon manual trackers within 7 days because logging friction is high and the feedback arrives too late to influence active spending.",
          "Young professionals and students need frictionless logging, psychological nudges at the point of purchase, and zero cluttered spreadsheets.",
        ],
      },
      {
        heading: "What I Built",
        paragraphs: [
          "As a founder and full-stack engineer, I architected the cross-platform React Native client and the underlying modular Node.js/Express micro-services. Features include zero-friction expense logging, adaptive budget envelopes, and behavioral analytics pipelines.",
          "I implemented secure Google OAuth 2.0 authentication, real-time sync with MongoDB, and an offline-first cache so transactions can be recorded without active internet access.",
        ],
      },
      {
        heading: "Key Decisions & Architecture",
        paragraphs: [
          "Opted for Expo Application Services (EAS) to enable rapid Over-The-Air (OTA) runtime updates for instant bug fixes without forcing users through lengthy app store reviews.",
          "Containerized backend micro-services with Docker on Render across three isolated environments (Development, Preview, Production) to ensure zero-downtime database migrations.",
        ],
      },
      {
        heading: "Result & Proof",
        paragraphs: [
          "Secured 65 test users who demonstrated a 70% retention rate over 30 days, alongside 200+ organic waitlist signups.",
          "Accepted into the competitive IIT Delhi Emergence Pre-Incubation Program and awarded Finalist recognition at Startup Clinic IIT Delhi.",
        ],
      },
    ],
    gallery: [
      {
        title: "Intelligent Budget Dashboard",
        description: "Real-time remaining envelope tracking with direct spend velocity.",
        src: "/assets/monthend-1.jpg",
      },
      {
        title: "Ask Before You Spend AI",
        description: "Contextual behavioral purchase advisory with goal impact simulation.",
        src: "/assets/monthend-2.jpg",
      },
      {
        title: "Expected Spending Allocation",
        description: "Visual category distribution and dynamic allowance controls.",
        src: "/assets/monthend-3.jpg",
      },
    ],
  },
  {
    slug: "aarogya-seva",
    title: "Aarogya Seva",
    subtitle: "Decentralized Rural Healthcare Telemedicine",
    flagship: false,
    outcome: "Rural healthcare platform for 4 user roles on 8 microservices. Built in 2 months for the MIT India Hackathon.",
    meta: {
      role: "Mobile App Lead, CI/CD & Auth Integration",
      timeline: "2 months (Team of 4)",
      stack: [
        "React Native (Expo)",
        "Spring Boot",
        "PostgreSQL",
        "Google OAuth",
        "EAS",
        "REST APIs",
      ],
      status: "Top 5 Nationally (MIT India)",
    },
    links: {
      github: "https://github.com/utkarsha-kempinmath",
    },
    accentColor: "#C98A4B",
    overview:
      "A multi-stakeholder healthcare platform engineered for rural India, unifying patients, doctors, field ASHA workers, and hospital administrators on an interconnected system.",
    sections: [
      {
        heading: "The Problem",
        paragraphs: [
          "Primary healthcare in rural districts is severely disconnected. ASHA workers collect critical diagnostic data on paper, patients lack visibility into doctor availability, and epidemics spread before regional hospitals detect the spike.",
          "The solution demanded a single mobile client adaptable to low-spec Android devices and four wildly different user workflows.",
        ],
      },
      {
        heading: "What I Built",
        paragraphs: [
          "I owned the complete React Native mobile application, connecting to 8 Spring Boot microservices over performant REST endpoints. I designed dynamic role-switching interfaces for Patients, Doctors, ASHA Community Health Workers, and Hospital Admins.",
          "Integrated native Google Sign-in with role-based JWT verification and configured automated EAS build workflows targeting low-bandwidth Android devices.",
        ],
      },
      {
        heading: "Key Decisions & Architecture",
        paragraphs: [
          "Implemented geolocation-based nearest hospital routing with offline map tiles, an emergency one-tap SOS broadcast system, and an intelligent symptom-based appointment scheduler.",
          "Integrated ML-driven outbreak classification that visualizes regional health risks into intuitive Red, Yellow, and Green containment zones for field workers.",
        ],
      },
      {
        heading: "Result & Proof",
        paragraphs: [
          "Delivered a working production Android release within a strict 2-month development sprint. Tested under simulated rural low-bandwidth network conditions.",
          "Selected as Top 5 nationally out of 120 participating teams across India at the MIT India Hackathon.",
        ],
      },
    ],
    gallery: [
      {
        title: "Epidemiological Risk Zones & AI Triage",
        description: "Live map classifying contagion clusters into Red, Yellow, and Green containment perimeters.",
        src: "/assets/aarogya-1.jpg",
      },
      {
        title: "Emergency SOS Broadcast",
        description: "One-tap emergency broadcast dispatching PostGIS facility alerts, family notifications, and local responders.",
        src: "/assets/aarogya-2.jpg",
      },
      {
        title: "Field Teleconsultation & Triage",
        description: "Direct video triage connecting rural patients with available government doctors and specialists.",
        src: "/assets/aarogya-3.jpg",
      },
    ],
  },
  {
    slug: "mindbuddy",
    title: "MindBuddy",
    subtitle: "Passive Behavioral Sensing for Mental Wellness",
    flagship: false,
    outcome: "Passive behavioral sensing for mental wellness, backed by an IEEE paper.",
    meta: {
      role: "System Architect, Mobile & Native Modules",
      timeline: "Research & Development",
      stack: [
        "React Native (Expo)",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Kotlin (Native Android)",
      ],
      status: "Published IEEE Co-Author",
    },
    links: {
      paper: "https://ieeexplore.ieee.org",
      github: "https://github.com/utkarsha-kempinmath",
    },
    accentColor: "#C98A4B",
    overview:
      "A privacy-first mental health companion combining passive environmental telemetry, on-device usage analytics, and AI-assisted conversational therapy.",
    sections: [
      {
        heading: "The Problem",
        paragraphs: [
          "Conventional mental wellness apps rely on active self-reporting (mood journals, surveys). However, individuals experiencing severe depressive or anxious episodes consistently stop manual logging precisely when intervention is most critical.",
          "The challenge: capture objective behavioral indicators without draining mobile battery or compromising sensitive personal privacy.",
        ],
      },
      {
        heading: "What I Built",
        paragraphs: [
          "Designed the end-to-end system architecture and coded the React Native mobile application. Built modules for guided AI therapy, interactive grounding exercises, and passive telemetry processing.",
          "Developed custom native Android Java/Kotlin background bridges to gather ambient light, screen unlock frequency, and typing cadence without capturing content or keystrokes.",
        ],
      },
      {
        heading: "Key Decisions & Architecture",
        paragraphs: [
          "Enforced strict on-device data anonymization prior to cloud synchronization, using local hashing so no personal identifiable information (PII) ever reaches the MongoDB cluster.",
          "Engineered battery-optimized sensor polling intervals that limited background energy drain to under 1.8% over a continuous 24-hour cycle.",
        ],
      },
      {
        heading: "Result & Proof",
        paragraphs: [
          "Co-authored the peer-reviewed research paper: 'Non-Intrusive, Privacy-Preserving Mental Health Monitoring using Passive Environmental Sensing', accepted and indexed in IEEE.",
          "Demonstrated that passive physical & digital ambient signals yield a 78% correlation with depressive and anxiety trend swings without asking users to complete subjective forms.",
        ],
      },
    ],
    gallery: [
      {
        title: "Daily Behavioral Sensing & Telemetry",
        description: "Passive telemetry tracking screen time, ambient sensors, and ML-predicted stress index.",
        src: "/assets/mindbuddy-1.jpg",
      },
      {
        title: "Well-Being Score & Action Pathways",
        description: "Real-time wellness score paired with supportive insights and sanctuary actions.",
        src: "/assets/mindbuddy-2.jpg",
      },
    ],
  },
];
