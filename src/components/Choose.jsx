import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Clock,
  Headset,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Secure Shipping",
    description:
      "Every package is insured and tracked with end-to-end encryption for your peace of mind.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Lightning Fast",
    description:
      "Our optimized logistics network ensures your delivery arrives 20% faster than industry standards.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Global Reach",
    description:
      "Shipping to over 200 countries with localized customs support and clear documentation.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "Real-time Updates",
    description:
      "Never wonder where your items are with minute-by-minute GPS tracking and notifications.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to solve any logistical hurdles.",
    icon: <Headset className="w-6 h-6 text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "For business users, get deep insights into your shipping costs and delivery efficiency.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
];

const Choose = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Why Choose{" "}
            <span className="text-primary text-blue-600">Our Logistics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We combine cutting-edge technology with reliable hardware to make
            shipping the easiest part of your business.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
