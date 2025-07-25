import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "amirovarthur@outlook.com",
      href: "mailto:amirovarthur@outlook.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+998 (94) 603-9192",
      href: "tel:+998946039192"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tashkent, Uzbekistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "#"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Sht0rk"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Resume",
      href: "#"
    }
  ];

  const expertise = [
    "Aerospace Consulting", "Medical Device Development", "Research Collaboration",
    "Technical Advisory", "Speaking Engagements"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-cyan-950 to-black relative overflow-hidden">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        {Array.from({ length: 120 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30 animate-twinkle cosmic-particle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Contact constellation */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl animate-nebula-drift" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-transparent text-glow drop-shadow-2xl">
              Get In Touch
            </h2>
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or explore how we can push the boundaries of aerospace engineering and mathematics together.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <Card className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 card-cosmic rounded-3xl overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-slate-100 font-bold bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Get In Touch</CardTitle>
                <p className="text-slate-300 text-lg">Send me a message and I'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-slate-200 mb-3 block">Name</label>
                    <Input placeholder="Your name" className="bg-slate-800/50 border-cyan-500/30 text-slate-200 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-200 mb-3 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-slate-800/50 border-cyan-500/30 text-slate-200 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-slate-200 mb-3 block">Subject</label>
                  <Input placeholder="Project collaboration, consultation, etc." className="bg-slate-800/50 border-cyan-500/30 text-slate-200 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-slate-200 mb-3 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or inquiry..."
                    className="min-h-[120px] bg-slate-800/50 border-cyan-500/30 text-slate-200 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 border-0 shadow-2xl shadow-cyan-500/40 hover:shadow-3xl hover:shadow-cyan-500/60 transition-all duration-700 transform hover:scale-105 hover:-translate-y-1 py-4 text-lg font-bold rounded-2xl">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <div className="text-blue-600">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{contact.label}</div>
                        <div className="font-medium">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Professional Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center space-x-2 bg-gray-100 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                      >
                        <div className="text-blue-600">
                          {link.icon}
                        </div>
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Areas of Expertise</CardTitle>
                  <p className="text-gray-600 text-sm">How I can help you</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((area, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Available for Consulting</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Currently accepting new projects in aerospace engineering and medical device development.
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;