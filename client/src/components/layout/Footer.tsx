import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    "Event Management",
    "Corporate Events",
    "Wedding Planning",
    "Cultural Programs",
    "Live Performances",
    "Production Services"
  ],
  company: [
    "About Us",
    "Our Team",
    "Portfolio",
    "Testimonials",
    "Careers",
    "Contact"
  ],
  support: [
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
    "FAQ"
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-deep-navy to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 gradient-gold rounded-full blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 py-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-inter heading-secondary">
                SHUBHDHRISHTI
                <br />
                <span className="gradient-text">ENTERTAINMENT</span>
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed font-poppins text-lg">
                Creating unforgettable experiences through innovative entertainment solutions, 
                professional event management, and artistic excellence. Your vision, our expertise.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white/90">
                  <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-poppins">123 Entertainment District, Mumbai, India 400001</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-poppins">+91 12345 67890</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-poppins">hello@shubhdhrishti.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-12 h-12 glass-button rounded-full flex items-center justify-center text-white group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:text-gold transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-inter heading-tertiary">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-gold transition-colors font-poppins hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-inter heading-tertiary">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-gold transition-colors font-poppins hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6 font-inter heading-tertiary">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-gold transition-colors font-poppins hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl mb-12"
        >
          <div className="text-center">
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-inter heading-secondary">
              Stay Updated
            </h4>
            <p className="text-white/80 mb-8 font-poppins text-lg">
              Subscribe to our newsletter for the latest updates, exclusive offers, and event insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-gold font-poppins"
              />
              <button className="glass-button text-white px-8 py-3 rounded-full font-semibold font-inter whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <p className="text-white/70 mb-4 lg:mb-0 font-poppins">
              © {currentYear} SHUBHDHRISHTI ENTERTAINMENT. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-gold transition-colors font-poppins">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors font-poppins">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors font-poppins">Cookie Policy</a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-gold rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
}