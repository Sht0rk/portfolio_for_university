import { Button } from "@/components/ui/button";
import { ArrowDown, Rocket, Calculator, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animated starfield background
  const stars = Array.from({ length: 200 }, (_, i) => {
    const size = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.8 + 0.2;
    const animationDuration = Math.random() * 3 + 2;
    return (
      <div
        key={i}
        className="absolute bg-white rounded-full animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: opacity,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    );
  });

  // Shooting stars
  const shootingStars = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full animate-ping"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: '2s',
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-black pt-20 relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {stars}
        {shootingStars}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black/40" />
        {/* Milky Way Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent rotate-45 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-500/5 to-transparent -rotate-45 transform-gpu" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8 animate-in fade-in duration-1000">
            <div className="p-5 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/20 hover:scale-110 hover:shadow-cyan-500/40 transition-all duration-500 group">
              <Rocket className="h-12 w-12 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300" />
            </div>
            <div className="p-5 bg-indigo-500/20 backdrop-blur-md rounded-full border border-indigo-400/40 shadow-lg shadow-indigo-500/20 hover:scale-110 hover:shadow-indigo-500/40 transition-all duration-500 group">
              <Calculator className="h-12 w-12 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300" />
            </div>
            <div className="p-5 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-400/40 shadow-lg shadow-amber-500/20 hover:scale-110 hover:shadow-amber-500/40 transition-all duration-500 group">
              <Star className="h-12 w-12 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-in slide-in-from-bottom-8 duration-1000 delay-300 hover:scale-105 transition-transform duration-500">
            Arthur Amirov
          </h1>
          
          <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-200 to-indigo-200 bg-clip-text mb-6 leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            Aspiring Aerospace Engineer
          </p>
          
          <p className="text-lg text-slate-200 mb-8 max-w-3xl mx-auto animate-in fade-in duration-1000 delay-700 leading-relaxed">
            Hi, I'm Arthur Amirov, a 17-year-old with big ambitions to become an aerospace engineering student. 
            I'm passionate about innovation, mathematics, and making complex ideas accessible through modern technology and design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-1000">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 border-0 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:scale-105 px-8 py-4 rounded-2xl"
            >
              🚀 Explore My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('achievements')}
              className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 backdrop-blur-md shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-105 px-8 py-4 rounded-2xl"
            >
              🏆 View Achievements
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:animate-pulse group"
          >
            <ArrowDown className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;