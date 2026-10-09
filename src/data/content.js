// Official Shankoe CYDC Content & Asset Database
// Built around authentic assets and official organisational information

export const BRAND = {
  name: "Shankoe CYDC",
  fullName: "Shankoe Methodist Child & Youth Development Centre",
  church: "Methodist Church in Kenya",
  projectCode: "KE 717",
  location: "Narok County, Kenya",
  tagline: "Empowering Children & Young People to Thrive",
  journey: ["Embrace", "Engage", "Empower", "Thrive"],
  logo: "/assets/logo/shankoe-cydc-logo.jpg",
  logoTransparent: "/assets/logo/shankoe-cydc-logo-transparent.png",
  contact: {
    email: "ke717methodistshankoecdc@gmail.com",
    locationText: "Shankoe Methodist Church Compound, Narok County, Kenya",
    hours: "Monday – Friday: 8:00 AM – 5:00 PM EAT",
  }
};

export const VISION = "A world where every child and young person is safe, valued, and equipped to reach their full potential.";

export const MISSION = "To embrace, engage, and empower vulnerable children and young people through education, health, and skills development, enabling them to thrive.";

export const CORE_VALUES = [
  {
    id: "inclusion",
    title: "Inclusion",
    summary: "No child or youth is left behind.",
    description: "We welcome every child regardless of background, providing an equitable environment of warmth, dignity, and belonging where all have the chance to grow.",
    icon: "HeartHandshake"
  },
  {
    id: "integrity",
    title: "Integrity",
    summary: "Transparency and accountability in all actions.",
    description: "Every resource, partnership, and programme is managed with honesty, clear stewardship, and deep responsibility toward the children and community we serve.",
    icon: "ShieldCheck"
  },
  {
    id: "empowerment",
    title: "Empowerment",
    summary: "Building confidence, resilience, and capability.",
    description: "We do not foster dependency; we equip young people with practical skills, self-belief, and tools to shape their own dignified livelihoods and futures.",
    icon: "Sparkles"
  },
  {
    id: "resilience",
    title: "Resilience",
    summary: "Overcoming adversity through adaptability and innovation.",
    description: "Guiding children and community families to navigate economic and environmental pressures with courage, resourcefulness, and mutual support.",
    icon: "Anchor"
  },
  {
    id: "social-justice",
    title: "Social Justice",
    summary: "Promoting equality, dignity, and fairness.",
    description: "Standing for child rights, protection from harm, and equal access to education, health, and life opportunities for all girls and boys in Narok County.",
    icon: "Scale"
  },
  {
    id: "partnership",
    title: "Partnership",
    summary: "Leveraging collaboration for greater community impact.",
    description: "Working hand-in-hand with church leaders, local schools, families, and global supporters to build enduring foundations for tomorrow.",
    icon: "Users"
  }
];

export const PILLARS_JOURNEY = [
  {
    stage: "EMBRACE",
    tag: "Safe • Valued • Supported",
    headline: "Every child deserves to feel they belong.",
    subtext: "We provide a nurturing haven where children are welcomed with unconditional warmth, safe spaces, and protective care from day one.",
    color: "var(--color-blue-500)",
    bgAccent: "rgba(37, 99, 235, 0.08)"
  },
  {
    stage: "ENGAGE",
    tag: "Learn • Participate • Grow",
    headline: "We create opportunities to learn and discover potential.",
    subtext: "Through active education, balanced daily nutrition, joyful play, and mentoring, children discover their God-given gifts and talents.",
    color: "var(--color-navy-700)",
    bgAccent: "rgba(19, 51, 92, 0.08)"
  },
  {
    stage: "EMPOWER",
    tag: "Skills • Confidence • Opportunity",
    headline: "We help young people build capabilities for stronger futures.",
    subtext: "From vocational baking and culinary training to life-skills mentorship, young people gain practical capabilities to lead self-reliant lives.",
    color: "var(--color-amber-600)",
    bgAccent: "rgba(217, 119, 6, 0.08)"
  }
];

export const HOME_STATEMENT = "Reimagining the future of children and young people through education, health, skills development and strong communities is central to achieving lasting and sustainable change.";

