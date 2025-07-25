import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, Send, FileText, Users, Eye } from "lucide-react";

const MediaOutreach = () => {
  const platforms = [
    {
      icon: <Send className="h-8 w-8 text-blue-500" />,
      name: "Telegram Channel",
      handle: "t.me/CrhideaSense",
      description: "Daily math concepts, problem-solving techniques, and educational content for mathematics enthusiasts",
      content: "Mathematical insights and tutorials",
      status: "Active",
      link: "https://t.me/BeyondtheEquation"
    },
    {
      icon: <Youtube className="h-8 w-8 text-red-600" />,
      name: "YouTube Channel", 
      handle: "@BeyondtheEquation",
      description: "Visually stunning math animations and educational videos that make complex concepts accessible and engaging",
      content: "Animated math explanations", 
      status: "Active", 
      link: "https://www.youtube.com/@BeyondtheEquation"
    },
    {
      icon: <FileText className="h-8 w-8 text-gray-700" />,
      name: "Medium Blog",
      handle: "Coming Soon",
      description: "In-depth articles on mathematics, engineering concepts, and innovative problem-solving approaches",
      content: "Technical articles and insights",
      status: "In Development",
      link: "#"
    }
  ];

  const contentTypes = [
    {
      icon: "🎬",
      title: "Animated Math Videos",
      description: "Modern, smooth animations explaining complex mathematical concepts in visual ways"
    },
    {
      icon: "📊",
      title: "Problem Solving Techniques", 
      description: "Step-by-step guides to approaching challenging mathematical problems"
    },
    {
      icon: "🔬",
      title: "Engineering Applications",
      description: "Real-world applications of mathematical concepts in engineering and technology"
    },
    {
      icon: "🎯",
      title: "Olympiad Preparation",
      description: "Tips and strategies for mathematics olympiad competitions"
    }
  ];

  const achievements = [
    { metric: "500+", label: "Total Followers", icon: "👥" },
    { metric: "5+", label: "Video Content", icon: "🎥" },
    { metric: "10+", label: "Educational Posts", icon: "📚" },
    { metric: "5K+", label: "Views per Month", icon: "👁️" }
  ];

  return (
    <section id="media" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        {Array.from({ length: 160 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-25 animate-twinkle cosmic-particle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Media constellation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl animate-nebula-drift" style={{animationDelay: '12s'}} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-200 via-white to-blue-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              Media & Outreach
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                I run a Telegram channel, YouTube, and Medium account where I share unique and interesting math concepts. 
                My goal is to make mathematics engaging and visually stunning through modern, smooth animations.
              </p>
            </div>
          </div>

          {/* Enhanced Platform Cards */}
          <div className="grid md:grid-cols-1 gap-12 mb-20">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 card-cosmic group rounded-3xl overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="p-4 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl border border-purple-400/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {platform.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2 text-slate-100 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 font-bold">{platform.name}</CardTitle>
                        <p className="text-purple-300 font-medium text-lg">{platform.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={platform.status === "Active" ? "default" : "secondary"} className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 border-0 mb-2">
                        {platform.status}
                      </Badge>
                      <p className="text-sm text-slate-300 font-medium">{platform.followers} followers</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-200 leading-relaxed text-lg group-hover:text-slate-100 transition-colors duration-300 font-medium">{platform.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300 bg-purple-500/10 rounded-full px-4 py-2 font-medium">{platform.content}</Badge>
                    <a href="https://www.youtube.com/@BeyondtheEquation" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-purple-400/50 text-purple-200 hover:text-white hover:bg-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 px-6 py-3 text-lg font-bold rounded-2xl">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Visit Channel
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Content Types */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-purple-200 via-white to-blue-200 bg-clip-text text-transparent">Content I Create</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((content, index) => (
                <Card key={index} className="text-center bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 card-cosmic group rounded-3xl overflow-hidden">
                  <CardContent className="pt-10 pb-8">
                    <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">{content.icon}</div>
                    <h4 className="font-bold mb-4 text-slate-100 text-lg group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{content.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{content.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {achievements.map((stat, index) => (
              <Card key={index} className="text-center bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 card-cosmic group rounded-3xl overflow-hidden">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-300">{stat.metric}</div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Mission Statement */}
          <Card className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 rounded-3xl overflow-hidden">
            <CardContent className="pt-12 pb-10 text-center">
              <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-200 via-white to-blue-200 bg-clip-text text-transparent">My Educational Mission</h3>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                Mathematics is beautiful, and I believe everyone should be able to see that beauty. Through modern animations, 
                clear explanations, and engaging content, I'm working to make complex mathematical concepts accessible to students 
                worldwide. My goal is to inspire the next generation of mathematicians and engineers.
              </p>
              <div className="mt-8">
                <a href="https://www.youtube.com/@BeyondtheEquation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 border-0 shadow-2xl shadow-purple-500/40 hover:shadow-3xl hover:shadow-purple-500/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 px-10 py-4 text-lg font-bold rounded-2xl">
                  Join My Educational Journey
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MediaOutreach;