import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Music, Mail, Phone, MapPin } from "lucide-react";

const AuditionCTASection = () => (
  <>
    <SectionWrapper id="audition" className="py-24 bg-burgundy-dark relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gold/5" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gold/5" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gold/5" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Schedule Your <span className="italic text-gold">Audition</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto mb-10 font-light">
            The stage is set. Your future in music begins with a single audition.
            Applications for the 2026–2027 season are now open.
          </p>
          <a
            href="#"
            className="inline-block px-12 py-5 bg-gold text-background font-body text-sm tracking-widest uppercase font-bold hover:shadow-[0_0_60px_hsl(43_60%_50%/0.4)] transition-all duration-700"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </SectionWrapper>

    {/* Footer */}
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Music className="w-6 h-6 text-gold" />
              <span className="font-display text-lg tracking-wider">ELITE ACADEMY</span>
            </div>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
              Shaping the world's most celebrated musicians since 1892.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-wider text-gold mb-4">Programs</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-gold transition-colors">Classical</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Jazz</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contemporary</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Summer Intensives</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-wider text-gold mb-4">Academy</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#maestros" className="hover:text-gold transition-colors">Faculty</a></li>
              <li><a href="#performances" className="hover:text-gold transition-colors">Performances</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> admissions@eliteacademy.edu</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +43 1 234 5678</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Vienna, Austria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Elite Music & Arts Academy. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-xs text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default AuditionCTASection;
