import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import "./style.css";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Pricing />
      <Feedback />
      <Contact />
      <Toaster position="bottom-center" />
    </div>
  );
}
