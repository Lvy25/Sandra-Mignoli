import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { AuthorSection } from "@/components/AuthorSection";
import { MethodSection } from "@/components/MethodSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <AuthorSection />
      <MethodSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
