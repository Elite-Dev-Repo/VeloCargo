import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  PackageIcon, // Corrected Free Icon
  Route01Icon, // Corrected Free Icon
  ShippingTruck02Icon, // Corrected Free Icon
  Location01Icon, // Corrected Free Icon
  TickDouble02Icon, // Corrected Free Icon
  ShieldBlockchainIcon,
  WarehouseIcon,
  PassportIcon,
  CustomerServiceIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Services = () => {
  const processes = [
    {
      id: "01",
      title: "Order Placement",
      desc: "Digital portal entry with automated cargo dimensions validation.",
      icon: PackageIcon,
    },
    {
      id: "02",
      title: "Route Planning",
      desc: "AI-driven selection of the fastest/cheapest transit corridors.",
      icon: Route01Icon,
    },
    {
      id: "03",
      title: "Transportation",
      desc: "Multi-modal loading with specialized handling for fragile goods.",
      icon: ShippingTruck02Icon,
    },
    {
      id: "04",
      title: "Tracking",
      desc: "Real-time telemetry and milestone updates via our Command Center.",
      icon: Location01Icon,
    },
    {
      id: "05",
      title: "Delivery",
      desc: "Verified hand-off with digital proof of delivery (ePOD).",
      icon: TickDouble02Icon,
    },
  ];

  const extraServices = [
    {
      title: "Cargo Insurance",
      desc: "Full-value protection for your goods against transit risks, backed by global underwriters.",
      icon: ShieldBlockchainIcon,
    },
    {
      title: "Smart Warehousing",
      desc: "Strategically located distribution centers with automated inventory management.",
      icon: WarehouseIcon,
    },
    {
      title: "Customs Brokerage",
      desc: "Hassle-free international shipping with our in-house compliance and documentation experts.",
      icon: PassportIcon,
    },
    {
      title: "24/7 Support",
      desc: "Dedicated logistics coordinators available around the clock for global coordination.",
      icon: CustomerServiceIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* 1. Hero Section */}
      <section className="bg-primary pt-32 pb-24 rounded-b-[4rem] relative overflow-hidden">
        <div className="cont relative z-10">
          <div className="max-w-3xl space-y-6">
            <h4 className="text-white/60 font-bold uppercase tracking-[0.3em] text-xs">
              Our Capabilities
            </h4>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Modern Logistics <br />
              <span className="opacity-90 font-light">Without Limits.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Process Section - The 5 Steps */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="cont relative z-10">
          {/* Header Section with Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                Operational Excellence
              </div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
                The VeloCargo <br />
                <span className="text-primary italic">Flow.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/20 pl-6">
                Our standardized 5-step process leverages proprietary AI to
                ensure consistency and unprecedented speed for every global
                shipment.
              </p>
            </div>
          </div>

          {/* The Grid Steps */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {processes.map((step, idx) => (
              <div
                key={idx}
                className={`
            group relative p-8 rounded-[2rem] border border-border bg-background/50 backdrop-blur-sm 
            hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] 
            transition-all duration-500
            ${idx < 2 ? "md:col-span-3 lg:col-span-6 h-[300px]" : "md:col-span-2 lg:col-span-4 h-[280px]"}
          `}
              >
                {/* Large Watermark Number */}
                <span className="absolute top-4 right-8 text-8xl font-black text-foreground/[0.03] group-hover:text-primary/[0.05] transition-colors duration-500">
                  {step.id}
                </span>

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                    <HugeiconsIcon icon={step.icon} size={28} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-[40%] transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Extra Services Section */}
      <section className="py-24 bg-foreground/[0.02] border-y border-border">
        <div className="cont grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Value-Added Services <br />
              <span className="text-primary">Beyond Transport.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Logistics is more than just moving boxes. We provide the
              infrastructure and protection your business needs to scale
              internationally.
            </p>
            <Button
              size="lg"
              className="rounded-xl h-16 px-10 bg-foreground text-background font-bold"
            >
              View Technical Specs
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {extraServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <HugeiconsIcon icon={service.icon} size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Assurance / Trust Metrics */}
      <section className="py-24 bg-background">
        <div className="cont bg-primary/5 rounded-[3rem] p-12 md:p-20 border border-primary/10">
          <div className="max-w-2xl space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">
              Enterprise Compliance
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Our digital infrastructure is ISO 27001 certified, and our
              physical fleet complies with all international environmental and
              safety regulations.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">99.9%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                  SLA Up-time
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-primary">0.02%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                  Incident Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
