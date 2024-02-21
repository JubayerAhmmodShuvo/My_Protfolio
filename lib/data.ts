import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/budget.png";
import rmtdevImg from "@/public/tools.png";
import wordanalyticsImg from "@/public/todo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor of Science in Computer Science & Engineering",
    description:
      "In the year 2022, I proudly graduated from Daffodil International University, marking a significant milestone in my academic journey. The experience and knowledge gained during my time at the university have greatly enriched my understanding of my field and equipped me with valuable skills that I'm eager to apply in my professional career. This accomplishment represents not only years of hard work and dedication but also the beginning of an exciting new chapter in my life, filled with opportunities for growth and continued learning.",
    icon: React.createElement(LuGraduationCap),

    location: "Dhaka, Bangladesh",
    date: "2018 - 2022",
    result: "3.55",
    school: "Daffodil International University",
  },
  {
    title: "Higher Secondary School Certificate",
    description:
      "Completed my Higher Secondary School Certificate from Brahmanbaria Govt. College in Brahmanbaria, Bangladesh, from 2014 to 2016, achieving a remarkable result of 5.00. This experience provided a strong academic foundation for my future pursuits.",
    icon: React.createElement(LuGraduationCap),

    location: "Brahmanbaria, Bangladesh",
    date: "2014 - 2016",
    result: "5.00",
    school: "Brahmanbaria Govt. College",
  },
] as const;


export const experiencesData = [
 
  {
    title: "Javascript Engineer",
    company:"Root Force Marketer",
    location: "Pune India",
    description:
      "I served as a front-end developer for a period of 1.6 years in this role. During this time, my responsibilities included crafting engaging and interactive user interfaces using React.js, developing reusable components, and ensuring the upkeep of clean and efficient code. Additionally, I undertook the valuable endeavor of broadening my skill set to encompass full-stack development."
    ,icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
 
] as const;

export const projectsData = [
  {
    title: "Budget Car",
    description:
      "Budget Car Service - Full-stack web app streamlines car servicing with role-based user management, JWT security, order creation, payments, and admin controls.",
    tags: ["Next.js", "MongoDB", "Ant Design", "TypeScript", "Express.js"],
    imageUrl: corpcommentImg,
    liveUrl: "https://budget-service.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/Car_Service_Front-End",
    github_Back: "https://github.com/JubayerAhmmodShuvo/car-service-backend",
  },
  {
    title: "Shoe House",
    description:
      "Users register securely with hashed passwords in MongoDB for robust data protection, accessing the platform via JWT authentication. Integration with Stripe ensures a trusted and smooth payment experience, prioritizing user data security.",
    tags: [
      "Next.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "TypeScript",
      "Stripe",
      "Redux",
      "React-Hooks Form",
    ],
    imageUrl: rmtdevImg,
    liveUrl: "https://shoehouse-frontend.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/ShowHouse_Frontend",
    github_Back: "https://github.com/JubayerAhmmodShuvo/ShowHouse_Backend",
  },
  {
    title: "Task Manager",
    description:
      "Users register securely, log in to manage tasks effortlessly with categories (pending, ongoing, completed), and initiate tasks with a &quot;Start&quot; button for streamlined organization and easy navigation through pagination",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "JWT",
      "React Toastify",
    ],
    imageUrl: wordanalyticsImg,
    liveUrl: "https://taskmanagement-six.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/Task_Manager_FrontEnd",
    github_Back:
      "https://github.com/JubayerAhmmodShuvo/Task_Management_Backend",
  },
] as const; ;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "JWT",
  "Express",
  "PostgreSQL",
  "Daisy UI",
  "Framer Motion",
  "Firebase",
  "React Router",
  "Linux",
  "Vercel",
  "Netlify",
  "Stripe",
  

] as const;

export const allProjectsData = [
  {
    title: "Budget Car",
    description:
      "Budget Car Service - Full-stack web app streamlines car servicing with role-based user management, JWT security, order creation, payments, and admin controls.",
    tags: ["Next.js", "MongoDB", "Ant Design", "TypeScript", "Express.js"],
    imageUrl: corpcommentImg,
    liveUrl: "https://budget-service.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/Car_Service_Front-End",
    github_Back: "https://github.com/JubayerAhmmodShuvo/car-service-backend",
  },
  {
    title: "Shoe House",
    description:
      "Users register securely with hashed passwords in MongoDB for robust data protection, accessing the platform via JWT authentication. Integration with Stripe ensures a trusted and smooth payment experience, prioritizing user data security.",
    tags: [
      "Next.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "TypeScript",
      "Stripe",
      "Redux",
      "React-Hooks Form",
    ],
    imageUrl: rmtdevImg,
    liveUrl: "https://shoehouse-frontend.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/ShowHouse_Frontend",
    github_Back: "https://github.com/JubayerAhmmodShuvo/ShowHouse_Backend",
  },
  {
    title: "Task Manager",
    description:
      "Users register securely, log in to manage tasks effortlessly with categories (pending, ongoing, completed), and initiate tasks with a &quot;Start&quot; button for streamlined organization and easy navigation through pagination",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "JWT",
      "React Toastify",
    ],
    imageUrl: wordanalyticsImg,
    liveUrl: "https://taskmanagement-six.vercel.app/home",
    github_Front: "https://github.com/JubayerAhmmodShuvo/Task_Manager_FrontEnd",
    github_Back:
      "https://github.com/JubayerAhmmodShuvo/Task_Management_Backend",
  },
] as const; ;


