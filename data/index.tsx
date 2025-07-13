import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const services = [
  {
    ico: <Code />,
    title: "Custom Website Development",
    description:
      "Expertise in building high-performing, responsive, and accessible websites. " +
      "Utilize the latest technologies and frameworks to ensure an optimal user experience",
  },
  {
    ico: <Braces />,
    title: "Web Application Development",
    description:
      "Expertise in building robust and secure web applications. " +
      "Integrate advanced functionalities like e-commerce, online payments, and content management systems",
  },
  {
    ico: <HandHelping />,
    title: "Technology Consulting",
    description:
      "Offer strategic advice to help businesses leverage technology effectively. " +
      "Recommend the best technology solutions to meet your client's business goals",
  },
  {
    ico: <Blocks />,
    title: "System Integration",
    description:
      "Connect your website or web application with third-party systems like CRMs, ERPs, and marketing platforms. " +
      "Build custom integrations to meet your client's specific requirements.",
  },
  {
    ico: <Wrench />,
    title: "Maintenance and Support",
    description:
      "Monitor performance and troubleshoot issues promptly. " +
      "Regularly update code and technologies for security and compatibility",
  },
  {
    ico: <DraftingCompass />,
    title: "Mockup Integration",
    description:
      "Bridge the gap between design and development, ensuring pixel-perfect implementation. Maintain design fidelity throughout the development process",
  },
];

export const works = [
  {
    title: "PrintPenguin",
    description:
      "Creative e-commerce website where users can customize phone cases for Android, iPhone, and more. They can upload their own designs, choose colors, and preview the final product before ordering. With secure Stripe payments and worldwide shipping, PrintPenguin makes personalized phone cases easy and fun.",
    className: "md:col-span-1",
    image: "/images/works/work1.jpg",
    link: "https://printer-one.vercel.app/"
  }, 
  {
    title: "CodeVox",
    description:
      "Powerful online platform that lets users video chat, share screens, and collaboratively edit code in real time. Designed for developers, teams, it makes remote coding sessions smooth and interactive.",
    className: "md:col-span-1",
    image: "/images/works/work2.png",
    link: "https://codesync-zeta.vercel.app/"
  },
  {
    title: "Hiba&Aatae",
    description: "Non-profit website where people can donate or share medical equipment for others in need. Users can list items, add details, and allow others to contact them directly to benefit from the shared resources. It’s a community-driven platform built on kindness, support, and accessibility.",
    className: "md:col-span-1",
    image: "/images/works/work3.jpg",
    link: "https://hibaatae.vercel.app/"
  },
  // {
  //   title: "Iceberg Investment",
  //   description:
  //     "Your partner for integrating IT solutions, developing business management applications and much more. We offer state-of-the-art IT services, tax advice, construction, electrical, plumbing and painting services, as well as the supply of hardware, office products, clothing, perfumery, jewellery and many other items.",
  //   className: "md:col-span-1",
  //   image: "/images/works/work3.png",
  //   link: "/"
  // },
  // {
  //   title: "Venissa's Portfolio",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sapiente, voluptatum dolores deserunt repellat minus aspernatur facere aspe",
  //   className: "md:col-span-2",
  //   image: "/images/works/work6.png",
  //   link: "/"
  // },
  // {
  //   title: "Tailus UI React",
  //   description:
  //     "Highly customizable components for crafting modern, personalized websites and applications.",
  //   className: "md:col-span-1",
  //   image: "/images/works/work5.png",
  //   link: "/"
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/moad-hamousti-49136b111/",
  },
  {
    id: 2,
    img: <FaGithub />,
    href: "https://github.com/moadhamousti",
  },
  {
    id: 3,
    img: <FaFacebook />,
    href: "https://web.facebook.com/Moad.Hamousti",
  },
];

export const skills = [
  { name: "frontend", description: "", percentage: 85 },
  { name: "backend", description: "", percentage: 90 },
];

export const skillsIcons = [
  "typescript",
  "javascript",
  "jetbrains",
  "webstorm",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "figma",
];



export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "ui.earth.com",
    website: "https://ui.earth.com",

  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "ui.yoom.com",
    website: "https://ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "ui.aiimg.com",
    website: "https://ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "ui.apple.com",
    website: "https://ui.apple.com",
  },
];


