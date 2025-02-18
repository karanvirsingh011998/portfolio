import { FaReact, FaNodeJs, FaServer, FaDatabase } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import {
  Library,
  Layout,
  Database,
  Workflow,
  Bug,
  Cloud,
  PenTool,
  Code,
} from "lucide-react";

export const skills = [
  { icon: FaReact, title: "React.js", desc: "Frontend Library" },
  { icon: SiNextdotjs, title: "Next.js", desc: "Frontend Framework" },
  { icon: IoLogoCss3, title: "Tailwind CSS", desc: "CSS Framework" },
  { icon: FaNodeJs, title: "Node.js", desc: "Runtime Environment" },
  { icon: FaServer, title: "Express.js", desc: "Backend Framework" },
  { icon: FaDatabase, title: "MongoDB", desc: "NoSQL Database" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Frontend Libraries & Frameworks",
    icon: Library,
    skills: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 60 },
      { name: "Material-UI (MUI)", level: 85 },
      { name: "Ant Design", level: 85 },
      { name: "Shadcn/UI", level: 65 },
      { name: "DaisyUI", level: 50 },
      { name: "Tailwind CSS", level: 60 },
      { name: "next-intl", level: 70 },
      { name: "Recharts / Chart.js", level: 60 },
      { name: "Leaflet Maps", level: 85 },
      { name: "React Particles", level: 55 },
      { name: "Framer Motion", level: 55 },
    ],
  },
  {
    title: "State Management & Data Fetching",
    icon: Workflow,
    skills: [
      { name: "Redux", level: 65 },
      { name: "React Context API", level: 75 },
      { name: "React Query (TanStack Query)", level: 80 },
      { name: "Fetch", level: 85 },
      { name: "Axios", level: 70 },
    ],
  },
  {
    title: "Form Management & Validation",
    icon: Layout,
    skills: [
      { name: "React Hook Form", level: 80 },
      { name: "Formik", level: 70 },
      { name: "Zod", level: 60 },
      { name: "Yup", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 60 },
      { name: "MongoDB", level: 70 },
      { name: "Mongoose", "level": 60 },
      { name: "RESTful APIs", level: 60 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Database,
    skills: [
      { name: "npm/yarn", level: 95 },
      { name: "Github", level: 75 },
      { name: "GitLab", level: 75 },
      { name: "Webpack", level: 80 },
      { name: "React Helmet", level: 70 },
      { name: "ESLint", level: 60 } 
    ],
  },
  {
    title: "Testing & Debugging",
    icon: Bug,
    skills: [
      { name: "Jest", level: 75 },
      { name: "React Testing Library", level: 70 },
      { name: "Browser DevTools", level: 90 },
    ],
  },
  {
    title: "Deployment & DevOps",
    icon: Cloud,
    skills: [
      { name: "Vercel", level: 60 },
      { name: "GitHub Pages", level: 70 },
    ],
  },
  {
    title: "UI/UX Design Tools",
    icon: PenTool,
    skills: [
      { name: "Figma", level: 60 },
      { name: "Canva", level: 80 },
    ],
  },
];