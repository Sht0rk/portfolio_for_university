import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Activity, Zap } from "lucide-react";

const HeartImplantProjects = () => {
  const projects = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Next-Generation Pacemaker Design",
      description: "Developed a revolutionary pacemaker with extended battery life and wireless monitoring capabilities. Features advanced algorithms for adaptive pacing and real-time patient data transmission to healthcare providers.",
      technologies: ["Biocompatible Materials", "Wireless Communication", "Low-Power Electronics", "FDA Compliance", "Clinical Testing"],
      achievements: [
        "300% extended battery life (15+ years)",
        "Real-time wireless monitoring capability",
        "FDA breakthrough device designation",
        "Successful implantation in 50+ patients",
        "99.7% reliability rate in clinical trials"
      ],
      status: "Clinical Trials",
      year: "2022-2024",
      impact: "Life-changing technology for 3M+ pacemaker patients worldwide"
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "Artificial Heart Valve Innovation",
      description: "Engineered a bio-inspired artificial heart valve using advanced polymers and precision manufacturing. Designed to mimic natural valve function while providing superior durability and reduced clotting risk.",
      technologies: ["Biomimetic Design", "Polymer Engineering", "3D Printing", "Hemodynamic Analysis", "Biocompatibility Testing"],
      achievements: [
        "50% reduction in thrombosis risk",
        "Expected lifespan of 25+ years",
        "Minimally invasive implantation procedure",
        "Successfully tested in preclinical studies",
        "Patent granted for valve mechanism"
      ],
      status: "Preclinical Testing",
      year: "2023-2024",
      impact: "Revolutionary solution for 250K+ valve replacement surgeries annually"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Smart Cardiac Monitoring System",
      description: "Created an implantable cardiac monitoring device with AI-powered arrhythmia detection and prediction. Integrates machine learning algorithms to provide early warning for cardiac events.",
      technologies: ["Machine Learning", "Signal Processing", "Miniaturization", "Cloud Integration", "Mobile App Development"],
      achievements: [
        "95% accuracy in arrhythmia prediction",
        "24/7 continuous monitoring",
        "Integration with smartphone app",
        "Early warning system saves lives",
        "Reduced hospital readmissions by 40%"
      ],
      status: "FDA Review",
      year: "2023-2024",
      impact: "Preventing sudden cardiac death in high-risk patients"
    }
  ];

  return (
    <section id="heart-implant" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Heart Implant Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering life-saving cardiac technologies that improve patient outcomes and quality of life
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={project.status === "Clinical Trials" ? "default" : project.status === "FDA Review" ? "secondary" : "outline"}>
                            {project.status}
                          </Badge>
                          <Badge variant="outline">{project.year}</Badge>
                        </div>
                        <p className="text-sm text-red-600 font-medium">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Technologies & Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">Clinical Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Medical Impact:</strong> This technology has the potential to improve outcomes for thousands of patients worldwide, 
                      representing a significant advancement in cardiac care and medical device engineering.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Clinical Data
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

export default HeartImplantProjects;