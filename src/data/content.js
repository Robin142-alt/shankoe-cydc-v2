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

export const PROGRAMS = [
  {
    id: "education",
    title: "Education & Learning",
    summary: "Supporting literacy, school retention, and cognitive development.",
    whatWeDo: "We provide scholastic support, tutoring, remedial learning, and a supportive study environment for children to succeed in school.",
    whyItMatters: "Education opens pathways out of poverty and helps young minds develop critical thinking, self-confidence, and long-term ambition.",
    icon: "GraduationCap",
    photo: "/assets/photos/shankoe-nutrition-fruit.jpg",
    alt: "Students engaged at Shankoe CYDC study desks with healthy citrus fruit"
  },
  {
    id: "skills",
    title: "Skills & Livelihoods",
    summary: "Hands-on vocational training and practical life skills for youth.",
    whatWeDo: "We train young people in practical vocations such as baking, food preparation, measuring, hygiene, and entrepreneurship.",
    whyItMatters: "Tangible vocational skills give youth economic independence, self-reliance, and immediate pride in their craftsmanship.",
    icon: "ChefHat",
    photo: "/assets/photos/shankoe-fresh-muffins-presentation.jpg",
    alt: "Young people proudly presenting freshly baked muffins at Shankoe CYDC"
  },
  {
    id: "wellbeing",
    title: "Wellbeing & Nutrition",
    summary: "Nutritious balanced meals, physical health, and psychosocial care.",
    whatWeDo: "We provide hot balanced meals during centre days, health screenings, hygiene education, and emotional support in a peaceful setting.",
    whyItMatters: "A well-nourished, physically safe child can focus, learn, play, and thrive without the distraction of hunger or illness.",
    icon: "Utensils",
    photo: "/assets/photos/shankoe-children-meal-fellowship.jpg",
    alt: "Children at Shankoe CYDC sharing a wholesome hot meal together on the lawn"
  },
  {
    id: "protection",
    title: "Child Protection & Rights",
    summary: "Ensuring safety, child advocacy, and zero tolerance for harm.",
    whatWeDo: "We uphold strict safeguarding standards, educate communities on child rights, and provide safe physical environments.",
    whyItMatters: "Every child has a fundamental right to grow up free from violence, exploitation, discrimination, and neglect.",
    icon: "Shield",
    photo: "/assets/photos/shankoe-playground-slide.jpg",
    alt: "Children playing joyfully in safety on Shankoe playground slide"
  },
  {
    id: "community",
    title: "Community & Climate Resilience",
    summary: "Strengthening families, environmental awareness, and local stewardship.",
    whatWeDo: "We collaborate closely with local church leadership, parents, and community elders on sustainable water, nutrition, and youth initiatives.",
    whyItMatters: "Strong families and climate-aware communities ensure that children’s progress is sustained through every season.",
    icon: "Trees",
    photo: "/assets/photos/shankoe-community-church-group.jpg",
    alt: "Community youth and leadership fellowship outside Shankoe Methodist Church"
  }
];

export const THEORY_OF_CHANGE = {
  officialStatement: "If Shankoe CYDC invests in strengthening community child protection and climate resilience systems, expanding education access, empowering young people, and promoting mental wellbeing, then children and young people in Narok County will grow in safer, inclusive environments with better life outcomes, because communities will be more accountable, supportive, and capable of sustaining change.",
  steps: [
    {
      step: "1. WE INVEST IN",
      items: ["Education & Learning", "Child Protection", "Practical Skills", "Health & Wellbeing", "Community Partnerships"],
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
