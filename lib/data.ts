import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    school:"Daffodil International University",
  },

 
] as const;


export const experiencesData = [
 
  {
    title: "Javascript Engineer",
    company:"Root Force Marketer",
    location: "Pune India",
    description:
      "I served as a front-end developer for a period of 4 months in this role. During this time, my responsibilities included crafting engaging and interactive user interfaces using React.js, developing reusable components, and ensuring the upkeep of clean and efficient code. Additionally, I undertook the valuable endeavor of broadening my skill set to encompass full-stack development."
    ,icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
 
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    liveUrl: "https://www.google.com/",
    github_Front: "",
    github_Back:"",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] ;

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