export const PROGRAMS = [
  {
    id: "education",
    title: "Education",
    tagline: "A Right & Tool for Transformation",
    summary: "Every learner has the right to access inclusive quality education, participate fully, and learn.",
    paragraphs: [
      "Education is a right and a tool for transformation. Every learner has the right to access inclusive quality education, participate fully, and learn. Vulnerable children and young people – including those with disabilities in rural communities in Kenya face masked barriers that exclude them from participating in education. Shankoe Child and Youth Centre employs community-driven solutions to identify and tackle the root causes of exclusion that are both internal and external to the child.",
      "Our whole school approach ensures strengthening accessibility, supporting meaningful participation, and fostering safe, welcoming learning environments where every learner can thrive. Involving parents, caregivers and communities in shaping education services creates a powerful partnership that directly improves the learners’ education outcomes, behaviour and overall well-being."
    ],
    whatWeDo: "We employ community-driven solutions to tackle root causes of exclusion, strengthening accessibility and fostering safe, welcoming learning environments where every learner can thrive.",
    whyItMatters: "Involving parents, caregivers and communities in shaping education services creates a powerful partnership that directly improves the learners’ education outcomes, behaviour and overall well-being.",
    icon: "GraduationCap",
    photo: "/assets/photos/shankoe-nutrition-fruit.jpg",
    alt: "Students engaged at Shankoe CYDC study desks with healthy citrus fruit",
    highlights: [
      "Inclusive quality education accessible to every learner, including children with disabilities",
      "Community-driven solutions identifying & tackling internal and external causes of exclusion",
      "Whole-school approach strengthening accessibility & safe learning environments",
      "Empowered parent, caregiver, and community partnerships for learner well-being"
    ]
  },
  {
    id: "health",
    title: "Health",
    tagline: "Healthy, Safe & Supported",
    summary: "Every child and young person deserve the opportunity to grow up healthy, safe, and supported.",
    paragraphs: [
      "Every child and young person deserve the opportunity to grow up healthy, safe, and supported. Vulnerable children and young people in rural communities’ face barriers to healthcare and wellbeing - poverty, disability, violence, stigma, and limited access to services.",
      "We provide health screening, nutritional support, connect children, young people, and their families with appropriate health services and compassionate psychosocial support. Good health is a key contributor to a child participation in education."
    ],
    whatWeDo: "We provide health screening, nutritional support, connect children, young people, and their families with appropriate health services and compassionate psychosocial support.",
    whyItMatters: "Good health is a key contributor to a child participation in education and fundamental to growing up safe and supported.",
    icon: "HeartPulse",
    photo: "/assets/photos/shankoe-children-meal-fellowship.jpg",
    alt: "Children at Shankoe CYDC sharing a wholesome hot meal together on the lawn",
    highlights: [
      "Routine health screenings and nutritional support",
      "Direct connection to appropriate healthcare services for children and families",
      "Compassionate psychosocial support addressing poverty, disability, violence, and stigma",
      "Promoting health as a critical foundation for educational participation"
    ]
  },
  {
    id: "skills",
    title: "Skills Development",
    tagline: "Bridging the Divide Between Education & Employment",
    summary: "Addressing the skills gap where young people are unaware of skills required for future employment opportunities.",
    paragraphs: [
      "Bridging the divide between education and employment – addressing the skills gap where young people are unaware of skills required for future employment opportunities.",
      "Bridging the gap between education and employment has become a critical challenge in today’s rapidly changing job market. To enhance young people’s employability, we combine skills training with practical experience and connections to real jobs (internship and apprentice), provide mentorship, encourage entrepreneurship, develop soft skills, job readiness, and encourage lifelong learning. The transition from education to employment doesn’t have to be difficult."
    ],
    whatWeDo: "We combine skills training with practical experience and connections to real jobs (internship and apprentice), provide mentorship, encourage entrepreneurship, develop soft skills, job readiness, and encourage lifelong learning.",
    whyItMatters: "The transition from education to employment doesn’t have to be difficult when youth are empowered with practical craftsmanship and self-reliance.",
    icon: "ChefHat",
    photo: "/assets/photos/shankoe-fresh-muffins-presentation.jpg",
    alt: "Young people proudly presenting freshly baked muffins at Shankoe CYDC",
    highlights: [
      "Vocational training with practical experience (baking, food craft, hygiene standards)",
      "Connections to real employment through internships and apprenticeships",
      "Mentorship, entrepreneurship cultivation, and job readiness coaching",
      "Soft skills development and a commitment to lifelong learning"
    ]
  },
  {
    id: "community",
    title: "Community Strengthening",
    tagline: "Supporting Structures for Child Protection",
    summary: "Strong Communities provide supporting structures for child protection and safer learning environments.",
    paragraphs: [
      "Strong Communities provide supporting structures for child protection. We work with communities to build child-friendly reporting systems, improve data collection on school-based violence, and engage parents and local leaders in sustaining safer learning environments."
    ],
    whatWeDo: "We work with communities to build child-friendly reporting systems, improve data collection on school-based violence, and engage parents and local leaders in sustaining safer learning environments.",
    whyItMatters: "Strong communities provide supporting structures for child protection, ensuring children learn and thrive free from violence and harm.",
    icon: "ShieldCheck",
    photo: "/assets/photos/shankoe-playground-slide.jpg",
    alt: "Children playing joyfully in safety on Shankoe playground slide",
    highlights: [
      "Child-friendly reporting systems for proactive child protection",
      "Improved data collection on school-based violence",
      "Active engagement of parents, guardians, and local community leaders",
      "Sustaining safe, respectful, and welcoming learning environments"
    ]
  },
  {
    id: "climate",
    title: "Climate Change Resilience",
    tagline: "Child-Centred Adaptation & Socioeconomic Empowerment",
    summary: "Climate change is a child rights crisis that disproportionately threatens the survival, development, and well-being of children and young people.",
    statCallout: {
      stat: "Nearly 1 Billion Children",
      source: "UNICEF data",
      text: "Almost half of the world's child population—live in countries classified as extremely high-risk. While children are the least responsible for global emissions, they bear the heaviest physical and psychological burdens."
    },
    paragraphs: [
      "Climate change is a child rights crisis that disproportionately threatens the survival, development, and well-being of children and young people. According to UNICEF data, nearly 1 billion children—almost half of the world's child population—live in countries classified as extremely high-risk. While children are the least responsible for global emissions, they bear the heaviest physical and psychological burdens. Building climate resilience among vulnerable children and youth requires an urgent shift from post-disaster response toward child-centred adaptation, socioeconomic empowerment, and systemic policy inclusion."
    ],
    structuredInitiatives: [
      {
        number: "1",
        title: "Engaging young people as Agents of Change through:",
        points: [
          {
            label: "Green Skills",
            text: "We engage children and young people in planting trees, creating kitchen gardens both in schools and communities."
          },
          {
            label: "Policy Representation",
            text: "Young people possess unique grassroot insights, we also engage them actively in local and national climate decision-making processes contributing to sustainable climate smart solutions."
          }
        ]
      },
      {
        number: "2",
        title: "Family and Socioeconomic Empowerment",
        text: "A child's resilience is technically tied to household stability. We combine climate education with household economic strengthening initiatives. We also support Social Protection Safety Nets to shield vulnerable families from poverty-driven displacement, keeping children nourished and in school."
      }
    ],
    whatWeDo: "We champion child-centred adaptation by equipping youth with green skills, advancing youth policy representation in climate decisions, and strengthening household economic stability.",
    whyItMatters: "Building climate resilience shifts the paradigm from post-disaster response toward child-centred adaptation, keeping families shielded and children nourished in school.",
    icon: "Trees",
    photo: "/assets/photos/shankoe-community-church-group.jpg",
    alt: "Community youth and leadership fellowship outside Shankoe Methodist Church",
    highlights: [
      "Shift from post-disaster response to child-centred climate adaptation",
      "Green skills: tree planting & kitchen gardens in schools and communities",
      "Policy representation: youth grassroots insights in local and national decisions",
      "Family & socioeconomic empowerment with Social Protection Safety Nets"
    ]
  }
];

