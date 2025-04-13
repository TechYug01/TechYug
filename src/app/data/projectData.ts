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

import medPicture1 from "@/../public/medscan/Picture1.png";
import medPicture2 from "@/../public/medscan/Picture2.png";
import medPicture3 from "@/../public/medscan/Picture3.png";
import medPicture4 from "@/../public/medscan/Picture4.png";
import medPicture5 from "@/../public/medscan/Picture5.png";
import medPicture6 from "@/../public/medscan/Picture6.png";

import devfolioImage from "@/../public/devfolio/Picture1.png";
import shopwaveImage from "@/../public/shopwave/Picture1.png";

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
    title: "MedScan - Medical Image Diagnosis",
    description:
      "MedScan is an advanced AI-powered web application designed for medical image diagnosis. Built using React, FastAPI, and TensorFlow, it supports diagnosis from chest X-rays (e.g., Pneumonia detection), eye fundus images (detecting up to 5 eye conditions including diabetic retinopathy and cataract), and classifies 23 different types of skin diseases. The system leverages machine learning and deep learning models for accurate prediction and is optimized with a clean, responsive UI using Tailwind CSS.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "Machine Learning",
      "TensorFlow",
    ],
    images: [
      medPicture1,
      medPicture2,
      medPicture3,
      medPicture4,
      medPicture5,
      medPicture6,
    ],
  },
  {
    id: 3,
    title: "ShopWave - Modern E-commerce",
    description:
      "ShopWave is a sleek and responsive e-commerce platform designed for seamless online shopping experiences. Featuring advanced product filtering, a smooth checkout flow, and real-time cart updates, the app is built with Next.js and MongoDB for scalable performance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
    ],
    images: [shopwaveImage],
  },
  {
    id: 4,
    title: "Devfolio - Developer Portfolio Builder",
    description:
      "Devfolio is an intuitive portfolio builder tailored for developers. Users can showcase projects, skills, and blogs with ease. The platform offers dynamic theming, markdown blog support, and live previews for an engaging personal brand experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Markdown",
      "Vercel",
    ],
    images: [devfolioImage],
  },
];
