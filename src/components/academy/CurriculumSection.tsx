import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const levels = [
  { year: "Year 1–2", title: "Foundation", desc: "Core theory, ear training, and technique fundamentals." },
  { year: "Year 3–4", title: "Specialization", desc: "Deep study in chosen instrument and genre mastery." },
  { year: "Year 5–6", title: "Virtuoso", desc: "Solo performance, composition, and international competition prep." },
  { year: "Year 7+", title: "Artist Diploma", desc: "Professional residency with concert hall debuts worldwide." },
];

const CurriculumSection = () => (
  <SectionWrapper className="py-24">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        The Journey
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        The Virtuoso <span className="italic text-gold">Curriculum</span>
      </h2>
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border" />

        {levels.map((level, i) => (
          <motion.div
            key={level.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
          >
            <div className="hidden md:block flex-1" />
            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gold bg-background flex items-center justify-center shrink-0">
              <span className="font-display text-sm text-gold">{i + 1}</span>
            </div>
            <div className="flex-1">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-1">{level.year}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{level.title}</h3>
              <p className="font-body text-muted-foreground font-light">{level.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default CurriculumSection;