export const THEORY_OF_CHANGE = {
  officialStatement: "If Shankoe CYDC invests in strengthening community child protection and climate resilience systems, expanding education access, empowering young people, and promoting mental wellbeing, then children and young people in Narok County will grow in safer, inclusive environments with better life outcomes, because communities will be more accountable, supportive, and capable of sustaining change.",
  steps: [
    {
      step: "1. WE INVEST IN",
      items: ["Inclusive Quality Education", "Health & Psychosocial Care", "Skills Development & Employment", "Community Strengthening", "Climate Change Resilience"],
      theme: "Foundations of Support",
      color: "#0c2340"
    },
    {
      step: "2. CHILDREN EXPERIENCE",
      items: ["Safety & Belonging", "Joyful Learning", "Personal Confidence", "Care & Nourishment", "New Opportunities"],
      theme: "Human Transformation",
      color: "#1e5cb3"
    },
    {
      step: "3. THE RESULT",
      items: ["Children equipped to reach potential", "Self-reliant young adults with skills", "More resilient, caring community in Narok"],
      theme: "Sustainable Thriving",
      color: "#d97706"
    }
  ]
};

export const PHOTOS_GALLERY = [
  {
    id: "slide",
    filename: "shankoe-playground-slide.jpg",
    src: "/assets/photos/shankoe-playground-slide.jpg",
    title: "Pure Joy of Play",
    caption: "Children in Shankoe uniforms having fun together on the playground slide.",
    category: "Recreation & Play",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "baking-indoor",
    filename: "shankoe-indoor-baking-skills.jpg",
    src: "/assets/photos/shankoe-indoor-baking-skills.jpg",
    title: "Vocational Baking Session",
    caption: "Students learning precision mixing and pastry preparation with electric mixers.",
    category: "Skills & Livelihoods",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "muffins",
    filename: "shankoe-fresh-muffins-presentation.jpg",
    src: "/assets/photos/shankoe-fresh-muffins-presentation.jpg",
    title: "Pride of Achievement",
    caption: "Smiles and satisfaction as students present their freshly baked golden cupcakes.",
    category: "Skills & Livelihoods",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "baking-outdoor-1",
    filename: "shankoe-outdoor-baking-measuring.jpg",
    src: "/assets/photos/shankoe-outdoor-baking-measuring.jpg",
    title: "Measuring & Recipe Fundamentals",
    caption: "Careful measurement of baking ingredients on the outdoor workstation.",
    category: "Skills & Livelihoods",
    orientation: "Portrait",
    width: 768,
    height: 1024
  },
  {
    id: "nutrition-fruit",
    filename: "shankoe-nutrition-fruit.jpg",
    src: "/assets/photos/shankoe-nutrition-fruit.jpg",
    title: "Wholesome Nutrition",
    caption: "Students seated with fresh citrus fruit, reinforcing everyday health and vitality.",
    category: "Wellbeing & Nutrition",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "meal-fellowship",
    filename: "shankoe-children-meal-fellowship.jpg",
    src: "/assets/photos/shankoe-children-meal-fellowship.jpg",
    title: "Shared Meal Fellowship",
    caption: "Warm plates of balanced food enjoyed in friendship on the green lawn.",
    category: "Wellbeing & Nutrition",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "baking-outdoor-2",
    filename: "shankoe-outdoor-baking-mixing.jpg",
    src: "/assets/photos/shankoe-outdoor-baking-mixing.jpg",
    title: "Teamwork in the Kitchen",
    caption: "Collaborative batter preparation fostering teamwork, patience, and attention to detail.",
    category: "Skills & Livelihoods",
    orientation: "Portrait",
    width: 768,
    height: 1024
  },
  {
    id: "meal-lawn",
    filename: "shankoe-group-meal-lawn.jpg",
    src: "/assets/photos/shankoe-group-meal-lawn.jpg",
    title: "Belonging & Care",
    caption: "A joyful circle of youth sharing lunch, united in the Shankoe Methodist identity.",
    category: "Wellbeing & Nutrition",
    orientation: "Landscape",
    width: 1024,
    height: 768
  },
  {
    id: "community-group",
    filename: "shankoe-community-church-group.jpg",
    src: "/assets/photos/shankoe-community-church-group.jpg",
    title: "Leadership & Community Partnership",
    caption: "Youth and community leaders gathered outside Shankoe Methodist Church.",
    category: "Community & Church",
    orientation: "Landscape",
    width: 1024,
    height: 768
  }
];

