import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Calendar, Clock, MapPin } from "lucide-react";

const workshops = [
  {
    title: "The Art of Interpretation",
    instructor: "Prof. Helena Strauss",
    date: "March 15, 2026",
    time: "10:00 AM – 4:00 PM",
    location: "Grand Recital Hall",
  },
  {
    title: "Jazz Improvisation Intensive",
    instructor: "Marcus DeLeon",
    date: "April 2, 2026",
    time: "2:00 PM – 7:00 PM",
    location: "Studio A",
  },
  {
    title: "Conducting Masterclass",
    instructor: "Maestro Takeshi Mori",
    date: "April 20, 2026",
    time: "9:00 AM – 1:00 PM",
    location: "Orchestra Hall",
  },
];

const MasterclassSection = () => (
  <SectionWrapper className="py-24">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Upcoming
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        Masterclass <span className="italic text-gold">Workshops</span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {workshops.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-border hover:border-gold/30 bg-card transition-all duration-500"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors duration-500">
                {w.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mt-1">with {w.instructor}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-xs font-body tracking-wider">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold" />{w.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" />{w.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold" />{w.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default MasterclassSection;
