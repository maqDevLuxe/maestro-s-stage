import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Play } from "lucide-react";

const performances = [
  {
    title: "Rachmaninoff Piano Concerto No. 2",
    performer: "Elena Vasquez, Piano",
    thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=340&fit=crop",
  },
  {
    title: "Miles Davis Tribute",
    performer: "Academy Jazz Ensemble",
    thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=340&fit=crop",
  },
  {
    title: "Beethoven Symphony No. 9",
    performer: "Academy Symphony Orchestra",
    thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=340&fit=crop",
  },
];

const PerformancesSection = () => (
  <SectionWrapper id="performances" className="py-24 bg-pitch-light">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Video Vault
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        Academy <span className="italic text-gold">Performances</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {performances.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-video mb-4">
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                  <Play className="w-6 h-6 text-gold ml-1" />
                </div>
              </div>
            </div>
            <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors duration-500">
              {p.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{p.performer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default PerformancesSection;
