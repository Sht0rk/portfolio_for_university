import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Calculator, BookOpen, Target } from "lucide-react";

const About = () => {
  const skills = [
    "Mathematics", "Physics", "Web Development", "Data Analysis",
    "Python", "JavaScript", "Agricultural Technology", "Engineering Design", 
    "Ultrasonic Technology", "Research", "Content Creation", "Animation"
  ];

  const journey = [
    {
      icon: <Calculator className="h-8 w-8 text-purple-600" />,
      title: "Mathematics Olympiad Competitor",
      description: "Competing in international mathematics olympiads, developing problem-solving skills and mathematical intuition.",
      year: "2020-2024"
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Tech Project Developer",
      description: "Creating innovative technology solutions, from agricultural forecasting to improved medical devices.",
      year: "2024-2025"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Math Content Creator",
      description: "Sharing unique mathematical concepts through engaging animations and modern visual storytelling.",
      year: "2024-2025"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Aspiring Aerospace Engineer",
      description: "Working towards aerospace engineering studies with focus on innovation and complex problem solving.",
      year: "2024-Future"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-black relative overflow-hidden">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30 animate-twinkle cosmic-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Nebula effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-nebula-drift" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift" style={{animationDelay: '10s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              About Me
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                I'm driven by curiosity and a love for engineering and mathematics. My journey includes competing in international math olympiads, 
                developing tech projects, and sharing unique mathematical concepts with the world through engaging animations.
              </p>
            </div>
          </div>

          {/* Enhanced Journey Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {journey.map((item, index) => (
              <Card key={index} className="text-center bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 card-cosmic group rounded-3xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 rounded-2xl border border-cyan-400/40">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-100 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-indigo-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 font-bold">
                    {item.title}
                  </CardTitle>
                  <Badge variant="outline" className="mt-3 border-cyan-400/60 text-cyan-200 bg-cyan-500/10 rounded-full px-4 py-1">
                    {item.year}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 card-cosmic rounded-3xl overflow-hidden">
            <CardHeader className="pb-6">
              <CardTitle className="text-4xl md:text-5xl text-center bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-transparent font-black drop-shadow-lg">
                Skills & Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-3 px-6 bg-slate-800/70 text-slate-200 border border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-indigo-600/30 hover:border-cyan-300/60 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 cursor-default transform hover:scale-110 hover:-translate-y-1 rounded-2xl font-medium backdrop-blur-md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">My Vision</h3>
            <p className="text-lg text-center leading-relaxed opacity-90">
              To pursue aerospace engineering and contribute to humanity's exploration of space while making complex mathematical 
              concepts accessible to everyone. I believe that innovation comes from the intersection of curiosity, mathematics, 
              and the courage to tackle challenging problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;