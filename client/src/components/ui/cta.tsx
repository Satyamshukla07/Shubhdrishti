import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-deep-navy to-royal-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-gold rounded-full blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 gradient-gold rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-full h-16 border border-white/10 rounded"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 font-inter heading-primary">
            Ready to Create Something
            <br />
            <span className="text-gold">Extraordinary?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 font-poppins leading-relaxed">
            Let's bring your vision to life with our expertise in entertainment, event management, and creative production. Your perfect event is just one conversation away.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Calendar,
              title: "Book a Consultation",
              description: "Schedule a free consultation to discuss your event requirements and vision.",
              action: "Schedule Now"
            },
            {
              icon: Phone,
              title: "Call Our Experts",
              description: "Speak directly with our event specialists for immediate assistance.",
              action: "Call Today"
            },
            {
              icon: Mail,
              title: "Send Your Ideas",
              description: "Share your event concept and let us create a customized proposal for you.",
              action: "Contact Us"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass text-center text-white p-8 rounded-3xl group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6 group-hover:bg-gold/30 transition-colors">
                <item.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 font-inter heading-secondary">
                {item.title}
              </h3>
              <p className="text-white/90 mb-6 font-poppins leading-relaxed">
                {item.description}
              </p>
              <Button className="glass-button text-white px-6 py-3 rounded-full font-semibold font-inter group-hover:scale-105 transition-transform">
                {item.action}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button text-white px-12 py-4 rounded-full font-bold text-lg font-inter inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </motion.a>
            
            <div className="text-white/70 font-poppins">
              or call us at{" "}
              <a 
                href="tel:+911234567890" 
                className="text-gold font-semibold hover:text-white transition-colors"
              >
                +91 12345 67890
              </a>
            </div>
          </div>
        </motion.div>

        {/* Success Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center glass px-8 py-4 rounded-full">
            <div className="w-3 h-3 bg-gold rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-semibold font-inter">
              100% Satisfaction Guaranteed • Award-Winning Team • 500+ Successful Events
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}