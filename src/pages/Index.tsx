import Hero from "@/components/Hero";
import About from "@/components/About"; 
import Research from "@/components/Research";
import Media from "@/components/Media";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Media />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
