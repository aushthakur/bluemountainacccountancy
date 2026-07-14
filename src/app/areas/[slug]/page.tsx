import { notFound } from 'next/navigation';
import { locationsContent } from '@/lib/content/locations';
import { PageHero } from '@/components/layout/PageHero';
import { RichContentBlock } from '@/components/ui/RichContentBlock';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Testimonials } from '@/components/sections/Testimonials';

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = locationsContent[slug as keyof typeof locationsContent];

  if (!content) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero 
          title={`Chartered Accountants in ${content.name}`} 
          subtitle={content.subtitle} 
          category="Local Expertise" 
        />
        <RichContentBlock sections={content.sections} />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
