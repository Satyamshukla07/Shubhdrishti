import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Events Hosted" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Awards Won" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < value) {
          return prev + Math.ceil(value / 50);
        }
        return value;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="stats-counter">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 gradient-gold rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 gradient-gold rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass text-center p-8 rounded-3xl group"
            >
              <div className="mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg lg:text-xl font-medium text-white/90 font-poppins">
                {stat.label}
              </p>
              
              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-4 h-4 gradient-gold rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
