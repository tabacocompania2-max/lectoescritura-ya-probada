import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";

import HowItWorks from "@/components/landing/HowItWorks";
import ContentSection from "@/components/landing/ContentSection";
import LevelsSection from "@/components/landing/LevelsSection";
import BonusSection from "@/components/landing/BonusSection";
import VideoSection from "@/components/landing/VideoSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => (
  <main className="min-h-screen bg-background">
    <TopBar />
    <HeroSection />
    <ProblemSection />
    
    <HowItWorks />
    <ContentSection />
    <BonusSection />
    <VideoSection />
    <LevelsSection />
    <TestimonialsSection />
    
    <GuaranteeSection />
    <PricingSection />
    <FAQSection />
    <FinalCTA />
  </main>
);

export default Index;
