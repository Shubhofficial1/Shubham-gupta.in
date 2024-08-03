import reactLogo from "../assets/logos/react.svg";
import nextJsLogo from "../assets/logos/nextjs.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import mongoDbLogo from "../assets/logos/mongodb.svg";
import prismaLogo from "../assets/logos/prisma.svg";
import postgresLogo from "../assets/logos/postgres.svg";
import redisLogo from "../assets/logos/redis.svg";
import githubLogo from "../assets/logos/github.svg";
import awsLogo from "../assets/logos/aws.svg";
import graphqlLogo from "../assets/logos/graphql.svg";

const projects = [
  {
    name: "SketchSync",
    slug: "sketch-sync",
    description:
      "SketchSync is a real-time collaborative whiteboard enabling seamless drawing and brainstorming sessions. Leveraging Socket.io, React, Node, Express and Tailwind, I crafted an interactive tool for effective team collaboration.",
    type: "Personal",
    stack: ["React", "Socket.io", "tailwind", "NodeJS"],
    githubUrl: "https://github.com/Shubhofficial1",
    liveWebsite: "/",
    thumbnail: "/src/assets/images/1.jpg",
    sections: [
      {
        title: "Web Stack and Explanation 🔥",
        steps: [
          "React: Chosen for its ability to seamlessly connect with GraphQL and the Shopify-SDK for JavaScript, providing a smooth integration and dynamic user experience.",
          "Tailwind CSS: Used for its utility-first CSS framework, enabling rapid UI development with custom styles.",
          "Redux: Implemented for state management, ensuring a predictable and consistent state across the application.",
          "Redis: Utilized for caching and fast data retrieval, enhancing application performance.",
          "TypeScript: Adopted for its static typing, which improves code quality and maintainability.",
        ],
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        steps: [
          "Integration with GraphQL: Ensured that React components could efficiently communicate with the GraphQL API for data fetching and mutation.",
          "State Management: Implemented Redux to manage the application state, making it easier to handle complex state logic.",
          "Performance Optimization: Utilized Redis for caching to speed up data retrieval and improve the overall performance of the application.",
          "User Interface Design: Leveraged Tailwind CSS for a responsive and aesthetically pleasing UI, enhancing the user experience.",
        ],
      },
      {
        title: "Lessons Learned 💡",
        steps: [
          "GraphQL Integration: Gained a deeper understanding of integrating GraphQL with React, improving data fetching strategies.",
          "State Management: Enhanced skills in using Redux for managing application state, leading to more efficient and maintainable code.",
          "Performance Optimization: Learned the importance of caching and the benefits it brings to application performance using Redis.",
          "UI Development: Improved proficiency in using Tailwind CSS for rapid and responsive UI development.",
          "TypeScript: Strengthened knowledge of TypeScript, leading to better code quality and reduced bugs.",
        ],
      },
    ],
  },
  {
    name: "PeerTalk",
    slug: "peer-talk",
    description:
      "PeerTal is a WebRTC-based application for seamless video communication between two users. Built with WebRTC, React, Node, Tailwind, and Express, it offers a smooth and responsive video chat experience.",
    type: "Personal",
    stack: ["React", "WebRTC", "Tailwind", "NodeJS"],
    githubUrl: "https://github.com/Shubhofficial1",
    liveWebsite: "/",
    thumbnail: "/src/assets/images/2.jpg",
    sections: [
      {
        title: "Web Stack and Explanation 🔥",
        steps: [
          "React: Chosen for its ability to seamlessly connect with GraphQL and the Shopify-SDK for JavaScript, providing a smooth integration and dynamic user experience.",
          "Tailwind CSS: Used for its utility-first CSS framework, enabling rapid UI development with custom styles.",
          "Redux: Implemented for state management, ensuring a predictable and consistent state across the application.",
          "Redis: Utilized for caching and fast data retrieval, enhancing application performance.",
          "TypeScript: Adopted for its static typing, which improves code quality and maintainability.",
        ],
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        steps: [
          "Integration with GraphQL: Ensured that React components could efficiently communicate with the GraphQL API for data fetching and mutation.",
          "State Management: Implemented Redux to manage the application state, making it easier to handle complex state logic.",
          "Performance Optimization: Utilized Redis for caching to speed up data retrieval and improve the overall performance of the application.",
          "User Interface Design: Leveraged Tailwind CSS for a responsive and aesthetically pleasing UI, enhancing the user experience.",
        ],
      },
      {
        title: "Lessons Learned 💡",
        steps: [
          "GraphQL Integration: Gained a deeper understanding of integrating GraphQL with React, improving data fetching strategies.",
          "State Management: Enhanced skills in using Redux for managing application state, leading to more efficient and maintainable code.",
          "Performance Optimization: Learned the importance of caching and the benefits it brings to application performance using Redis.",
          "UI Development: Improved proficiency in using Tailwind CSS for rapid and responsive UI development.",
          "TypeScript: Strengthened knowledge of TypeScript, leading to better code quality and reduced bugs.",
        ],
      },
    ],
  },
  {
    name: "Proshop",
    slug: "proshop",
    description:
      "I built ProShop, a robust online e-commerce platform using the MERN stack and React-Bootstrap. It provides a seamless shopping experience with a modern, responsive design and efficient user interactions.",
    type: "Personal",
    stack: ["React", "Socket.io", "tailwind", "NodeJS"],
    githubUrl: "https://github.com/Shubhofficial1",
    liveWebsite: "/",
    thumbnail: "/src/assets/images/3.jpg",
    sections: [
      {
        title: "Web Stack and Explanation 🔥",
        steps: [
          "React: Chosen for its ability to seamlessly connect with GraphQL and the Shopify-SDK for JavaScript, providing a smooth integration and dynamic user experience.",
          "Tailwind CSS: Used for its utility-first CSS framework, enabling rapid UI development with custom styles.",
          "Redux: Implemented for state management, ensuring a predictable and consistent state across the application.",
          "Redis: Utilized for caching and fast data retrieval, enhancing application performance.",
          "TypeScript: Adopted for its static typing, which improves code quality and maintainability.",
        ],
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        steps: [
          "Integration with GraphQL: Ensured that React components could efficiently communicate with the GraphQL API for data fetching and mutation.",
          "State Management: Implemented Redux to manage the application state, making it easier to handle complex state logic.",
          "Performance Optimization: Utilized Redis for caching to speed up data retrieval and improve the overall performance of the application.",
          "User Interface Design: Leveraged Tailwind CSS for a responsive and aesthetically pleasing UI, enhancing the user experience.",
        ],
      },
      {
        title: "Lessons Learned 💡",
        steps: [
          "GraphQL Integration: Gained a deeper understanding of integrating GraphQL with React, improving data fetching strategies.",
          "State Management: Enhanced skills in using Redux for managing application state, leading to more efficient and maintainable code.",
          "Performance Optimization: Learned the importance of caching and the benefits it brings to application performance using Redis.",
          "UI Development: Improved proficiency in using Tailwind CSS for rapid and responsive UI development.",
          "TypeScript: Strengthened knowledge of TypeScript, leading to better code quality and reduced bugs.",
        ],
      },
    ],
  },
  {
    name: "Edemy",
    slug: "edemy",
    description:
      "I developed Edemy, a comprehensive online learning management system utilizing React, Tailwind, Redux, Redis, and TypeScript. It offers a dynamic and user-friendly interface for an enhanced educational experience.",
    type: "Personal",
    stack: ["React", "Socket.io", "tailwind", "NodeJS"],
    githubUrl: "https://github.com/Shubhofficial1",
    liveWebsite: "/",
    thumbnail: "/src/assets/images/4.jpg",
    sections: [
      {
        title: "Web Stack and Explanation 🔥",
        steps: [
          "React: Chosen for its ability to seamlessly connect with GraphQL and the Shopify-SDK for JavaScript, providing a smooth integration and dynamic user experience.",
          "Tailwind CSS: Used for its utility-first CSS framework, enabling rapid UI development with custom styles.",
          "Redux: Implemented for state management, ensuring a predictable and consistent state across the application.",
          "Redis: Utilized for caching and fast data retrieval, enhancing application performance.",
          "TypeScript: Adopted for its static typing, which improves code quality and maintainability.",
        ],
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        steps: [
          "Integration with GraphQL: Ensured that React components could efficiently communicate with the GraphQL API for data fetching and mutation.",
          "State Management: Implemented Redux to manage the application state, making it easier to handle complex state logic.",
          "Performance Optimization: Utilized Redis for caching to speed up data retrieval and improve the overall performance of the application.",
          "User Interface Design: Leveraged Tailwind CSS for a responsive and aesthetically pleasing UI, enhancing the user experience.",
        ],
      },
      {
        title: "Lessons Learned 💡",
        steps: [
          "GraphQL Integration: Gained a deeper understanding of integrating GraphQL with React, improving data fetching strategies.",
          "State Management: Enhanced skills in using Redux for managing application state, leading to more efficient and maintainable code.",
          "Performance Optimization: Learned the importance of caching and the benefits it brings to application performance using Redis.",
          "UI Development: Improved proficiency in using Tailwind CSS for rapid and responsive UI development.",
          "TypeScript: Strengthened knowledge of TypeScript, leading to better code quality and reduced bugs.",
        ],
      },
    ],
  },
];

const experiences = [
  {
    _id: 1,
    joiningDate: "January 2023",
    completionDate: "Present",
    duration: "1Y,7M",
    position: "Systems Engineer",
    company: "Tata Consultancy Services",
    companyShortName: "TCS",
  },
  {
    _id: 2,
    joiningDate: "October 2020",
    completionDate: "December 2022",
    duration: "2Y,1M",
    position: "Sr Analyst / Software Engineer",
    company: "Capgemini Technology Services India Limited",
    companyShortName: "Capgemini",
  },
];

const skills = [
  { src: reactLogo, alt: "React" },
  { src: nextJsLogo, alt: "NextJS" },
  { src: javascriptLogo, alt: "Javascript" },
  { src: mongoDbLogo, alt: "MongoDB" },
  { src: prismaLogo, alt: "Prisma" },
  { src: postgresLogo, alt: "Postgres" },
  { src: redisLogo, alt: "Redis" },
  { src: githubLogo, alt: "Github" },
  { src: awsLogo, alt: "Aws" },
  { src: graphqlLogo, alt: "Graphql" },
];

const projectsPaths = [
  { label: "Home", link: "/" },
  { label: "Project Details", link: "/" },
];

export { projects, experiences, skills, projectsPaths };
