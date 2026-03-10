import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Faculty", href: "#maestros" },
  { label: "Admissions", href: "#audition" },
  { label: "Performances", href: "#performances" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Music className="w-7 h-7 text-gold" />
          <span className="font-display text-xl tracking-wider text-foreground group-hover:text-gold transition-colors duration-500">
            ELITE ACADEMY
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audition"
            className="ml-4 px-6 py-2 border border-gold text-gold text-sm tracking-widest uppercase font-body hover:bg-gold hover:text-background transition-all duration-500 magnetic-btn"
          >
            Schedule Audition
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#audition"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 border border-gold text-gold text-sm tracking-widest uppercase text-center hover:bg-gold hover:text-background transition-all"
              >
                Schedule Audition
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
