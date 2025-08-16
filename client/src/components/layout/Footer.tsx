import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Event Management", href: "#" },
  { label: "Live Performances", href: "#" },
  { label: "Production Services", href: "#" },
  { label: "Corporate Events", href: "#" },
  { label: "Cultural Programs", href: "#" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-deep-navy text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4 font-poppins">
              <span className="text-white">SHUBHDHRISHTI</span>
              <span className="text-gold ml-2">ENTERTAINMENT</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-lg">
              Creating unforgettable entertainment experiences since 2008. We specialize in transforming your events into magical celebrations that leave lasting impressions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-poppins">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 SHUBHDHRISHTI ENTERTAINMENT. All rights reserved. |{" "}
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
