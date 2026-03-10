import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Award, Star, Medal } from "lucide-react";

const awards = [
  { icon: Trophy, value: 342, label: "International Awards" },
  { icon: Award, value: 89, label: "Grammy Nominations" },
  { icon: Star, value: 1200, label: "Concert Debuts" },
  { icon: Medal, value: 67, label: "Competition Gold Medals" },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const steps = 50;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const AwardsSection = () => (
  <SectionWrapper className="py-24">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Excellence Recognized
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        International <span className="italic text-gold">Awards</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {awards.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <a.icon className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="font-display text-4xl md:text-5xl text-foreground">
              <AnimatedCounter target={a.value} />
            </p>
            <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-2">
              {a.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AwardsSection;
