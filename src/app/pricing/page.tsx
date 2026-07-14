import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Sole Trader',
    price: '£59',
    period: '/month + VAT',
    highlight: false,
    description: 'Perfect for freelancers and self-employed individuals who want complete compliance without the hassle.',
    includes: [
      'Dedicated account manager',
      'Annual Self Assessment tax return',
      'Quarterly bookkeeping review',
      'HMRC correspondence handling',
      'Unlimited email support',
      'Annual tax planning meeting',
      'Xero accounting software included',
      'MTD-compliant VAT returns (if registered)',
    ],
    excludes: ['Payroll services', 'Company Secretarial', 'Year-end statutory accounts'],
  },
  {
    name: 'Limited Company — Starter',
    price: '£129',
    period: '/month + VAT',
    highlight: false,
    description: 'Ideal for new limited companies or directors with straightforward affairs.',
    includes: [
      'Everything in Sole Trader',
      'Year-end statutory accounts',
      'Corporation Tax return (CT600)',
      'Director\'s Self Assessment return',
      'Dividend vouchers and minutes',
      'Confirmation Statement filing',
      'Payroll for up to 2 directors',
    ],
    excludes: ['Additional employees payroll', 'R&D Tax Credit claims', 'Management accounts'],
  },
  {
    name: 'Limited Company — Growth',
    price: '£249',
    period: '/month + VAT',
    highlight: true,
    description: 'Our most popular package for growing businesses that need strategic financial support.',
    includes: [
      'Everything in Starter',
      'Payroll for up to 10 employees',
      'Monthly management accounts',
      'Quarterly financial review call',
      'Cash flow forecasting',
      'R&D Tax Credit claim assessment',
      'Corporation tax planning strategy',
      'Priority phone and email support',
      'Same-day response guarantee',
    ],
    excludes: [],
  },
  {
    name: 'Enterprise & SME',
    price: 'Bespoke',
    period: 'Contact for pricing',
    highlight: false,
    description: 'Fully tailored accounting and advisory support for complex businesses with multi-entity or specialist needs.',
    includes: [
      'Everything in Growth',
      'Unlimited payroll employees',
      'Virtual CFO services',
      'Group accounting and consolidations',
      'Property portfolio accounting',
      'Due diligence support',
      'Custom reporting dashboards',
      'Dedicated senior partner access',
    ],
    excludes: [],
  },
];

const faqs = [
  {
    q: 'Can I switch to Blue Mountain from my current accountant?',
    a: 'Absolutely. We handle the entire transfer process for you. We will contact your previous accountant to obtain all necessary records, and we liaise with HMRC to update agent authorisation. Most switches are completed within 5 business days with zero disruption to your business.'
  },
  {
    q: 'Are there any setup fees or hidden costs?',
    a: 'No. We believe in complete transparency. The monthly fee you see is the fee you pay. There are no setup fees, no charges for phone calls, and no surprise bills for routine advice. We will always notify you in advance if any additional work falls outside your package scope.'
  },
  {
    q: 'What software do I need?',
    a: 'We provide Xero accounting software as part of all our packages at no additional cost. If you already use QuickBooks, FreeAgent, or Sage, we are happy to work with those too. Our team is certified across all major cloud accounting platforms.'
  },
  {
    q: 'How quickly can you start looking after my business?',
    a: 'We can typically have you fully onboarded within 48-72 hours of signing up. We will set up your cloud accounting software, connect your bank feeds, and introduce you to your dedicated account manager on the same day.'
  },
  {
    q: 'Do I have to commit to a long-term contract?',
    a: 'We offer rolling monthly agreements with just 30 days\' notice required to cancel. We believe our service speaks for itself — which is why 98% of our clients stay with us year after year.'
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Simple, Transparent Pricing"
          subtitle="No hourly billing. No hidden fees. Just fixed monthly packages that scale with your business — and always include a dedicated qualified accountant."
          category="Pricing"
        />

        {/* Pricing Cards */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {plans.map(plan => (
                <div
                  key={plan.name}
                  className={`flex flex-col border ${plan.highlight ? 'border-primary shadow-2xl scale-105 relative' : 'border-border-light bg-white'}`}
                >
                  {plan.highlight && (
                    <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                      ★ Most Popular
                    </div>
                  )}
                  <div className={`p-8 flex-1 flex flex-col ${plan.highlight ? 'bg-white' : ''}`}>
                    <h3 className="text-lg font-bold text-primary mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-text-secondary text-sm ml-1">{plan.period}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 border-b border-border-light pb-6">{plan.description}</p>

                    <div className="space-y-3 flex-1">
                      {plan.includes.map(item => (
                        <div key={item} className="flex items-start gap-3 text-sm">
                          <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-text-main">{item}</span>
                        </div>
                      ))}
                      {plan.excludes.map(item => (
                        <div key={item} className="flex items-start gap-3 text-sm">
                          <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary line-through">{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/#book"
                      className={`mt-8 block text-center py-4 font-semibold transition-colors ${plan.highlight ? 'bg-primary text-white hover:bg-secondary' : 'border border-primary text-primary hover:bg-primary hover:text-white'}`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAT note */}
        <section className="py-8 bg-white border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center text-sm text-text-secondary">
            All prices shown exclude VAT at the standard rate. Prices are based on typical business complexity — we will confirm your exact package after a free consultation.
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-text-secondary">Everything you need to know about our packages and how we work.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border-light p-8">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
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
