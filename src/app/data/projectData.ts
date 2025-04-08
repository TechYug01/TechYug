interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
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
    images: ["/images/carzi1.png", "/images/carzi2.png", "/images/carzi3.png"],
  },
  {
    id: 2,
    title: "Devfolio - Developer Portfolio",
    description:
      "Devfolio is a modern developer portfolio template built with React. It showcases projects, skills, and blogs. Designed with responsiveness and accessibility in mind.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    images: [
      "/images/devfolio1.png",
      "/images/devfolio2.png",
      "/images/devfolio3.png",
    ],
  },
  {
    id: 3,
    title: "ShopWave - E-commerce Platform",
    description:
      "ShopWave is a sleek, responsive e-commerce website. Built with MERN stack, it supports user authentication, product search, cart and payment integration.",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    images: [
      "/images/shopwave1.png",
      "/images/shopwave2.png",
      "/images/shopwave3.png",
    ],
  },
];
