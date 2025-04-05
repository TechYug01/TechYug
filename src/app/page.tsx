import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
