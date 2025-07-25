import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Satellite, Plane } from "lucide-react";

const AerospaceProjects = () => {
  const projects = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Advanced Propulsion System Design",
      description: "Designed and optimized a hybrid rocket propulsion system achieving 15% higher efficiency than conventional systems. Utilized computational fluid dynamics (CFD) analysis and innovative fuel injection techniques.",
      technologies: ["CFD Analysis", "MATLAB", "SolidWorks", "Propulsion Design", "Performance Optimization"],
      achievements: [
        "15% efficiency improvement over baseline",
        "Reduced fuel consumption by 12%",
        "Patent pending for injection system design",
        "Successfully tested at NASA Ames Research Center"
      ],
      status: "Completed",
      year: "2025"
    },
    {
      icon: <Satellite className="h-8 w-8 text-green-600" />,
      title: "CubeSat Mission Development",
      description: "Led the development of a 3U CubeSat for Earth observation with advanced attitude control system. Project included payload integration, thermal analysis, and mission planning.",
      technologies: ["Attitude Control", "Thermal Analysis", "Mission Planning", "Python", "C++", "ANSYS"],
      achievements: [
        "Successfully deployed and operational",
        "6 months extended mission life",
        "High-resolution Earth imaging capability",
        "Published 3 peer-reviewed papers"
      ],
      status: "Operational",
      year: "2022-2023"
    },
    {
      icon: <Plane className="h-8 w-8 text-purple-600" />,
      title: "Supersonic Aircraft Wing Optimization",
      description: "Developed novel wing geometry for next-generation supersonic passenger aircraft, focusing on reducing sonic boom impact while maintaining aerodynamic efficiency.",
      technologies: ["Aerodynamics", "Sonic Boom Mitigation", "Wind Tunnel Testing", "CFD", "Shape Optimization"],
      achievements: [
        "40% reduction in sonic boom intensity",
        "Maintained cruise efficiency at Mach 2.2",
        "Wind tunnel validation successful",
        "Collaboration with major aerospace manufacturer"
      ],
      status: "In Development",
      year: "2023-2024"
    }
  ];

  return (
    <section id="aerospace" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Aerospace Engineering Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pushing the boundaries of flight and space exploration through innovative engineering solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant={project.status === "Completed" ? "default" : project.status === "Operational" ? "secondary" : "outline"}>
                            {project.status}
                          </Badge>
                          <Badge variant="outline">{project.year}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Technologies & Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Technical Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AerospaceProjects;