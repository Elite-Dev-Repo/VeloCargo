import React from "react";
import truck from "@/assets/truck.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayStoreIcon, AppleIcon } from "@hugeicons/core-free-icons";

const Download = () => {
  return (
    <section className="cont min-h-[50vh] md:h-[80vh] flex items-center justify-center py-20">
      {/* Main Blue Card */}
      <div className="relative w-full bg-primary rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-12 lg:pt-0 shadow-2xl">
        {/* Text Content */}
        <div className="z-10 max-w-lg space-y-3 py-16  text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Download the free <br /> VeloCargo App
          </h3>

          <p className="text-white/70 text-md leading-relaxed max-w-md">
            Get real-time updates and manage your shipments on the go. Available
            now for iOS and Android.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="h-14 px-8 bg-foreground text-background flex items-center gap-3 rounded-xl hover:opacity-90 transition-all font-bold group">
              <HugeiconsIcon icon={PlayStoreIcon} size={24} />
              <div className="text-left leading-none">
                <p className="text-[10px] uppercase opacity-60">Get it on</p>
                <p className="text-lg">Google Play</p>
              </div>
            </button>

            <button className="h-14 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-3 rounded-xl hover:bg-white/20 transition-all font-bold">
              <HugeiconsIcon icon={AppleIcon} size={24} />
              <div className="text-left leading-none">
                <p className="text-[10px] uppercase opacity-60">Download on</p>
                <p className="text-lg">App Store</p>
              </div>
            </button>
          </div>
        </div>

        {/* Truck Image - Handled Responsively */}
        <div className="relative max-md:hidden lg:absolute lg:right-[-5%] lg:bottom-[-2rem] w-full lg:w-[55%] flex justify-center items-end">
          <img
            src="https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="VeloCargo Delivery Truck"
            className="w-full max-w-[600px] lg:max-w-none h-auto object-contain opacity-80 transform transition-transform duration-700 hover:translate-x-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
