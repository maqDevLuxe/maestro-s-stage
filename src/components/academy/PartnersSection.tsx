import SectionWrapper from "./SectionWrapper";

const partners = [
  "Royal Academy of Music",
  "Juilliard School",
  "Vienna Conservatory",
  "Berklee College",
  "Paris Conservatoire",
  "Curtis Institute",
];

const PartnersSection = () => (
  <SectionWrapper className="py-20 border-b border-border">
    <div className="container mx-auto px-6">
      <p className="text-center font-body text-xs tracking-[0.5em] uppercase text-muted-foreground mb-12">
        Prestigious Conservatoire Partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {partners.map((name) => (
          <span
            key={name}
            className="font-display text-lg md:text-xl text-muted-foreground/40 hover:text-gold transition-colors duration-700 cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default PartnersSection;
