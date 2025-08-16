import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const portfolioItems = [
  {
    title: "Corporate Annual Gala",
    category: "Corporate Event",
    year: "2023",
    description: "A spectacular corporate celebration featuring elegant decor, live entertainment, and seamless event management.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Luxury Wedding Celebration",
    category: "Private Event",
    year: "2023",
    description: "An enchanting wedding celebration with magical ambiance, live music, and personalized entertainment experiences.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Cultural Festival Showcase",
    category: "Cultural Event",
    year: "2023",
    description: "A vibrant cultural celebration featuring traditional performances, music, and authentic cultural experiences.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Product Launch Spectacular",
    category: "Corporate Event",
    year: "2024",
    description: "A high-energy product launch event with cutting-edge AV production and engaging entertainment elements.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Live Concert Experience",
    category: "Live Performance",
    year: "2024",
    description: "An electrifying live concert featuring top artists with world-class sound and lighting production.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Anniversary Celebration",
    category: "Private Event",
    year: "2024",
    description: "A heartwarming anniversary celebration with personalized entertainment and memorable moments for the family.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 gradient-gold rounded-full blur-3xl"></div>
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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed"
          >
            Explore some of our most memorable projects and events that showcase our creativity, expertise, and commitment to excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h4 className="text-2xl lg:text-3xl font-bold mb-3 font-inter heading-secondary">{item.title}</h4>
                    <p className="mb-6 opacity-90 font-poppins">{item.category}</p>
                    <Button className="glass-button text-white px-8 py-3 rounded-full font-semibold font-inter">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl lg:text-2xl font-bold text-deep-navy mb-3 font-inter heading-secondary">{item.title}</h4>
                <p className="text-gray-600 mb-6 font-poppins leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="gradient-text font-bold font-inter">{item.category}</span>
                  <span className="text-sm text-gray-500 font-poppins">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button className="glass-button text-white px-10 py-4 rounded-full font-semibold text-lg font-inter">
            <Eye className="mr-3 h-6 w-6" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
