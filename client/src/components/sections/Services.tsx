import { motion } from "framer-motion";
import { Calendar, Music, Video, Handshake, Heart, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Complete event planning and execution services for corporate events, product launches, and special celebrations with meticulous attention to detail."
  },
  {
    icon: Music,
    title: "Live Performances",
    description: "Spectacular live shows featuring talented artists, musicians, dancers, and performers to create unforgettable entertainment experiences."
  },
  {
    icon: Video,
    title: "Production Services",
    description: "Professional audio-visual production, stage design, lighting, and technical support for events of all scales and complexity."
  },
  {
    icon: Handshake,
    title: "Corporate Events",
    description: "Tailored corporate entertainment solutions including conferences, seminars, team building activities, and company celebrations."
  },
  {
    icon: Heart,
    title: "Private Celebrations",
    description: "Intimate and personalized entertainment for weddings, anniversaries, birthday parties, and other special life moments."
  },
  {
    icon: Globe,
    title: "Cultural Programs",
    description: "Authentic cultural shows and traditional performances that celebrate heritage and bring communities together through art and music."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 gradient-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-deep-navy mb-8 font-inter heading-primary"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            From intimate gatherings to grand spectacles, we offer comprehensive entertainment solutions tailored to your unique vision and requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="gradient-gold p-5 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="text-white h-10 w-10" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-deep-navy mb-6 font-inter heading-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 font-poppins leading-relaxed text-lg">
                  {service.description}
                </p>
                <button className="gradient-text font-bold hover:scale-105 transition-all duration-300 group/btn flex items-center font-inter">
                  Learn More 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 gradient-gold rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 gradient-primary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
