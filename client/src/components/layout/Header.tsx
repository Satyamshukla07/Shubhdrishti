import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass-nav backdrop-blur-xl" : "glass-nav backdrop-blur-lg"
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20 lg:h-24 py-4">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <div className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold font-inter">
              <span className="text-royal-blue">SHUBHDHRISHTI</span>
              <br className="sm:hidden" />
              <span className="gradient-text ml-1 sm:ml-2">ENTERTAINMENT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-gray-700 font-medium font-inter text-sm lg:text-base px-3 lg:px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-royal-blue glass-button border-0"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div className="glass-card mt-4 p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-700 hover:text-royal-blue font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
