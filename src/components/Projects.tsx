import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Rocket, Stethoscope } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "Agro Forecasting Site for Uzbekistan",
      description: "Developed a comprehensive web platform that provides agricultural forecasts for Uzbekistan, helping farmers and agribusinesses make data-driven decisions for crop planning and resource management.",
      technologies: ["JavaScript", "Python", "Data Analysis", "Weather APIs", "Machine Learning", "Web Development"],
      features: [
        "Real-time weather data integration",
        "Crop yield predictions using ML algorithms", 
        "Soil condition analysis and recommendations",
        "Multi-language support (Uzbek, Russian, English)",
        "Mobile-responsive design for field use",
        "Historical data visualization and trends"
      ],
      status: "Live",
      year: "2025",
      impact: "Supporting 500+ farmers with data-driven agricultural decisions",
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
      title: "Improved Ear Implant with Ultrasonic Transmission",
      description: "Designed and improved a revolutionary hearing implant using ultrasonic transmission technology, aiming to make hearing aids more effective, accessible, and less invasive for patients with hearing impairments.",
      technologies: ["Ultrasonic Technology", "Biomedical Engineering", "Signal Processing", "3D Modeling", "Medical Device Design", "Arduino/Microcontrollers"],
      features: [
        "Ultrasonic transmission for clearer audio",
        "Non-invasive external component design",
        "Advanced signal processing algorithms",
        "Reduced feedback and noise interference",
        "Longer battery life through efficient design",
        "Customizable frequency response"
      ],
      status: "Prototype",
      year: "2024-2025", 
      impact: "Potential to improve hearing for millions worldwide",
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: <Rocket className="h-10 w-10 text-blue-600" />,
      title: "Orbital Simulator",
      description: "Developed a physics-based orbital simulation tool to visualize and analyze spacecraft trajectories under gravitational forces. The simulator allows users to model orbital mechanics in 2D using customizable parameters for planets and spacecraft, with real-time graphical outputs and dynamic reports for educational and research purposes.",
      technologies: ["VPython", "Physics Engine", "Gravitational Modeling", "Numerical Integration", "Matplotlib", "Data Visualization", "GUI Development"],
      features: [
        "Real-time 2D orbital simulation under Newtonian gravity",
        "Custom input for planetary mass, radius, and initial velocity vectors",
        "Dynamic rendering of trajectory, velocity, and acceleration",
        "Live plotting of position, speed, and energy over time",
        "Interactive interface for simulation control and scenario modification",
        "Exportable analytical reports and trajectory data",
        "Designed for STEM education, aerospace training, and research prototyping"
      ],
      status: "Prototype",
      year: "2024-2025", 
      impact: "Created to support science education and research, the simulator helps students and enthusiasts gain intuitive understanding of orbital mechanics, with potential applications in aerospace training, interactive STEM outreach, and scientific visualization",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative">
      <div className="absolute inset-0">
        {Array.from({ length: 150 }, (_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-indigo-900/10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              Projects
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                Innovative technology solutions addressing real-world challenges in agriculture and healthcare
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.05] group hover:bg-slate-800/70">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-md rounded-xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 border border-cyan-400/30">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-3 text-slate-200 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-indigo-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={project.status === "Live" ? "default" : "secondary"} className="text-sm bg-gradient-to-r from-cyan-600 to-indigo-600 border-0">
                            {project.status}
                          </Badge>
                          <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">{project.year}</Badge>
                        </div>
                        <p className="text-cyan-400 font-medium text-sm">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-slate-200 leading-relaxed text-xl group-hover:text-slate-100 transition-colors duration-300 font-medium">{project.description}</p>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-slate-100 text-lg">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm px-4 py-2 bg-slate-800/70 text-slate-200 border border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-indigo-600/30 hover:border-cyan-300/60 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 rounded-2xl font-medium backdrop-blur-md">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-slate-100 text-lg">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-cyan-400/50"></div>
                          <span className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-400 border-0 shadow-2xl shadow-cyan-500/40 hover:shadow-3xl hover:shadow-cyan-500/60 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 px-8 py-4 text-lg font-bold rounded-2xl backdrop-blur-xl">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View Demo
                    </Button>
                    <Button variant="outline" className="border-2 border-cyan-400/50 text-cyan-200 hover:text-white hover:bg-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-500/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 px-8 py-4 text-lg font-bold rounded-2xl">
                      <Github className="h-5 w-5 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Farmers Helped</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Innovation Areas</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-2xl font-bold text-teal-600 mb-1">Global</div>
                <div className="text-sm text-gray-600">Impact Potential</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;