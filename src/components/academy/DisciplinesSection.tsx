import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Music2, Headphones, Mic2 } from "lucide-react";

const disciplines = [
  {
    icon: Music2,
    title: "Classical",
    desc: "From Baroque to Romantic, master the timeless traditions that define Western art music.",
  },
  {
    icon: Headphones,
    title: "Jazz",
    desc: "Explore improvisation, swing, and the rich harmonic vocabulary of jazz tradition.",
  },
  {
    icon: Mic2,
    title: "Contemporary",
    desc: "Push boundaries with experimental composition, electronic music, and cross-genre fusion.",
  },
];

const DisciplinesSection = () => (
  <SectionWrapper className="py-24 bg-pitch-light">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Our Disciplines
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        Three Pillars of <span className="italic text-gold">Mastery</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {disciplines.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group p-8 border border-border hover:border-gold/30 bg-card transition-all duration-700"
          >
            <d.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="font-display text-2xl text-foreground mb-3">{d.title}</h3>
            <p className="font-body text-muted-foreground font-light leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default DisciplinesSection;
