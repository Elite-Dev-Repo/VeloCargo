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
import TransportRoutes from "./components/TransportRoutes";
import HowWeWork from "./components/HowWeWork";
import Progress from "./components/Progress";
import Download from "./components/Download";
import Team from "./components/Team";
import { motion } from "framer-motion";
import velo from "@/assets/velo.jpg";
import { KeyRound, Lock } from "lucide-react";

function App() {
  return (
    <>
      <Nav />
      <header className="bg-primary h-screen w-screen  rounded-b-[5em] relative">
        <img
          src={velo}
          alt="Cargo Ship at Sea"
          className="w-full h-full absolute inset-0 z-1 object-cover grayscale-[0.2]"
        />
        <section className=" w-full h-full absolute z-2  bg-foreground/20">
          <div className=" cont w-full h-full flex flex-col lg:flex-row lg:items-end pb-6 justify-center gap-2 max-md:items-center">
            <div className="flex-1 backdrop-blur-[1px] w-full flex flex-col gap-3 items-start max-sm:items-center justify-center  ">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-6 py-1.5 w-fit rounded-full bg-background/15 border border-background/10 text-background text-[13px] font-light uppercase tracking-wide backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
                </span>
                <span>Real-time tracking now live</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-medium text-background tracking-tight leading-[1.1]"
              >
                Global Logistics <br />
                <span className="text-background font-light"> -Redefined.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-background text-md md:text-md max-sm:text-center max-w-lg leading-relaxed"
              >
                Experience the next generation of cargo management. From ocean
                to air, VeloCargo delivers with unprecedented speed and
                AI-driven precision.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-foreground hover:text-foreground hover:bg-background text-white rounded-lg px-8 py-4"
                >
                  Start Shipping
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    className="ml-2"
                    size={20}
                  />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-100 max-sm:hidden bg-white h-70 backdrop-blur-[5px] rounded-lg"
            >
              <div className="">
                {" "}
                <div className="border-b border-border/50 p-4 mb-2">
                  <h3 className="text-center text-xl font-semibold tracking-tight text-foreground">
                    Track your{" "}
                    <span className="text-muted-foreground">package</span>
                  </h3>
                </div>
                <form action="" className="flex flex-col gap-2 px-5 py-5 ">
                  <div className="flex items-center gap-2 text-mono p-3 bg-background rounded-lg font-medium text-foreground backdrop-blur-3xl">
                    <Lock />{" "}
                    <input
                      type="text"
                      placeholder="Input tracking ID"
                      className="flex-1 outline-0"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-mono p-3 bg-background rounded-lg font-medium text-foreground backdrop-blur-3xl">
                    <KeyRound />{" "}
                    <input
                      type="text"
                      placeholder="Account ID"
                      className="flex-1 outline-0"
                    />
                  </div>
                </form>
                <div className="flex items-center gap-2 mt-3 px-4">
                  <button className="flex-1 px-5 py-2 bg-foreground text-background">
                    Track
                  </button>
                  <button className="flex-1 px-5 py-2 bg-primary2 text-foreground">
                    Get Account ID
                  </button>
                </div>
              </div>
            </motion.div>
          </div>{" "}
        </section>
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
