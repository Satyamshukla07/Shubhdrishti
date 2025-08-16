import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 gradient-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-deep-navy mb-8 font-inter heading-primary">
              Creating Magic Since
              <span className="gradient-text block"> 2008</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 font-poppins leading-relaxed">
              SHUBHDHRISHTI ENTERTAINMENT has been at the forefront of the entertainment industry, delivering exceptional experiences that captivate audiences and create lasting memories. Our journey began with a simple vision: to transform ordinary moments into extraordinary celebrations.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 font-poppins leading-relaxed">
              With over 15 years of experience, we've evolved into a comprehensive entertainment solution provider, specializing in corporate events, private celebrations, cultural programs, and large-scale productions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 text-center"
              >
                <div className="gradient-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white h-8 w-8" />
                </div>
                <h4 className="font-bold text-deep-navy mb-2 font-inter">Award Winning</h4>
                <p className="text-sm text-gray-600 font-poppins">Industry recognized excellence</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 text-center"
              >
                <div className="gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white h-8 w-8" />
                </div>
                <h4 className="font-bold text-deep-navy mb-2 font-inter">Expert Team</h4>
                <p className="text-sm text-gray-600 font-poppins">Professional entertainment specialists</p>
              </motion.div>
            </div>

            <Button className="glass-button text-white px-10 py-4 rounded-full font-semibold text-lg font-inter">
              <ArrowRight className="mr-3 h-5 w-5" />
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200"
                alt="SHUBHDHRISHTI ENTERTAINMENT team collaborating"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 glass-card p-8 max-w-xs animate-float"
            >
              <div className="flex items-center">
                <div className="gradient-gold p-4 rounded-full mr-4">
                  <Award className="text-white h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-deep-navy mb-1 font-inter">Excellence</h5>
                  <p className="text-sm text-gray-600 font-poppins">Commitment to quality</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-primary rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 gradient-gold rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
