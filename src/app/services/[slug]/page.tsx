import { notFound } from 'next/navigation';
import { servicesContent } from '@/lib/content/services';
import { PageHero } from '@/components/layout/PageHero';
import { RichContentBlock } from '@/components/ui/RichContentBlock';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Testimonials } from '@/components/sections/Testimonials';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = servicesContent[slug as keyof typeof servicesContent];

  if (!content) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero 
          title={content.title} 
          subtitle={content.subtitle} 
          category={content.category} 
        />
        <RichContentBlock sections={content.sections} />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
