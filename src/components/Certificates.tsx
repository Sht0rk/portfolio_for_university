import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "SASMO Math Olympiad Certificate",
      issuer: "Singapore and Asian Schools Math Olympiad",
      year: "2023",
      level: "International",
      description: "Certificate of Achievement for medal performance in international mathematics competition",
      status: "Verified"
    },
    {
      title: "AMO Math Olympiad Certificate", 
      issuer: "Asian Mathematical Olympiad",
      year: "2023", 
      level: "Regional",
      description: "Medal certificate recognizing excellence in advanced mathematical problem solving",
      status: "Verified"
    },
    {
      title: "World Economics Cup Olympiad",
      issuer: "International Economics Competition",
      year: "2024",
      level: "International", 
      description: "Certificate for advancing to second round of global economics competition",
      status: "Verified"
    },
    {
      title: "Mathematics Excellence Award",
      issuer: "Academic Institution",
      year: "2023",
      level: "Academic",
      description: "Recognition for outstanding performance in advanced mathematics coursework",
      status: "Verified"
    },
    {
      title: "Programming Fundamentals",
      issuer: "Online Learning Platform",
      year: "2022",
      level: "Technical",
      description: "Completion certificate for advanced programming concepts and algorithms",
      status: "Verified"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Tech Academy",
      year: "2023",
      level: "Technical",
      description: "Full-stack web development certification with modern frameworks",
      status: "Verified"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "International": return "bg-gold text-black";
      case "Regional": return "bg-blue-600 text-white";
      case "Academic": return "bg-green-600 text-white";
      case "Technical": return "bg-purple-600 text-white";
      default: return "bg-gray-600 text-white";
    }
  };

  return (
    <section id="certificates" className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-black relative overflow-hidden">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        {Array.from({ length: 140 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-indigo-400 rounded-full opacity-25 animate-twinkle cosmic-particle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Certificate constellation */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl animate-nebula-drift" style={{animationDelay: '15s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-200 via-white to-blue-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              Certificates & Credentials
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                Official recognition and certificates earned through competitions, coursework, and professional development
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 card-cosmic group rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-2xl border border-indigo-400/40 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                      <FileText className="h-10 w-10 text-indigo-300" />
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-4 text-slate-100 group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 font-bold">{cert.title}</CardTitle>
                  <div className="flex justify-center space-x-3 mb-3">
                    <Badge className={`${getLevelColor(cert.level)} rounded-2xl px-4 py-2 font-bold shadow-lg`}>
                      {cert.level}
                    </Badge>
                    <Badge variant="outline" className="border-indigo-400/50 text-indigo-300 bg-indigo-500/10 rounded-2xl px-4 py-2 font-medium">{cert.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-slate-300 font-medium text-sm">{cert.issuer}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{cert.description}</p>
                  
                  <div className="flex items-center justify-center space-x-2 p-2 bg-green-500/10 rounded-full border border-green-400/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-300 font-medium">{cert.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Certification Summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 card-cosmic group rounded-3xl overflow-hidden">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">📜</div>
                <div className="text-3xl font-bold text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors duration-300">{certificates.length}</div>
                <div className="text-sm text-slate-300 font-medium">Total Certificates</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 card-cosmic group rounded-3xl overflow-hidden">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">🌍</div>
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">3</div>
                <div className="text-sm text-slate-300 font-medium">International Awards</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 card-cosmic group rounded-3xl overflow-hidden">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">🎓</div>
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">2</div>
                <div className="text-sm text-slate-300 font-medium">Technical Certifications</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 card-cosmic group rounded-3xl overflow-hidden">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">✅</div>
                <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors duration-300">100%</div>
                <div className="text-sm text-slate-300 font-medium">Verified Status</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;