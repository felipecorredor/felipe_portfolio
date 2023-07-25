import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  nextJs,
  mongodb,
  git,
  graphql,
  rubyOnRails,
  postgresql,
  ultimMarketing,
  evolve,
  universityManizales,
  elenas,
  solutionSystems,
  devWay,
  devpenguin,
  carrent,
  jobit,
  tripguide,
  stivenCastillo,
  nicolasMoreno,
  simonTorres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "rubyOnRails",
    icon: rubyOnRails,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Evolve",
    icon: evolve,
    iconBg: "#222222",
    date: "Jul. 2022 - Currently",
    points: [
      "Front-end developer tasked with creating new features to help contractors, mechanical, electrical and plumbing equipment automate construction design workflows.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "University of Manizales",
    icon: universityManizales,
    iconBg: "#FFFFFF",
    date: "Jan. 2023 - Currently",
    points: [
      "As a teacher, I have had the opportunity to teach both online and in person, creating projects of great educational value. My approach has been to foster an enriching learning environment, stimulating the development of skills and abilities in my students.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Elenas",
    icon: elenas,
    iconBg: "#FFFFFF",
    date: "Ago. 2021 - Jul 2022",
    points: [
      "Front-end developer at React Native creating new features to revolutionize catalog sales in Colombia and Mexico.",
      "Front-end developer at React Js maintaining and creating new modules for wholesalers within the elenas app.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ULTIM Marketing",
    icon: ultimMarketing,
    iconBg: "#FFFFFF",
    date: "Jan. 2021 - Mar. 2022",
    points: [
      "Front-end developer specialized in React Js, with experience in creating new functionalities for notarial software in Mexico.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Solution System S.A.S",
    icon: solutionSystems,
    iconBg: "#FFFFFF",
    date: "Jun. 2019 - Jun. 2021",
    points: [
      "Full Stack developer creating solutions for companies with programming languages such as Ruby on Rails, React Js and native Android applications.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Devway",
    icon: devWay,
    iconBg: "#E0E5E9",
    date: "Jun. 2019 - Jun. 2020",
    points: [
      "Freelance developer creating web applications with Ruby on Rails.",
      "Freelance developer on mobile apps.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Devpenguin S.A.S",
    icon: devpenguin,
    iconBg: "#FFFFFF",
    date: "Feb. 2017 - Jun. 2019",
    points: [
      "Junior developer in web applications with MVC architecture.",
      "Junior developer in mobile applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Felipe is an exceptional colleague with whom I had the pleasure of working in two different companies. His outstanding performance as a Front End Developer showcases his ability to tackle complex problems and implement best practices in development.",
    name: "Simon Torres",
    designation: "Frontend Developer",
    company: "Elenas",
    image: simonTorres,
  },
  {
    testimonial:
      "Felipe is an extraordinary work mate! We worked together and he was always showing top-level developing skills and knowledge, including React JS, HTML, CSS, GraphQL, Typescript, among other technologies.",
    name: "Nicolas Moreno",
    designation: "Frontend Developer",
    company: "Evolve",
    image: nicolasMoreno,
  },
  {
    testimonial:
      "I have had the great pleasure of working with Felipe a talented frontend developer who has made a significant impact on our team. His expertise has contributed to the successful delivery of several complex projects, and his code is always clean and efficient.",
    name: "Stiven Castillo",
    designation: "Frontend Developer",
    company: "Evolve",
    image: stivenCastillo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const SECTIONS = {
  ABOUT: "about",
  TECH: "tech",
  EXPERIENCE: "experience",
  WORK: "work",
  FEEDBACKS: "feedbacks",
  CONTACT: "contact",
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  SECTIONS,
};
