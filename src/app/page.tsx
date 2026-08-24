import { HeroSection } from "@/components/sections/hero";
import { TreatmentsSection } from "@/components/sections/treatments";
import { EmotionalSection } from "@/components/sections/emotional-section";
import { AboutDoctorSection } from "@/components/sections/about-doctor";
import { ResultsSection } from "@/components/sections/results";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ClinicSection } from "@/components/sections/clinic";
import { ProcedureSection } from "@/components/sections/procedure";
import { ProcessSection } from "@/components/sections/process";
import { FAQSection } from "@/components/sections/faq";
import { LocationSection } from "@/components/sections/location";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TreatmentsSection />
      <EmotionalSection />
      <AboutDoctorSection />
      <ResultsSection />
      <TestimonialsSection />
      <ClinicSection />
      <ProcedureSection />
      <ProcessSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
}
