import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import concertHall from "@/assets/concert-hall.jpg";

const ConcertHallSection = () => {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.img
        src={concertHall}
        alt="Magnificent concert hall interior"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Our <span className="italic text-gold">Stage</span> Awaits
          </h2>
          <p className="font-body text-muted-foreground text-lg tracking-wider">
            1,200-seat concert hall with world-class acoustics
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConcertHallSection;
