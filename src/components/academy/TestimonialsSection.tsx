import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Academy didn't just teach me technique—it awakened an artistic soul I never knew I possessed.",
    name: "Yuki Tanaka",
    achievement: "Berlin Philharmonic, Principal Violinist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "Every lesson felt like standing at the threshold of something sacred. This place transforms lives.",
    name: "Alessandro Ferrara",
    achievement: "Chopin Competition Gold Medalist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "From my first audition to Carnegie Hall—the Academy made every step of that journey possible.",
    name: "Sophia Chen",
    achievement: "Metropolitan Opera Soloist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper className="py-24 bg-pitch-light">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
        Alumni Voices
      </p>
      <h2 className="text-center font-display text-4xl md:text-5xl text-foreground mb-16">
        Prodigy <span className="italic text-gold">Alumni</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 border border-border bg-card"
          >
            <Quote className="w-8 h-8 text-gold/30 mb-4" />
            <p className="font-body text-foreground/90 italic leading-relaxed mb-6">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-gold">{t.achievement}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
