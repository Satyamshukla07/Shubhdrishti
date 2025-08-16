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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "glass-nav shadow-xl" : "glass-nav"
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          
          {/* Logo - Always Visible */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-left">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-royal-blue font-inter leading-none">
                SHUBHDHRISHTI
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold gradient-text font-inter leading-none -mt-1">
                ENTERTAINMENT
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-gray-700 hover:text-royal-blue font-medium font-inter transition-all duration-300 px-3 py-2 text-sm xl:text-base"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-amber transition-all duration-300 hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-royal-blue hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/20">
            <nav className="px-4 sm:px-6 py-4 space-y-2 bg-white/10 backdrop-blur-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-royal-blue hover:bg-white/10 font-medium font-inter transition-all duration-300 rounded-lg"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
