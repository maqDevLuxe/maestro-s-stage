import Navbar from "@/components/academy/Navbar";
import HeroSection from "@/components/academy/HeroSection";
import PartnersSection from "@/components/academy/PartnersSection";
import DisciplinesSection from "@/components/academy/DisciplinesSection";
import CurriculumSection from "@/components/academy/CurriculumSection";
import AuditionMetricsSection from "@/components/academy/AuditionMetricsSection";
import MasterclassSection from "@/components/academy/MasterclassSection";
import MaestrosSection from "@/components/academy/MaestrosSection";
import ConcertHallSection from "@/components/academy/ConcertHallSection";
import AwardsSection from "@/components/academy/AwardsSection";
import PerformancesSection from "@/components/academy/PerformancesSection";
import ScholarshipSection from "@/components/academy/ScholarshipSection";
import TestimonialsSection from "@/components/academy/TestimonialsSection";
import AuditionCTASection from "@/components/academy/AuditionCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <DisciplinesSection />
      <CurriculumSection />
      <AuditionMetricsSection />
      <MasterclassSection />
      <MaestrosSection />
      <ConcertHallSection />
      <AwardsSection />
      <PerformancesSection />
      <ScholarshipSection />
      <TestimonialsSection />
      <AuditionCTASection />
    </div>
  );
};

export default Index;
