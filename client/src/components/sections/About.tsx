import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy mb-6 font-poppins">
              Creating Magic Since
              <span className="text-gold"> 2008</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SHUBHDHRISHTI ENTERTAINMENT has been at the forefront of the entertainment industry, delivering exceptional experiences that captivate audiences and create lasting memories. Our journey began with a simple vision: to transform ordinary moments into extraordinary celebrations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we've evolved into a comprehensive entertainment solution provider, specializing in corporate events, private celebrations, cultural programs, and large-scale productions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center p-4 bg-white rounded-lg shadow-md card-hover"
              >
                <Award className="text-3xl text-gold mb-3 mx-auto h-8 w-8" />
                <h4 className="font-semibold text-deep-navy">Award Winning</h4>
                <p className="text-sm text-gray-600">Industry recognized excellence</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center p-4 bg-white rounded-lg shadow-md card-hover"
              >
                <Users className="text-3xl text-gold mb-3 mx-auto h-8 w-8" />
                <h4 className="font-semibold text-deep-navy">Expert Team</h4>
                <p className="text-sm text-gray-600">Professional entertainment specialists</p>
              </motion.div>
            </div>

            <Button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl">
              <ArrowRight className="mr-2 h-5 w-5" />
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
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200"
              alt="SHUBHDHRISHTI ENTERTAINMENT team collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
            >
              <div className="flex items-center">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Award className="text-gold h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-deep-navy">Excellence</h5>
                  <p className="text-sm text-gray-600">Commitment to quality</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
