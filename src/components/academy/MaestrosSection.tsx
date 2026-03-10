import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const maestros = [
  {
    name: "Prof. Helena Strauss",
    role: "Piano & Chamber Music",
    accolade: "Grammy Lifetime Achievement",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Marcus DeLeon",
    role: "Jazz Saxophone & Composition",
    accolade: "Blue Note Recording Artist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Maestro Takeshi Mori",
    role: "Orchestral Conducting",
    accolade: "Berlin Philharmonic Guest",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Amelia Rosetti",
    role: "Vocal Performance",
    accolade: "La Scala Principal Soprano",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
  },
];

const MaestrosSection = () => (
  <SectionWrapper id="maestros" className="py-24 bg-pitch-light">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Our Faculty
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        World-Renowned <span className="italic text-gold">Maestros</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {maestros.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/5]">
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <h3 className="font-display text-xl text-foreground">{m.name}</h3>
            <p className="font-body text-sm text-gold mt-1">{m.role}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{m.accolade}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default MaestrosSection;
