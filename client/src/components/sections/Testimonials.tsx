import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    text: "SHUBHDHRISHTI ENTERTAINMENT exceeded all our expectations. Their attention to detail and creative vision transformed our corporate event into an unforgettable experience.",
    name: "Rajesh Kumar",
    position: "CEO, Tech Solutions Inc."
  },
  {
    text: "From planning to execution, every aspect was handled with professionalism. Our wedding became a magical celebration that our guests still talk about.",
    name: "Priya Sharma",
    position: "Happy Bride"
  },
  {
    text: "Outstanding creativity and flawless execution. Their team brought our cultural event to life in ways we never imagined possible.",
    name: "Dr. Amit Patel",
    position: "Cultural Society President"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-royal-blue to-deep-navy text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 font-poppins"
          >
            What Our <span className="text-gold">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our valued clients have to say about their experiences with SHUBHDHRISHTI ENTERTAINMENT.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="text-gold flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <User className="text-gold h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold font-poppins">{testimonial.name}</h5>
                  <p className="text-sm opacity-75">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
