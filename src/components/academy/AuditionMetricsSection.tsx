import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

const metrics = [
  { value: 97, suffix: "%", label: "Audition Success Rate" },
  { value: 3200, suffix: "+", label: "Active Students" },
  { value: 48, suffix: "", label: "Countries Represented" },
  { value: 156, suffix: "", label: "Orchestra Placements" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AuditionMetricsSection = () => (
  <SectionWrapper className="py-24 bg-burgundy-dark">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Counter target={m.value} suffix={m.suffix} />
            <p className="font-body text-sm tracking-wider uppercase text-foreground/70 mt-3">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AuditionMetricsSection;
