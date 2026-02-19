import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  TwitterIcon,
  Linkedin01Icon,
  Mail01Icon,
  CallIcon,
  Location01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="#footer" className="relative w-full overflow-hidden">
      {/* Primary Color Tint Overlay Section */}
      <div className="bg-primary/5 border-t border-border pt-20 pb-10">
        <div className="cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                V
              </div>
              VELOCARGO
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Redefining global logistics through AI-driven precision and
              unmatched velocity across sea, air, and land.
            </p>
            <div className="flex gap-4">
              {[Facebook01Icon, InstagramIcon, TwitterIcon, Linkedin01Icon].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white transition-all"
                  >
                    <HugeiconsIcon icon={Icon} size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Column 2: Quick Menu */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[11px] text-primary">
              Menu
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Live Tracking",
                "Solutions",
                "Services",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center group"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[11px] text-primary">
              Office
            </h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={20}
                  className="text-primary shrink-0"
                />
                2710 N Fairfield Rd, Beavercreek, Ohio 45431, United States
              </p>
              <p className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={CallIcon}
                  size={20}
                  className="text-primary shrink-0"
                />
                +1 (234) 567-890
              </p>
              <p className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={20}
                  className="text-primary shrink-0"
                />
                connect@velocargo.com
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[11px] text-primary">
              Newsletter
            </h4>
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground">
                Subscribe to get latest updates and news.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white border border-border rounded-lg h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 bg-primary hover:bg-primary/90"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="cont border-t border-border mt-20 pt-10 pb-4 text-center">
          <a
            href="https://oyenekanemmanuel.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted-foreground/60 uppercase tracking-[0.2em]"
          >
            © {new Date().getFullYear()} Elite DEVELOPER Inc. All Rights
            Reserved.
          </a>
        </div>
      </div>

      {/* The Hero Style Footer Image */}
      <div className="relative h-[400px] w-full">
        {/* Gradient Transition from content to image */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent z-10 h-20" />

        {/* Primary Color Tint Overlay on Image */}
        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />

        <img
          src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2000&auto=format&fit=crop"
          alt="Cargo Ship at Sea"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
      </div>
    </footer>
  );
};

export default Footer;
