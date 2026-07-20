import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { Statistics } from '@/components/sections/Statistics';
import { Industries } from '@/components/sections/Industries';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Insights } from '@/components/sections/Insights';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-white max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Statistics />
        <Industries />
        <Pricing />
        <Process />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
