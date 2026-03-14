import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import MarketStrip from "@/components/MarketStrip";
import OpportunitySection from "@/components/OpportunitySection";
import FrameworkSection from "@/components/FrameworkSection";
import InsightsSection from "@/components/InsightsSection";
import EducationSection from "@/components/EducationSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <MarketStrip />
      <OpportunitySection />
      <FrameworkSection />
      <InsightsSection />
      <EducationSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
