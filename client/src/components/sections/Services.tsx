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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-deep-navy mb-6 font-poppins"
          >
            Our <span className="text-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-2xl card-hover group"
            >
              <div className="bg-gradient-to-br from-royal-blue to-gold p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4 font-poppins">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-gold font-semibold hover:text-amber transition-colors group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
