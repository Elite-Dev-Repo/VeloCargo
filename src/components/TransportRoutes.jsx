import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function TransportRoutes() {
  const routes = [
    {
      id: 1,
      name: "By Road",
      description:
        "Optimized logistics for local and cross-border trucking, ensuring reliable door-to-door delivery.",
    },
    {
      id: 2,
      name: "By Air",
      description:
        "Priority global shipping for high-value assets and time-critical cargo with real-time monitoring.",
    },
    {
      id: 3,
      name: "By Sea",
      description:
        "Cost-effective international freight solutions for large-scale inventory and global supply chains.",
    },
  ];

  return (
    <section className="bg-background min-h-[80vh] w-full py-24">
      <div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="cont flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24"
      >
        {/* Route Cards List */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-6 w-full lg:flex-1 max-w-xl"
        >
          {routes.map((route) => (
            <div
              key={route.id}
              className="group border-b border-foreground/10 flex items-center gap-6 py-8 transition-all duration-300 hover:border-primary"
            >
              {/* Counter with low opacity */}
              <span className="text-4xl md:text-5xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors duration-300">
                0{route.id}
              </span>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                  {route.name}
                </h3>
                <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
                  {route.description}
                </p>
              </div>

              {/* Icon that rotates on hover */}
              <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Text Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
              Global Network
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
              Solutions for <br className="hidden md:block" />
              Every Delivery <br className="hidden md:block" />
              <span className="text-foreground/30">Challenge.</span>
            </h2>
          </div>

          <p className="text-foreground/60 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
            Our comprehensive transport solutions ensure your goods are
            delivered safely, securely, and on time, no matter the distance or
            complexity of the route.
          </p>

          <a href="/services">
            <Button
              size="lg"
              className="h-16 px-10 bg-primary text-white rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 group"
            >
              Explore Services
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={20}
              />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default TransportRoutes;
