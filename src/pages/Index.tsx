import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import MediaOutreach from "@/components/MediaOutreach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Certificates />
      <Projects />
      <MediaOutreach />
      <Contact />
      <Footer />
    </div>
  );
}
