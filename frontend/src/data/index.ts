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
        summary:
          "React Made The Most Sense For The Web Application Because It Required To Connect To GraphQL And The Shopify-SDK For Javascript Ties Into React Very Smoothly. The Shopify-Buy-SDK Was Chosen Because Of The Ability For The Client To Modify The Products Without Any Complex Coding Knowledge. React Hooks And Session Storage Are Also Used Throughout The Project To Maintain The User Cart Items And Allows The Cart Count And Other Shopping Data To Be Displayed Universally Without The Need For Redux. Netlify Is Also An Obvious Choice For Deployment Because Of Its Speed And Reliability.",
        thumbnailUrl: "/src/assets/images/1.jpg",
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        summary:
          "Like Most Projects, I Ran Into A Few Bumps Along The Way, One Particularly Difficult Area Was Organization And Structure Of The Code. Because Of This Project Size, I Realized How Important Maintaining An Organized Structure Would Be. I Worked Hard To Keep Components As Reusable As Possible And Utilized Props For Many Slight Variations. I Also Used Styled-Components, Because The Structure Of CSS-In-Js Is Much Clearer And Prevents Overrides.",
        thumbnailUrl: "/src/assets/images/1.jpg",
      },
      {
        title: "Lessons Learned 💡",
        summary:
          "I Could Spend All Day Describing The Lessons That I Learned While Working On This Project, But The Most Important Ones Involved My Newfound Understanding Of React Hooks, Git Management, Feature Keys, And API Integration. As My First Large Project Using React, I Learned A Lot Of Lessons Regarding Code Structure And Organization. When I First Began, I Would Write Sloppy Code And Move On, But Now I Know How Doing So Can Come Back To Bite You; I Now Spend A Lot More Time Refactoring And Improving Every Line I Code I Write, For The Best Readability And Far Fewer Headaches.",
        thumbnailUrl: "/src/assets/images/1.jpg",
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
        summary:
          "React Made The Most Sense For The Web Application Because It Required To Connect To GraphQL And The Shopify-SDK For Javascript Ties Into React Very Smoothly. The Shopify-Buy-SDK Was Chosen Because Of The Ability For The Client To Modify The Products Without Any Complex Coding Knowledge.  React Hooks And Session Storage Are Also Used Throughout The Project To Maintain The User Cart Items And Allows The Cart Count And Other Shopping Data To Be Displayed Universally Without The Need For Redux. Netlify Is Also An Obvious Choice For Deployment Because Of Its Speed And Reliability.",
        thumbnailUrl: "/src/assets/images/2.jpg",
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        summary:
          "Like Most Projects, I Ran Into A Few Bumps Along The Way, One Particularly Difficult Area Was Organization And Structure Of The Code. Because Of This Project Size, I Realized How Important Maintaining An Organized Structure Would Be. I Worked Hard To Keep Components As Reusable As Possible And Utilized Props For Many Slight Variations. I Also Used Styled-Components, Because The Structure Of CSS-In-Js Is Much Clearer And Prevents Overrides.",
        thumbnailUrl: "/src/assets/images/2.jpg",
      },
      {
        title: "Lessons Learned 💡",
        summary:
          "I Could Spend All Day Describing The Lessons That I Learned While Working On This Project, But The Most Important Ones Involved My Newfound Understanding Of React Hooks, Git Management, Feature Keys, And API Integration. As My First Large Project Using React, I Learned A Lot Of Lessons Regarding Code Structure And Organization. When I First Began, I Would Write Sloppy Code And Move On, But Now I Know How Doing So Can Come Back To Bite You; I Now Spend A Lot More Time Refactoring And Improving Every Line I Code I Write, For The Best Readability And Far Fewer Headaches.",
        thumbnailUrl: "/src/assets/images/2.jpg",
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
        summary:
          "React Made The Most Sense For The Web Application Because It Required To Connect To GraphQL And The Shopify-SDK For Javascript Ties Into React Very Smoothly. The Shopify-Buy-SDK Was Chosen Because Of The Ability For The Client To Modify The Products Without Any Complex Coding Knowledge.  React Hooks And Session Storage Are Also Used Throughout The Project To Maintain The User Cart Items And Allows The Cart Count And Other Shopping Data To Be Displayed Universally Without The Need For Redux. Netlify Is Also An Obvious Choice For Deployment Because Of Its Speed And Reliability.",
        thumbnailUrl: "/src/assets/images/3.jpg",
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        summary:
          "Like Most Projects, I Ran Into A Few Bumps Along The Way, One Particularly Difficult Area Was Organization And Structure Of The Code. Because Of This Project Size, I Realized How Important Maintaining An Organized Structure Would Be. I Worked Hard To Keep Components As Reusable As Possible And Utilized Props For Many Slight Variations. I Also Used Styled-Components, Because The Structure Of CSS-In-Js Is Much Clearer And Prevents Overrides.",
        thumbnailUrl: "/src/assets/images/3.jpg",
      },
      {
        title: "Lessons Learned 💡",
        summary:
          "I Could Spend All Day Describing The Lessons That I Learned While Working On This Project, But The Most Important Ones Involved My Newfound Understanding Of React Hooks, Git Management, Feature Keys, And API Integration. As My First Large Project Using React, I Learned A Lot Of Lessons Regarding Code Structure And Organization. When I First Began, I Would Write Sloppy Code And Move On, But Now I Know How Doing So Can Come Back To Bite You; I Now Spend A Lot More Time Refactoring And Improving Every Line I Code I Write, For The Best Readability And Far Fewer Headaches.",
        thumbnailUrl: "/src/assets/images/3.jpg",
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
        summary:
          "React Made The Most Sense For The Web Application Because It Required To Connect To GraphQL And The Shopify-SDK For Javascript Ties Into React Very Smoothly. The Shopify-Buy-SDK Was Chosen Because Of The Ability For The Client To Modify The Products Without Any Complex Coding Knowledge. React Hooks And Session Storage Are Also Used Throughout The Project To Maintain The User Cart Items And Allows The Cart Count And Other Shopping Data To Be Displayed Universally Without The Need For Redux. Netlify Is Also An Obvious Choice For Deployment Because Of Its Speed And Reliability.",
        thumbnailUrl: "/src/assets/images/4.jpg",
      },
      {
        title: "Problems and Thought Process 👨‍⚖️",
        summary:
          "Like Most Projects, I Ran Into A Few Bumps Along The Way, One Particularly Difficult Area Was Organization And Structure Of The Code. Because Of This Project Size, I Realized How Important Maintaining An Organized Structure Would Be. I Worked Hard To Keep Components As Reusable As Possible And Utilized Props For Many Slight Variations. I Also Used Styled-Components, Because The Structure Of CSS-In-Js Is Much Clearer And Prevents Overrides.",
        thumbnailUrl: "/src/assets/images/4.jpg",
      },
      {
        title: "Lessons Learned 💡",
        summary:
          "I Could Spend All Day Describing The Lessons That I Learned While Working On This Project, But The Most Important Ones Involved My Newfound Understanding Of React Hooks, Git Management, Feature Keys, And API Integration. As My First Large Project Using React, I Learned A Lot Of Lessons Regarding Code Structure And Organization. When I First Began, I Would Write Sloppy Code And Move On, But Now I Know How Doing So Can Come Back To Bite You; I Now Spend A Lot More Time Refactoring And Improving Every Line I Code I Write, For The Best Readability And Far Fewer Headaches.",
        thumbnailUrl: "/src/assets/images/4.jpg",
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

export { projects, experiences, skills };
