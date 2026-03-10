import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import heroPiano from "@/assets/hero-piano.jpg";

const Particle = ({ delay }: { delay: number }) => {
  const x = Math.random() * 100;
  const duration = 4 + Math.random() * 6;
  const size = 2 + Math.random() * 4;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        bottom: "-5%",
        width: size,
        height: size,
        background: `hsl(43 60% ${50 + Math.random() * 20}% / ${0.3 + Math.random() * 0.4})`,
      }}
      animate={{
        y: [0, -window.innerHeight * 1.2],
        opacity: [0, 1, 0],
        x: [0, (Math.random() - 0.5) * 100],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

const HeroSection = () => {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => i)
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPiano}
          alt="Grand piano on stage under dramatic spotlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-6">
            Est. 1892 · Vienna
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
            Where{" "}
            <span className="italic text-gold text-shadow-gold">Virtuosos</span>
            <br />
            Are Born
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
            A century of shaping the world's most celebrated musicians through
            uncompromising excellence in classical, jazz, and contemporary arts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#audition"
            className="group relative px-10 py-4 bg-gold text-background font-body text-sm tracking-widest uppercase font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_60%_50%/0.3)]"
          >
            <span className="relative z-10">Schedule Your Audition</span>
          </a>
          <a
            href="#performances"
            className="px-10 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-500"
          >
            Watch Performances
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
