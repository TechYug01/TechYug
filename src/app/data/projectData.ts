import picture1 from "@/../public/carzi/Picture1.png";
import picture10 from "@/../public/carzi/Picture10.png";
import picture11 from "@/../public/carzi/Picture11.png";
import picture12 from "@/../public/carzi/Picture12.png";
import picture13 from "@/../public/carzi/Picture13.png";
import picture2 from "@/../public/carzi/Picture2.png";
import picture3 from "@/../public/carzi/Picture3.png";
import picture4 from "@/../public/carzi/Picture4.png";
import picture5 from "@/../public/carzi/Picture5.png";
import picture6 from "@/../public/carzi/Picture6.png";
import picture7 from "@/../public/carzi/Picture7.png";
import picture8 from "@/../public/carzi/Picture8.png";
import picture9 from "@/../public/carzi/Picture9.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: StaticImageData[];
  link?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Carzi - Car Pooling App",
    description:
      "Carzi is a full-fledged carpooling web app built with Next.js and TypeScript. It features real-time ride tracking using Socket.IO, Google Maps integration, and secure authentication. MongoDB stores ride and user data. Notifications are handled both via email and in-app in real-time.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
      "Google Maps API",
      "EmailJS",
    ],
    images: [
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      picture6,
      picture7,
      picture8,
      picture9,
      picture10,
      picture11,
      picture12,
      picture13,
    ],
  },
  {
    id: 2,
    title: "Devfolio - Developer Portfolio",
    description:
      "Devfolio is a modern developer portfolio template built with React. It showcases projects, skills, and blogs. Designed with responsiveness and accessibility in mind.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    images: [picture1],
  },
  {
    id: 3,
    title: "ShopWave - E-commerce Platform",
    description:
      "ShopWave is a sleek, responsive e-commerce website. Built with MERN stack, it supports user authentication, product search, cart and payment integration.",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    images: [picture1],
  },
];
