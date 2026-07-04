import {
  CTASection,
  FeaturesSection,
  Footer,
  HeroSection,
  HowItWorksSection,
  Navbar,
} from "@/features/landing";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-poli-background text-poli-text">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}