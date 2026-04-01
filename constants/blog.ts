import { projectsData } from "./projects";

export const BLOG_CATEGORIES = [
  { name: "Web Dev", slug: "web-development" },
  { name: "Hardware", slug: "hardware" },
  { name: "Startup", slug: "technopreneurship" },
  { name: "CS", slug: "computer-science" },
  { name: "Experience", slug: "experience" },
];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  projectLink?: string;
}

export const blogData = [
  {
    id: 1,
    slug: "building-retro-os-portfolio",
    title: "Building a Retro OS Portfolio with Next.js and Tailwind",
    excerpt: "A deep dive into how I recreated the classic 90s operating system aesthetic using modern web technologies like Next.js, Shadcn UI, and Tailwind CSS.",
    date: "March 10, 2026",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1639395241103-9c855f93a90c?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 2,
    slug: "budget-it-student-pc-build",
    title: "The Ultimate 20k-30k PHP PC Build for IT Students",
    excerpt: "Putting together a solid custom rig for coding, running local databases, and a little bit of Roblox on the side, all under a strict student budget.",
    date: "March 5, 2026",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1660855551740-4474188debdb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 3,
    slug: "bridging-code-and-business",
    title: "Bridging Code and Business: The Technopreneurship Mindset",
    excerpt: "Why writing good code isn't enough anymore. Exploring how my capstone project, NutriMind, is teaching me to think like a founder, not just a developer.",
    date: "February 28, 2026",
    category: "Technopreneurship",
    image: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 4,
    slug: "visualizing-fcfs-algorithm",
    title: "Visualizing CPU Scheduling: Behind the FCFS Simulator",
    excerpt: "Breaking down the logic of the First-Come, First-Served scheduling algorithm and how I built a visualizer to help classmates understand context switching.",
    date: "February 15, 2026",
    category: "Computer Science",
    image: "https://images.unsplash.com/photo-1729786423717-07716ec501e9?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    id: 5,
    slug: "fcfs-scheduling-simulator-tsx",
    title: "FCFS Scheduling Simulator",
    excerpt: "A web application that visually demonstrates the First-Come, First-Served (FCFS) CPU scheduling algorithm. Features clear visualization of process execution order, real-time calculation of Waiting Time and Turnaround Time.",
    date: "2024",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1729786423717-07716ec501e9?q=80&w=1228&auto=format&fit=crop", 
    projectLink: `/projects?search=${projectsData[0].title}`,
  },
  {
    id: 6,
    slug: "7-evelyn-ecommerce-tsx",
    title: "7-EVELYN E-commerce Platform",
    excerpt: "A mock-up e-commerce site focused on a modern shopping experience. Includes user authentication, product catalog, search functionality, and a dynamic shopping cart with simple checkout.",
    date: "2023",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop", 
    projectLink: `/projects?search=${projectsData[1].title}`,
  },
  {
    id: 7,
    slug: "web-development-projects-ts",
    title: "Web Development Projects",
    excerpt: "Developed multiple web applications using React and Next.js, focusing on clean UI and efficient performance. Built interactive tools such as a CPU Scheduling Simulator and applied responsive design principles.",
    date: "2024 - Present",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 8,
    slug: "collaborative-coursework-ts",
    title: "Collaborative Coursework at Cordova Public College",
    excerpt: "Completed team-based projects that involved planning, designing, and implementing web solutions. Practiced Agile workflows, Git version control, and responsible for UI component structuring.",
    date: "2023 - 2024",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", 
  }
];