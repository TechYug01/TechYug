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
      "We needed a sleek, modern portfolio template that developers could actually connect with—not just visually, but functionally. TechYug team absolutely nailed it with Devfolio. Built using React and Tailwind CSS, and powered by the speed of Vite, the platform feels incredibly lightweight yet robust. The layout is clean, accessible, and responsive across every device we tested. Beyond the UI, he structured the codebase in a way that made customization effortless—even for devs who aren't frontend-heavy. Whether it's showcasing projects, highlighting skills, or publishing blogs, Devfolio offers the kind of clarity and elegance that developers appreciate. A job brilliantly executed.",
    author: "Karan Deshmukh",
    role: "Developer Community Lead, CodeBridge Collective",
    rating: 5,
  },
  {
    project: "shopwave",
    review:
      "We approached TECHYUG with a vision — an e-commerce experience that felt effortless, fast, and modern. What he delivered with ShopWave was all that and more. Right from the first mockups to deploying the full MERN-based build, his process was organized, insightful, and incredibly efficient. The platform isn't just functional — it's smart. The product filters are lightning fast, the cart logic is rock-solid, and the overall UI feels clean and intuitive on every screen size. Even complex pieces like secure login flows and payment gateway handling were done with meticulous attention to detail. The Team doesn't just code — he thinks like a product builder. And that's rare.",
    author: "Tanay Mehta",
    role: "Founder, NuEdge Retail Tech",
    rating: 4,
  },
  {
    project: "A&P Buyers Agency",
    review: "My experience with Techyug has been nothing short of fantastic. From initial planning to service delivery Alok and team have had great attention to detail, commitment and transparency. They were able to meet out significant time crunch and deliver our company's website. They were flexible and supportive. During the early stages of establishing your company you are always very particular about getting things perfect and Alok and his dedicated team have done just that. Thank you for your patience and helping set up A&P Buyers Agency's website, we are very excited to continue working together!",
    author: "Miss Preity",
    role: "CTO, A&P Buyers Agency",
    rating: 5
  }
];
