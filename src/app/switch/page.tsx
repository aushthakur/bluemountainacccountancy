import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { CheckCircle, ArrowRight, Clock, AlertTriangle } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Book Your Free Consultation',
    duration: 'Day 1',
    desc: 'Schedule a free, no-obligation call with one of our senior accountants. We\'ll review your current accounting arrangements, understand your business needs, and confirm we\'re the right fit for you.',
  },
  {
    step: '02',
    title: 'We Contact Your Previous Accountant',
    duration: 'Days 1–2',
    desc: 'Once you give us the go-ahead, we take over completely. We contact your previous accountant to request all books, records, and working papers. Professional courtesy rules mean they must cooperate.',
  },
  {
    step: '03',
    title: 'HMRC Agent Authorisation Updated',
    duration: 'Days 2–3',
    desc: 'We update your HMRC agent authorisation using our digital portal. This gives us the authority to correspond with HMRC on your behalf and access your tax records — no disruption to you.',
  },
  {
    step: '04',
    title: 'Cloud Accounting Setup',
    duration: 'Days 3–5',
    desc: 'We set up or migrate your cloud accounting software (Xero, QuickBooks, or FreeAgent), connect your bank feeds, and ensure all historical data is accurately imported.',
  },
  {
    step: '05',
    title: 'Meet Your Dedicated Account Manager',
    duration: 'Day 5',
    desc: 'You\'ll be introduced to your named, qualified account manager who will be your primary point of contact going forward. They\'ll walk you through your new onboarding pack and answer any questions.',
  },
  {
    step: '06',
    title: 'Ongoing Proactive Service Begins',
    duration: 'Day 5+',
    desc: 'From this point, we\'re actively managing your finances. You\'ll receive proactive updates, quarterly tax planning check-ins, and access to our client portal for all your documents.',
  },
];

const reasons = [
  { title: 'You feel like just a number', desc: 'If you struggle to get hold of your accountant or never hear from them proactively, you deserve better.' },
  { title: 'You\'re not getting proactive tax advice', desc: 'A good accountant shouldn\'t just file your returns — they should be looking for year-round tax savings.' },
  { title: 'Surprise bills and unclear fees', desc: 'You should know exactly what you\'re paying before any work begins. Fixed fees give you certainty.' },
  { title: 'They\'re not using cloud software', desc: 'MTD is already here for VAT and is expanding. Your accountant must be cloud-first or you risk falling behind.' },
  { title: 'Missed deadlines or errors', desc: 'Penalties, late filings, and incorrect returns are signs of poor service and can cost you significantly.' },
  { title: 'No specialist expertise', desc: 'Whether you need R&D credits, property tax advice, or complex payroll, you need a firm with the right specialists.' },
];

export default function SwitchPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Switch Accountants in 5 Days — Zero Hassle"
          subtitle="Changing accountants is easier than you think. Our dedicated switching team handles everything, including contacting your current accountant and updating HMRC. You don't have to lift a finger."
          category="Switch Accountant"
        />

        {/* Warning signs */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 border border-amber-200 px-4 py-2 text-sm font-semibold mb-6">
                <AlertTriangle size={16} /> Warning Signs You Need to Switch
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">Is Your Current Accountant Letting You Down?</h2>
              <p className="text-text-secondary">If any of these sound familiar, it's time for a change.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map(r => (
                <div key={r.title} className="bg-white border border-border-light p-8 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-red-100 flex items-center justify-center mb-4">
                    <AlertTriangle size={20} className="text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{r.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Switch Process */}
        <section className="py-20 bg-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">How the Switch Works</h2>
              <p className="text-text-secondary max-w-xl mx-auto">We've perfected our switching process to be completely seamless. Here's exactly what happens when you join Blue Mountain.</p>
            </div>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-8 items-start p-8 border border-border-light hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-black text-primary/15 w-16 flex-shrink-0 leading-none">{s.step}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                      <span className="flex items-center gap-1 text-xs text-accent font-semibold bg-accent/10 px-2 py-0.5">
                        <Clock size={11} /> {s.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-20 bg-primary">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-white mb-4">Our Switch Guarantees</h2>
              <p className="text-white/70">We stand behind every promise we make to our clients.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '5-Day Onboarding', desc: 'We guarantee full onboarding within 5 business days of you signing your engagement letter.' },
                { title: 'Zero Disruption', desc: 'Your business operations continue without interruption. We handle everything in the background.' },
                { title: 'No Double Billing', desc: 'We coordinate directly with your previous accountant to ensure you don\'t pay for overlapping services.' },
                { title: 'We Handle HMRC', desc: 'All HMRC agent authorisations are updated seamlessly. No forms for you to complete.' },
                { title: 'Data Fully Transferred', desc: 'All your historical accounts, records, and data are migrated and preserved accurately.' },
                { title: '30-Day Peace of Mind', desc: 'If you\'re not completely satisfied within your first 30 days, we\'ll refund your first month\'s fee, no questions asked.' },
              ].map(g => (
                <div key={g.title} className="bg-white/10 border border-white/20 p-8">
                  <CheckCircle size={28} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{g.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
