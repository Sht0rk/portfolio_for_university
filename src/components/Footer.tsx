import { Calculator, Rocket, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Calculator className="h-5 w-5" />
                </div>
                <div className="p-2 bg-yellow-600 rounded-lg">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Arthur Amirov</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                17-year-old aspiring aerospace engineer passionate about mathematics, 
                innovation, and making complex ideas accessible through technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Areas of Interest</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Aerospace Engineering</li>
                <li>Mathematics Olympiads</li>
                <li>Agricultural Technology</li>
                <li>Medical Device Innovation</li>
                <li>Educational Content Creation</li>
                <li>Mathematical Animations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#media" className="hover:text-white transition-colors">Media & Outreach</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Arthur Amirov - Portfolio. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;