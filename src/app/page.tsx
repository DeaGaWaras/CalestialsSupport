import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects"; 
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ExcessSection } from "@/sections/Excess";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <ExcessSection />
      <ContactSection />
      <Footer />  
    </div>
  );
}
