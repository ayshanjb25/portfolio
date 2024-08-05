import { meta, shopify, starbucks, tesla, seamlessc } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  python,
  antDesign,
  csharp,
  digitalocean,
  mantine,
  firebase,
  vercel,
} from "../assets/icons";

export const skills = {
  languages: [
    {
      imageUrl: html,
      name: "HTML",
    },
    {
      imageUrl: css,
      name: "CSS",
    },
    {
      imageUrl: javascript,
      name: "JavaScript",
    },
    {
      imageUrl: typescript,
      name: "TypeScript",
    },
    ,
    {
      imageUrl: python,
      name: "Python",
    },
    {
      imageUrl: csharp,
      name: "C#",
    },
  ],
  frameworks: [
    {
      imageUrl: nodejs,
      name: "Node.js",
    },
    {
      imageUrl: express,
      name: "Express",
    },
    {
      imageUrl: nextjs,
      name: "Next.js",
    },
    {
      //imageUrl: nextjs,
      name: ".Net Core",
    },
  ],
  libraries: [
    {
      imageUrl: react,
      name: "React",
    },
    {
      imageUrl: redux,
      name: "Redux",
    },
    {
      imageUrl: mui,
      name: "Material-UI",
    },
    {
      imageUrl: sass,
      name: "Sass",
    },
    {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
    },
    {
      //imageUrl: shadcn,
      name: "Shadcn",
    },
    {
      imageUrl: motion,
      name: "Motion",
    },
    {
      imageUrl: antDesign,
      name: "Ant Design",
    },
    {
      // imageUrl: c#,
      name: "Chakra UI",
    },
    {
      imageUrl: mantine,
      name: "Mantine UI",
    },
  ],
  databases: [
    {
      //imageUrl: ssms,
      name: "SSMS",
    },
    {
      //imageUrl: postgres,
      name: "Postgres",
    },
    {
      imageUrl: mongodb,
      name: "MongoDB",
    },
    {
      imageUrl: firebase,
      name: "Firebase",
    },
    {
      //imageUrl: appwrite,
      name: "Appwrite",
    },
    {
      //imageUrl: redis,
      name: "Redis",
    },
  ],
  versionControl: [
    {
      imageUrl: git,
      name: "Git",
    },
    {
      imageUrl: github,
      name: "GitHub",
    },
  ],
  containerization: [
    {
      // imageUrl: docker,
      name: "Docker",
    },
  ],
  deploymentPlatforms: [
    {
      imageUrl: github,
      name: "GitHub Pages",
    },
    {
      imageUrl: vercel,
      name: "Vercel",
    },
    {
      imageUrl: digitalocean,
      name: "DigitalOcean",
    },
  ],
};