export const STORIES = [
  {
    id: "practical-baking",
    title: "From Ingredients to Independence: Practical Skills in Action",
    category: "Skills Training",
    photo: "/assets/photos/shankoe-fresh-muffins-presentation.jpg",
    summary: "At Shankoe CYDC, vocational training isn't abstract theory. In our practical baking modules, young people measure, mix, bake, and discover that they have the power to create value with their own hands.",
    detail: "Working alongside mentors, students learn hygiene standards, ingredient ratios, temperature regulation, and presentation. Beyond the aroma of freshly baked muffins lies something deeper: the undeniable spark of self-worth and vocational confidence.",
    readTime: "2 min read"
  },
  {
    id: "joy-of-safe-play",
    title: "The Simple Dignity of Laughter on the Slide",
    category: "Wellbeing & Belonging",
    photo: "/assets/photos/shankoe-playground-slide.jpg",
    summary: "Childhood should be filled with moments of unburdened joy. The playground at Shankoe provides a safe, welcoming ground where children run freely, slide together, and build lifelong friendships.",
    detail: "For children facing economic hardships at home, having an enclosed, protected space where they can simply be children is transformative for their mental wellbeing, emotional resilience, and sense of safety.",
    readTime: "2 min read"
  },
  {
    id: "daily-nourishment",
    title: "Nourishing Body and Spirit: Shared Meals on the Grass",
    category: "Nutrition & Care",
    photo: "/assets/photos/shankoe-children-meal-fellowship.jpg",
    summary: "When lunch is served at Shankoe CYDC, it is more than food—it is community. Children gather in circles on the lawn, sharing wholesome meals and mutual encouragement.",
    detail: "Proper nutrition fuels sharp minds in the classroom and strong bodies on the field. Sitting together with teachers and peers, every child knows they are cared for and valued as family.",
    readTime: "2 min read"
  },
  {
    id: "church-and-community",
    title: "Anchored in Faith and Community Leadership",
    category: "Community Fellowship",
    photo: "/assets/photos/shankoe-community-church-group.jpg",
    summary: "Shankoe CYDC works closely with Shankoe Methodist Church and local elders to ensure every young person is guided by integrity, moral grounding, and supportive mentorship.",
    detail: "By bridging pastoral care with practical youth development, the centre builds a generational continuum of trust. Local young adults return to coach younger children, ensuring a cycle of community uplift.",
    readTime: "2 min read"
  }
];

