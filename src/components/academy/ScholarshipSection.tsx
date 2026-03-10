import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Gem, Globe } from "lucide-react";

const scholarships = [
  {
    icon: GraduationCap,
    title: "Merit Scholarship",
    desc: "Full tuition for exceptional talent demonstrated through audition.",
    amount: "Up to $75,000/year",
  },
  {
    icon: Gem,
    title: "Prodigy Fellowship",
    desc: "Exclusive program for musicians under 16 showing extraordinary promise.",
    amount: "Full scholarship + stipend",
  },
  {
    icon: Globe,
    title: "Global Arts Grant",
    desc: "Supporting international students from underrepresented regions.",
    amount: "Up to $50,000/year",
  },
];

const ScholarshipSection = () => (
  <SectionWrapper className="py-24">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Financial Aid
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        Scholarship <span className="italic text-gold">Programs</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {scholarships.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 border border-border hover:border-gold/30 bg-card text-center transition-all duration-500"
          >
            <s.icon className="w-10 h-10 text-gold mx-auto mb-6" />
            <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-muted-foreground font-light mb-4">{s.desc}</p>
            <p className="font-display text-gold text-lg">{s.amount}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ScholarshipSection;
