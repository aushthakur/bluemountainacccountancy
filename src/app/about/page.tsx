import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { CheckCircle, Award, Users, Clock, Star, TrendingUp, Shield, Heart } from 'lucide-react';

const team = [
  {
    name: 'Rajan Phuyal',
    role: 'Director & Senior Accountant',
  },
  {
    name: 'Mukesh Kumar',
    role: 'Business Development Manager',
  },
  {
    name: 'Priti Gautam',
    role: 'Payroll Manager',
  },
];

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We act with absolute honesty and transparency in everything we do. No hidden fees, no surprises.' },
  { icon: Star, title: 'Excellence', desc: 'We hold ourselves to the highest professional standards, continually investing in our team\'s expertise.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your success is our success. We genuinely care about the businesses and people we serve.' },
  { icon: TrendingUp, title: 'Proactivity', desc: 'We never wait for year-end. We continuously look for opportunities to save you money and improve your financial position.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="20 Years of Trusted Financial Expertise"
          subtitle="Founded in 2004, Blue Mountain Accountants has grown from a single-office practice in Milton Keynes to one of the UK's most trusted chartered accountancy firms, serving over 5,000 businesses nationwide."
          category="About Us"
        />

        {/* Mission & Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">Our Mission</div>
              <h2 className="text-4xl font-bold text-primary mb-6">We exist to make expert accounting accessible to every UK business.</h2>
              <p className="text-text-secondary leading-relaxed mb-6">For too long, high-quality chartered accountancy has been the preserve of large corporations with deep pockets. We believe every sole trader, start-up, and growing SME deserves the same calibre of strategic financial advice — at a price that makes sense for their business.</p>
              <p className="text-text-secondary leading-relaxed mb-8">That's why we built Blue Mountain: a firm that combines the professional rigour of a top-tier practice with the personal touch of a local adviser who genuinely knows your name, your business, and your goals.</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Years of Experience', value: '20+' },
                  { label: 'Happy Clients', value: '5,000+' },
                  { label: 'Google Rating', value: '4.9★' },
                  { label: 'Client Retention Rate', value: '98%' },
                ].map(s => (
                  <div key={s.label} className="bg-section-bg p-6 border border-border-light">
                    <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-sm text-text-secondary">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Commitments to You</h3>
              {[
                'Fixed, transparent fees agreed upfront — no hourly billing surprises',
                'A named, qualified accountant dedicated to your account',
                'Response to all queries within one business day, guaranteed',
                'Proactive tax-saving advice, not just reactive compliance',
                'Seamless digital processes using Xero, QuickBooks, and FreeAgent',
                'ACCA-regulated for your peace of mind',
              ].map(c => (
                <div key={c} className="flex items-start gap-4 p-4 border border-border-light">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-text-main font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-text-secondary">The principles that guide every decision we make, every piece of advice we give, and every relationship we build.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(v => (
                <div key={v.title} className="bg-white p-8 border border-border-light text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">Meet the Leadership Team</h2>
              <p className="text-text-secondary">Our senior team brings together decades of experience in chartered accountancy, tax advisory, and business finance.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map(member => (
                <div key={member.name} className="flex gap-6 p-8 border border-border-light bg-section-bg">
                  <div className="w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-3">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
