import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    position: "CEO, Tech Innovations Pvt. Ltd.",
    content: "SHUBHDHRISHTI ENTERTAINMENT transformed our corporate event into an unforgettable experience. Their attention to detail and creative vision exceeded all our expectations. The team's professionalism and dedication made our annual gala a resounding success.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Rajesh Gupta",
    position: "Event Coordinator, Luxury Weddings",
    content: "Working with SHUBHDHRISHTI has been an absolute pleasure. They brought our wedding vision to life with such elegance and grace. Every moment was perfectly orchestrated, and our guests are still talking about the magical atmosphere they created.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Dr. Meera Patel",
    position: "Director, Cultural Heritage Foundation",
    content: "The cultural program organized by SHUBHDHRISHTI was simply outstanding. They seamlessly blended traditional elements with modern presentation, creating an experience that honored our heritage while engaging our contemporary audience. Truly exceptional work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-80 h-80 gradient-gold rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 gradient-gold rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-white rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-8 font-inter heading-primary"
          >
            Client <span className="text-gold">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Hear what our valued clients have to say about their experiences with SHUBHDHRISHTI ENTERTAINMENT
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass text-white p-8 rounded-3xl group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="h-12 w-12 text-gold" />
              </div>

              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-white/90 mb-8 leading-relaxed font-poppins text-lg italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold text-lg font-inter heading-secondary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 font-poppins text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-gold rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute top-8 left-4 w-2 h-2 bg-white/30 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/90 mb-8 font-poppins">
            Ready to create your own success story?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button text-white px-10 py-4 rounded-full font-semibold text-lg font-inter inline-block"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}