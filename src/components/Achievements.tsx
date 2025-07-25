import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Medal, Trophy } from "lucide-react";

const Achievements = () => {
  const olympiads = [
    {
      icon: <Medal className="h-16 w-16 text-yellow-400 drop-shadow-lg" />,
      title: "SASMO Math Olympiad",
      achievement: "Medalist",
      description: "Received medal in the prestigious Singapore and Asian Schools Math Olympiad, demonstrating outstanding problem-solving skills",
      year: "2023"
    },
    {
      icon: <Medal className="h-16 w-16 text-silver drop-shadow-lg" />,
      title: "AMO Math Olympiad",
      achievement: "Medalist", 
      description: "Won medal in the Asian Mathematical Olympiad, competing with the region's best mathematical minds",
      year: "2023"
    },
    {
      icon: <Trophy className="h-16 w-16 text-bronze drop-shadow-lg" />,
      title: "World Economics Cup Olympiad",
      achievement: "Second Round",
      description: "Successfully advanced to the second round of the prestigious World Economics Cup Olympiad, showing deep understanding of economic principles",
      year: "2024"
    }
  ];

  const stats = [
    { number: "3", label: "International Competitions", icon: "🏆" },
    { number: "2", label: "Olympiad Medals", icon: "🥇" },
    { number: "500+", label: "Social Media Followers", icon: "📱" },
    { number: "500+", label: "Farmers Helped", icon: "🌱" }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        {Array.from({ length: 180 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-400 rounded-full opacity-25 animate-twinkle cosmic-particle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Achievement constellation */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl animate-nebula-drift" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift" style={{animationDelay: '8s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              Achievements
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                Recognition in international competitions demonstrating excellence in mathematics and analytical thinking
              </p>
            </div>
          </div>

          {/* Enhanced Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-slate-900/60 backdrop-blur-xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 card-cosmic rounded-3xl overflow-hidden group">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text mb-2 drop-shadow-lg">{stat.number}</div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Olympiad Achievements */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {olympiads.map((olympiad, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/60 backdrop-blur-xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 card-cosmic group rounded-3xl overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                    {olympiad.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4 text-slate-100 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 font-bold">
                    {olympiad.title}
                  </CardTitle>
                  <Badge 
                    variant="default" 
                    className="text-lg py-2 px-6 bg-gradient-to-r from-yellow-600 via-purple-600 to-cyan-600 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 rounded-2xl font-bold"
                  >
                    {olympiad.achievement}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 mb-4">
                    {olympiad.description}
                  </p>
                  <Badge variant="outline" className="border-yellow-400/50 text-yellow-300 bg-yellow-500/10 rounded-full px-4 py-1">
                    {olympiad.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inspirational Call to Action */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-yellow-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 rounded-3xl overflow-hidden">
              <CardContent className="pt-12 pb-8">
                <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                  Reaching for the Stars 🚀
                </h3>
                <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  Every achievement is a step towards my dream of becoming an aerospace engineer and contributing to space exploration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;