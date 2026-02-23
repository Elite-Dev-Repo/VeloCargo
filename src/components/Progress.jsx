import React from "react";
import { motion } from "framer-motion";

function Progress() {
  const stats = [
    { label: "Packages Shipped", value: "10,000+" },
    { label: "Delivery Reduction", value: "30%" },
    { label: "Customer Satisfaction", value: "95%" },
  ];

  const staggerClasses = ["md:-mt-12", "md:mt-0", "md:mt-12"];

  return (
    <section className="min-h-screen w-full relative overflow-hidden flex items-center py-20 md:py-0">
      <div className="absolute inset-0 bg-[url('/src/assets/map.png')] opacity-20 bg-fixed bg-cover bg-center z-0"></div>

      <div className="cont flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 w-full">
        {/* Left/Top Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 max-w-xl text-start bg-background/40 backdrop-blur-2xl border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Logistics Metrics
          </div>
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-6">
            Our Progress
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            We've shipped over 10,000 packages globally in the last quarter
            alone. Our AI-driven logistics platform has reduced delivery times
            by 30% while maintaining industry-leading satisfaction.
          </p>
          <div className="mt-8 h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 w-full lg:w-auto">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className={`
                ${staggerClasses[index]} 
                bg-background border border-border shadow-xl 
                rounded-2xl p-8 text-center min-w-[200px]
                transition-transform hover:scale-105 duration-300
              `}
            >
              <h3 className="text-4xl font-black text-primary mb-1">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Progress;