export const NEWS_EVENTS = [
  {
    id: "skills-workshop",
    title: "Youth Practical Baking & Culinary Exhibition",
    date: "Upcoming Workshop",
    category: "Skills & Livelihoods",
    summary: "Students will showcase baked goods prepared entirely during the term's practical culinary modules.",
    photo: "/assets/photos/shankoe-indoor-baking-skills.jpg"
  },
  {
    id: "nutrition-outreach",
    title: "Community Child Health & Nutrition Day",
    date: "Centre Activity",
    category: "Health & Wellbeing",
    summary: "Health checks, vitamin supplementation, and nutritional guidance for participating Shankoe families.",
    photo: "/assets/photos/shankoe-nutrition-fruit.jpg"
  },
  {
    id: "youth-fellowship",
    title: "Annual Youth Leadership & Mentorship Gathering",
    date: "Community Fellowship",
    category: "Community",
    summary: "Bringing together Shankoe alumni, church elders, and youth leaders to discuss vocational pathways.",
    photo: "/assets/photos/shankoe-community-church-group.jpg"
  }
];

export const PARTNERSHIP_AREAS = [
  {
    title: "Sponsor Vocational & Practical Skills",
    description: "Support our baking ingredients, kitchen equipment, and practical learning supplies that equip youth for self-reliant livelihoods.",
    icon: "UtensilsCrossed",
    impact: "Provides baking materials, aprons, utensils, and certified trainer support."
  },
  {
    title: "Nutritional & Wellbeing Support",
    description: "Help fund daily balanced hot meals, clean water access, and essential fruit distribution during centre program days.",
    icon: "Apple",
    impact: "Guarantees sustained daily nutrition for growing children in Narok County."
  },
  {
    title: "Educational Resources & Scholarships",
    description: "Provide textbooks, school uniforms, exercise books, and remedial tutoring support for primary and secondary students.",
    icon: "BookOpen",
    impact: "Keeps vulnerable girls and boys actively learning and progressing in school."
  },
  {
    title: "Safe Infrastructure & Play Amenities",
    description: "Strengthen playground equipment, classroom workstations, sanitary facilities, and community safe spaces.",
    icon: "Building",
    impact: "Maintains a safe, joyful environment where children can play and study without hazards."
  }
];
