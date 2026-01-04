export const JOYS_INFO = {
  name: "Joy Chanda",
  title: "Full Stack Developer",
  email: "chandajoy1420@gmail.com",
  socials: {
    github: "https://github.com/JoyChanda",
    linkedin: "https://www.linkedin.com/in/joy-chanda/",
    whatsapp: "https://wa.me/8801794245500",
  },
  contactDetails: {
    phone: "+880-1794245500",
    location: "Chattogram, Bangladesh",
    availability: "Open to freelance / full-time opportunities",
  },
  resume: "/resume.pdf",
  skills: {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React JS", level: 80 },
      { name: "Next JS", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
    backend: [
      { name: "Node JS", level: 70 },
      { name: "Express JS", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 80 },
      { name: "Vercel", level: 85 },
    ],
    languages: [
      { name: "C Program", level: 75 },
      { name: "Python", level: 60 },
    ],
  },
  about: {
    journey: "My programming journey started back in university while pursuing my B.Sc in CSE. I was fascinated by how code could solve real-world problems. Starting with C and Python basics, I eventually found my passion in Web Development, specifically the MERN stack. I've spent countless hours building projects, debugging, and learning new frameworks to polish my skills.",
    workPreference: "I enjoy building scalable web applications and focus on creating clean, efficient, and user-centric interfaces. I love working with React for the frontend and Node/Express for the backend, keeping performance and best practices in mind.",
    hobbies: "Outside of programming, I enjoy playing cricket, exploring new technologies, and sometimes sketching or painting to keep my creative side active.",
  },
  projects: [
    {
      title: "Care.io",
      description: "A comprehensive healthcare platform designed to streamline medical services and patient care management.",
      tech: ["React JS", "Tailwind CSS", "Firebase", "MongoDB"],
      github: "https://github.com/JoyChanda/Care.io",
      live: "https://care-io-eta.vercel.app/",
      image: "/projects/care-io.png",
      challenges: "Implementing a seamless real-time appointment system and managing complex state for patient records while ensuring data security with Firebase authentication.",
      improvements: "Planned to add an AI-driven symptom checker and integrate a more robust video consultation feature for tele-medicine.",
    },
    {
      title: "InsightBoard",
      description: "A data-driven analytics dashboard providing real-time insights and monitoring for business metrics.",
      tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/JoyChanda/InsightBoard-Client-",
      live: "https://insight-board-client.vercel.app/",
      image: "/projects/insightboard.png",
      challenges: "Aggregating large datasets from MongoDB and visualizing them efficiently using charts without affecting the page load speed.",
      improvements: "Will implement more customizable widgets and exportable PDF reports for business users.",
    },
    {
      title: "PawMart",
      description: "An e-commerce marketplace dedicated to pet supplies, featuring a seamless shopping experience.",
      tech: ["React JS", "Express JS", "MongoDB", "TanStack Query", "Firebase"],
      github: "https://github.com/JoyChanda/B12-A10_PawMart",
      live: "https://b12-a10-paw-mart.vercel.app/",
      image: "/projects/pawmart.png",
      challenges: "Handling complex cart logic and ensuring synchronized inventory updates across different user sessions.",
      improvements: "Adding a recommendation system based on user behavior and integrating a multi-currency payment gateway.",
    },
    {
      title: "Hero Apps",
      description: "A curated collection of utility applications designed to enhance productivity and user experience.",
      tech: ["React JS", "CSS", "LocalStorage"],
      github: "https://github.com/JoyChanda/B12-A08-Hero-Apps",
      live: "https://hero-apps-008.netlify.app/",
      image: "/projects/hero-apps.png",
      challenges: "Managing state with LocalStorage for various sub-apps while keeping the UI lightweight and fast.",
      improvements: "Migrating to a cloud-based storage system and adding more tools like a collaborative task manager.",
    },
  ],
  education: [
    {
      degree: "Bachelors of Science (B.Sc)",
      institution: "Chittagong Independent University (CIU)",
      details: "CGPA: 3.07 out of 4 | Major: CSE",
      year: "2023",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Karnafuli Govt. College, Kaptai",
      details: "GPA: 3.58 out of 5 | Group: Science",
      year: "2018",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nasirabad Govt. Boys School, Chattogram",
      details: "GPA: 4.78 out of 5 | Group: Science",
      year: "2016",
    },
  ],
};




export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
