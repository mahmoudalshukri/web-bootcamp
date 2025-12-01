import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import SyllabusSection from "@/components/SyllabusSection";
import ScheduleSection from "@/components/ScheduleSection";
import InstructorSection from "@/components/InstructorSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <DifferentiatorSection />
      <TargetAudienceSection />
      <SyllabusSection />
      <ScheduleSection />
      <InstructorSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
