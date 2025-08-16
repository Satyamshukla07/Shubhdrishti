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
      {/* Content */}
      <div className="parallax-content text-center text-white container-padding max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 font-inter heading-primary"
        >
          Crafting Unforgettable
          <span className="gradient-text block">Entertainment Experiences</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 max-w-4xl mx-auto font-poppins leading-relaxed"
        >
          From spectacular events to mesmerizing performances, we bring your entertainment vision to life with creativity, passion, and professional excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Button className="glass-button text-white px-10 py-6 rounded-full font-semibold text-lg font-inter animate-pulse-glow">
            <Play className="mr-3 h-6 w-6" />
            Explore Our Work
          </Button>
          <Button 
            variant="outline" 
            className="glass border-2 border-white/30 text-white px-10 py-6 rounded-full font-semibold text-lg font-inter hover:glass-card transition-all duration-300"
          >
            <Phone className="mr-3 h-6 w-6" />
            Get Started
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 text-center animate-float" style={{ animationDelay: '0s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-white/80 font-inter">Years Experience</div>
          </div>
          <div className="glass-card p-6 text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-white/80 font-inter">Events Hosted</div>
          </div>
          <div className="glass-card p-6 text-center animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-white/80 font-inter">Happy Clients</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer glass p-4 rounded-full"
        onClick={scrollToAbout}
      >
        <div className="animate-bounce-slow">
          <ChevronDown className="h-8 w-8" />
        </div>
      </motion.div>
    </section>
  );
}
