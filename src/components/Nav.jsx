import React, { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navs = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/#team" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/#footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Change state if user scrolls more than 50px
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 z-[30] left-1/2 -translate-x-1/2  w-[95%] max-w-7xl mx-auto">
      <div
        className={`h-[70px] backdrop-blur-xl rounded-2xl md:rounded-lg px-6 flex items-center justify-between *:
         ${
           isScrolled
             ? "bg-white backdrop-blur-md text-foreground shadow-2xl py-2"
             : " bg-transparent py-4 text-white"
         }
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
            V
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">
            VELOCARGO
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-around gap-2">
          {navs.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.href}
                className="text-sm font-medium  px-5 py-2 hover:bg-foreground/15 rounded-full transition-all"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation (Shadcn Sheet) */}
        <div className="md:hidden z-[100]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    V
                  </div>
                  VELOCARGO
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-12">
                {navs.map((nav, index) => (
                  <a
                    key={index}
                    href={nav.href}
                    className="ml-5 text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                  >
                    {nav.name}
                  </a>
                ))}
                <hr className="my-4 border-border" />
                <Button className=" px-5 w-full h-14 text-lg font-bold rounded-xl bg-primary">
                  Track Shipment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
