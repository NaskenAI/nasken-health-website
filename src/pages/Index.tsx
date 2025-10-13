import Hero from "@/components/Hero";
import About from "@/components/About"; 
import Research from "@/components/Research";
import Media from "@/components/Media";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Newsletter from "@/components/NewsLetter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Media />
      <Technology />
      <Contact />
      <Newsletter /> 
      <Footer />
    </div>
  );
};

export default Index;