export const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "SeamlessC",
    icon: seamlessc,
    iconBg: "#fbc3bc",
    date: "April 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const educations = [
  {
    title: "BEng (Hons) in Software Engineering (Top Up)",
    company_name: "London Metropolitan University (UK) ",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdSD1nXqUpbCq0Gb4qf6DLGrBuYRFrQTa4Q&s",
    date: "February 2023 - January 2024",
    points: ["First Class Honours"],
  },
  {
    title: "Pearson BTEC HND in Software Engineering ",
    company_name: "ESOFT Metro Campus - Colombo",
    icon: "https://w7.pngwing.com/pngs/4/887/png-transparent-pearson-higher-education-learning-midrand-graduate-institute-english-english-text-trademark.png",
    date: "June 2021 - January 2023",
    points: ["GPA - 3.5"],
  },
  {
    title: "Diploma in Information Technology",
    company_name: "ESOFT Metro Campus - Colombo",
    icon: "https://esoft.lk/wp-content/uploads/2024/01/ogg.png",
    date: "June 2021 - May 2022",
    points: [],
  },
  {
    title: "Certificate of Data Science and Data Analytics Training",
    company_name: "Campus One – Colombo",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHfLSWcZAaTkMAJzNOKyqk5p7xGCAcDHLiA&s",
    date: "October 2022 - November 2022",
    points: [],
  },
  {
    title: "Certificate of Data Analytics with Machine Learning",
    company_name:
      "Imperial College of Information Technology and Business – Colombo",
    icon: "https://studyway-resources.s3.amazonaws.com/profilePictures/1674531792110.jpg",
    date: "August 2022 - September 2022",
    points: [],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS", "React"],
    // name: 'Amazon Price Tracker',
    // description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    // link: 'https://github.com/adrianhajdin/pricewise',
    name: "Cosmetic POS & Customer Portal",
    description:
      "Developed a comprehensive Point of Sale system and Customer Portal for a cosmetic store using React, Material UI, and MERN stack, offering real-time inventory management, invoice processing, and enhanced user experience.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    // name: 'Full Stack Threads Clone',
    // description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    // link: 'https://github.com/adrianhajdin/threads',
    name: "Garment Factory Performance Management Tracker",
    description:
      "Worked on frontend UI and data integration using React, Mantine UI, Next.js, Node.js, TypeScript, GraphQL and PostgreSQL for apparel client's performance tracking.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    // name: 'Car Finding App',
    // description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    // link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    name: "e-Commerce Website",
    description:
      "Enhanced frontend UI for an e-commerce site using HTML, CSS, C# ASP.NET and PostgreSQL for a visually appealing shopping experience.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    // name: 'Real-Estate Application',
    // description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    // link: 'https://github.com/adrianhajdin/projects_realestate',
    name: "Music Ticket Booking App",
    description:
      "Contributed to UI development and data services integration using React, Mantine UI, Nest.js, Node.js, TypeScript, and GraphQL for live music event ticket booking.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    // name: 'AI Summarizer Application',
    // description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    // link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    name: "PassionFinder",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Personal"],
    techs: ["HTML", "CSS"],
    name: "Expense Tracker",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Client"],
    techs: ["HTML", "CSS"],
    name: "Personal Finance Tracker",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Personal"],
    techs: ["HTML", "CSS"],
    name: "Banking App",
    description:
      "Developed a comprehensive banking app featuring a finance management dashboard using Next.js 14, enabling users to connect multiple bank accounts, view real-time transactions, and transfer money, leveraging React, Node.js, Appwrite, Plaid, Dwolla sandbox, Chart.js, Tailwind CSS, shadcn, Sentry, Radix UI, and Lucide React icons for a seamless and efficient user experience.",
    link: "#",
    repo: "https://github.com/ayshanjb25/banking_app.git",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Personal"],
    techs: ["HTML", "CSS"],
    name: "Scientific Calculator",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "https://github.com/ayshanjb25/calculator.git",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Academic", "Client"],
    techs: ["HTML", "CSS"],
    name: "Chatbot",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Academic"],
    techs: ["HTML", "CSS"],
    name: "Hospital Management System",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Academic"],
    techs: ["HTML", "CSS"],
    name: "Railway Reservation system",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Academic"],
    techs: ["HTML", "CSS"],
    name: "Aircraft Management system",
    description:
      "Conducted backend API testing for a career and academic path recommendation system using Nest.js, Node.js, TypeScript and Altair client.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Personal"],
    techs: [
      "React",
      "Node.js",
      "Appwrite",
      "Tailwind CSS",
      "shadcn",
      "Sentry",
      "Radix UI",
      "Lucide React icons",
      "zod",
    ],
    name: "Patient Management System",
    description:
      "Developed a robust healthcare platform that streamlines patient registration, appointment scheduling, and medical records management. Implemented complex forms and SMS notifications to enhance user interaction and efficiency.",
    link: "#",
    repo: "#",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    tags: ["Personal"],
    techs: ["Next.js 14", "TypeScript", "React", "Tailwind CSS"],
    name: "Redis Chat App",
    description:
      "I developed a real-time chat application that include secure authentication with Kinde, real-time messaging via Pusher, user-selectable themes, notifications, typing animations, and image sharing through Cloudinary. The app leverages Upstash Redis for efficient chat data management and is deployed with CI/CD practices on Vercel.",
    link: "#",
    repo: "#",
  },
];

// export const skills = [
//     {
//         imageUrl: css,
//         name: "CSS",
//         type: "Frontend",
//     },
//     {
//         imageUrl: express,
//         name: "Express",
//         type: "Backend",
//     },
//     {
//         imageUrl: git,
//         name: "Git",
//         type: "Version Control",
//     },
//     {
//         imageUrl: github,
//         name: "GitHub",
//         type: "Version Control",
//     },
//     {
//         imageUrl: html,
//         name: "HTML",
//         type: "Frontend",
//     },
//     {
//         imageUrl: javascript,
//         name: "JavaScript",
//         type: "Frontend",
//     },
//     {
//         imageUrl: mongodb,
//         name: "MongoDB",
//         type: "Database",
//     },
//     {
//         imageUrl: motion,
//         name: "Motion",
//         type: "Animation",
//     },
//     {
//         imageUrl: mui,
//         name: "Material-UI",
//         type: "Frontend",
//     },
//     {
//         imageUrl: nextjs,
//         name: "Next.js",
//         type: "Frontend",
//     },
//     {
//         imageUrl: nodejs,
//         name: "Node.js",
//         type: "Backend",
//     },
//     {
//         imageUrl: react,
//         name: "React",
//         type: "Frontend",
//     },
//     {
//         imageUrl: redux,
//         name: "Redux",
//         type: "State Management",
//     },
//     {
//         imageUrl: sass,
//         name: "Sass",
//         type: "Frontend",
//     },
//     {
//         imageUrl: tailwindcss,
//         name: "Tailwind CSS",
//         type: "Frontend",
//     },
//     {
//         imageUrl: typescript,
//         name: "TypeScript",
//         type: "Frontend",
//     }
// ];
