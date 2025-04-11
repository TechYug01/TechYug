// feedbackData.ts

interface Feedback {
  project: string;
  review: string;
  author: string;
  role: string;
  rating: number;
}

export const feedbackData: Feedback[] = [
  {
    project: "MEDSCAN",
    review:
      "Working with TECHYUG team has been an outstanding experience. We approached him with just an idea—a smart, user-friendly health diagnostic tool—and they brought it to life with impressive precision. From the clean, intuitive frontend to the seamless integration of machine learning models, every detail was handled professionally. The team communicated consistently, delivered ahead of deadlines, and even went the extra mile by optimizing performance and UI responsiveness. MEDSCAN has now become a key part of our early-access platform for healthcare accessibility. Highly recommended for anyone looking for a reliable and skilled developer!",
    author: "Rahul Mehra",
    role: "Co-founder, HealthTech Labs",
    rating: 4.5,
  },
  {
    project: "Devfolio",
    review:
      "We needed a sleek, modern portfolio template that developers could actually connect with—not just visually, but functionally. TechYug team absolutely nailed it with Devfolio. Built using React and Tailwind CSS, and powered by the speed of Vite, the platform feels incredibly lightweight yet robust. The layout is clean, accessible, and responsive across every device we tested. Beyond the UI, he structured the codebase in a way that made customization effortless—even for devs who aren’t frontend-heavy. Whether it’s showcasing projects, highlighting skills, or publishing blogs, Devfolio offers the kind of clarity and elegance that developers appreciate. A job brilliantly executed.",
    author: "Karan Deshmukh",
    role: "Developer Community Lead, CodeBridge Collective",
    rating: 5,
  },
  {
    project: "CARZI",
    review:
      "When we started building Carzi, our biggest challenge was finding someone who could merge real-time functionality with a smooth user experience. Team TECHYUG delivered beyond expectations. From integrating Google Maps for seamless route visuals to implementing real-time ride updates using Socket.IO, every feature worked like a charm. What impressed us most was his proactive approach—he suggested thoughtful improvements around user flow, security, and even notification handling via EmailJS. The tech stack was modern, the communication was easy, and the project was delivered on time. Carzi is live and getting great feedback from users—all thanks to the solid foundation the TECHYUG team for buillding this for us.",
    author: "Raghav Sharma",
    role: "Product Manager, Carzi!",
    rating: 5,
  },
  {
    project: "Devfolio",
    review:
      "We needed a sleek, modern portfolio template that developers could actually connect with—not just visually, but functionally. TechYug team absolutely nailed it with Devfolio. Built using React and Tailwind CSS, and powered by the speed of Vite, the platform feels incredibly lightweight yet robust. The layout is clean, accessible, and responsive across every device we tested. Beyond the UI, he structured the codebase in a way that made customization effortless—even for devs who aren’t frontend-heavy. Whether it’s showcasing projects, highlighting skills, or publishing blogs, Devfolio offers the kind of clarity and elegance that developers appreciate. A job brilliantly executed.",
    author: "Karan Deshmukh",
    role: "Developer Community Lead, CodeBridge Collective",
    rating: 5,
  },
];
