import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import SocialProof from "@/components/SocialProof";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import ExperienceStrip from "@/components/ExperienceStrip";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <SocialProof />
      <Services />
      <Gallery />
      <TestimonialsMarquee />
      <ExperienceStrip />
      <LocationSection />
      <FinalCTA />
    </div>
  );
}
