import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Achievements", id: "achievements" },
    { label: "Certificates", id: "certificates" },
    { label: "Projects", id: "projects" },
    { label: "Media", id: "media" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-white to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
            Arthur Amirov
          </h1>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-2 bg-slate-900/70 backdrop-blur-xl rounded-full px-8 py-3 border border-cyan-500/30 shadow-xl shadow-cyan-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-200 hover:bg-cyan-500/20 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950/95 backdrop-blur-xl border-cyan-500/20">
              <nav className="flex flex-col space-y-4 mt-12">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-slate-300 hover:text-cyan-200 hover:bg-cyan-500/20 transition-all duration-300 px-4 py-3 rounded-xl"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;