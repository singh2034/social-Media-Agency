import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTop className="rounded-full p-[5px]" smooth color="#f88" />
    </>
  );
};

export default App;
