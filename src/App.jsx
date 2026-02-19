import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification03Icon,
  ArrowRight02Icon,
  InformationCircleIcon,
  ShipmentTrackingIcon,
  TickDouble02Icon,
  PackageSearchIcon,
  Location05Icon,
  DeliveryTruck02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import hero from "@/assets/hero.png";
import TransportRoutes from "./components/TransportRoutes";
import HowWeWork from "./components/HowWeWork";
import Progress from "./components/Progress";
import Download from "./components/Download";
import Team from "./components/Team";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Nav />
      <header className="bg-primary h-screen max-w-screen mt-[-65px] rounded-b-[5em]">
        <section className=" cont flex items-center justify-between relative  h-full">
          <div className="flex-1 flex flex-col gap-2 max-md:items-center">
            <div className="inline-flex items-center gap-3 px-6 py-1.5 w-fit rounded-full bg-white/15 border border-white/10 text-background text-[13px] font-light uppercase tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
              </span>
              <span>Real-time tracking now live</span>
            </div>
            <h1 className="text-5xl text-start md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
              Global Logistics <br />
              <span className="text-foreground">Redefined.</span>
            </h1>

            <p className="text-background text-md md:text-md max-w-lg leading-relaxed">
              Experience the next generation of cargo management. From ocean to
              air, VeloCargo delivers with unprecedented speed and AI-driven
              precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-foreground hover:bg-background hover:text-foreground text-white rounded-lg px-8 py-4"
              >
                Start Shipping
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  className="ml-2"
                  size={20}
                />
              </Button>
            </div>
          </div>

          <div className="flex-1 w-180 max-md:hidden absolute right-[-10em] top-[60%] -translate-y-1/2">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </section>

        <div className="w-[95%] lg:w-[75%] max-w-5xl absolute bottom-[-5rem] lg:bottom-[-6em] left-1/2 -translate-x-1/2 bg-background shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] border border-border backdrop-blur-xl rounded-2xl overflow-hidden z-20">
          {/* Terminal Header */}
          <div className="bg-foreground/[0.03] border-b border-border px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/30 px-2 border-l border-border ml-2">
                Cargo_Tracking
              </span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <HugeiconsIcon icon={TickDouble02Icon} size={14} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-tighter">
                Verified
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 lg:px-10 space-y-4">
            {/* Animated Truck Track */}
            <div className="relative w-full h-5 overflow-hidden border-b border-dashed border-border/50 mb-2">
              <motion.div
                initial={{ x: "-10%" }}
                animate={{ x: "110%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0"
              >
                <HugeiconsIcon
                  icon={DeliveryTruck02Icon}
                  size={24}
                  className="text-primary/60"
                />
              </motion.div>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center text-foreground/30">
                <HugeiconsIcon icon={PackageSearchIcon} size={22} />
              </div>

              <Input
                placeholder="Enter tracking number (e.g., VC-8829-XQL)"
                className="h-12 pl-12 pr-16 bg-foreground/[0.02] border-border rounded-xl text-lg font-mono focus-visible:ring-primary transition-all"
              />

              <div className="absolute inset-y-2 right-2 flex items-center">
                <Button
                  size="icon"
                  className="h-12 w-12 bg-foreground text-background hover:bg-foreground/90 rounded-lg"
                >
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    size={20}
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <TransportRoutes />
      <HowWeWork />
      <Progress />
      <Team />
      <Download />
      <Footer />
    </>
  );
}

export default App;
