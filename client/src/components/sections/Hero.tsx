import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins"
        >
          Crafting Unforgettable
          <span className="text-gold block">Entertainment Experiences</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
        >
          From spectacular events to mesmerizing performances, we bring your entertainment vision to life with creativity, passion, and professional excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl">
            <Play className="mr-2 h-5 w-5" />
            Explore Our Work
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-royal-blue transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="animate-bounce-slow">
          <ChevronDown className="h-8 w-8" />
        </div>
      </motion.div>
    </section>
  );
}
