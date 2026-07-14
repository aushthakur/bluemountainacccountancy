import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Clock, Tag, ArrowRight } from 'lucide-react';

const articles = [
  {
    category: 'Tax Planning',
    readTime: '8 min read',
    title: 'The Complete Guide to Salary vs. Dividends in 2024/25',
    excerpt: 'One of the most common questions we receive from limited company directors is: "What\'s the most tax-efficient way to take money from my company?" The answer depends on multiple factors, but this comprehensive guide will walk you through everything you need to know.',
    topics: ['Dividend allowance', 'PAYE thresholds', 'National Insurance', 'Personal allowance optimisation'],
  },
  {
    category: 'HMRC Updates',
    readTime: '5 min read',
    title: 'Making Tax Digital for Income Tax: What Sole Traders Need to Know',
    excerpt: 'HMRC\'s Making Tax Digital (MTD) programme is expanding to cover Income Tax Self Assessment from April 2026. If you\'re a sole trader or landlord with income over £50,000, you must act now to ensure you\'re ready. Here\'s exactly what\'s changing and how to prepare.',
    topics: ['MTD for ITSA timeline', 'Qualifying income thresholds', 'Software requirements', 'Quarterly reporting'],
  },
  {
    category: 'Business Growth',
    readTime: '10 min read',
    title: 'Should You Incorporate? The Sole Trader vs. Limited Company Decision',
    excerpt: 'Incorporating your business is one of the most significant financial decisions you\'ll make. While a limited company structure can offer significant tax advantages, it also comes with increased administrative responsibilities. We break down the key factors to help you decide.',
    topics: ['Tax efficiency comparison', 'Personal liability', 'National Insurance savings', 'Administrative burden'],
  },
  {
    category: 'Capital Gains Tax',
    readTime: '7 min read',
    title: 'Capital Gains Tax Changes 2024: What Property Investors Must Know',
    excerpt: 'The Autumn Budget 2024 brought significant changes to Capital Gains Tax rates and the 60-day reporting window for property disposals. Property investors and landlords need to understand these changes to avoid unexpected tax bills and penalties.',
    topics: ['New CGT rates', '60-day reporting', 'PPR relief', 'Annual exemption reduction'],
  },
  {
    category: 'R&D Tax Credits',
    readTime: '9 min read',
    title: 'R&D Tax Credits: Is Your Business Missing Out on Thousands?',
    excerpt: 'Research and Development (R&D) tax credits are one of the most generous tax incentives available to UK businesses, yet thousands of companies fail to claim what they\'re entitled to. Many business owners believe R&D credits are only for technology companies — this is a costly misconception.',
    topics: ['SME scheme changes', 'RDEC for larger companies', 'Qualifying activities', 'How to make a claim'],
  },
  {
    category: 'Payroll & Employment',
    readTime: '6 min read',
    title: 'National Living Wage Increases 2025: How to Update Your Payroll',
    excerpt: 'From April 2025, the National Living Wage increased to £12.21 per hour for workers aged 21 and over. We\'ve put together a comprehensive guide to help employers understand the changes, update their payroll systems, and avoid compliance pitfalls.',
    topics: ['New wage rates by age', 'Employer NIC changes', 'Payroll software updates', 'Employee communications'],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Expert Guides & Tax Insights"
          subtitle="Free, practical guides written by our ICAEW-qualified accountants. Stay ahead of HMRC changes and learn how to maximise your tax efficiency."
          category="Blog & Guides"
        />

        {/* Featured Article */}
        <section className="py-20 bg-section-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8">

              {/* Featured */}
              <div className="lg:col-span-7 bg-white border border-border-light p-10 hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1">Featured</span>
                  <span className="text-text-secondary text-xs flex items-center gap-1"><Clock size={12} /> {articles[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">{articles[0].title}</h2>
                <p className="text-text-secondary leading-relaxed mb-6">{articles[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {articles[0].topics.map(t => (
                    <span key={t} className="text-xs bg-section-bg border border-border-light text-text-secondary px-3 py-1">{t}</span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all">
                  Read Full Guide <ArrowRight size={16} />
                </a>
              </div>

              {/* Sidebar articles */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {articles.slice(1, 4).map(a => (
                  <div key={a.title} className="bg-white border border-border-light p-6 hover:shadow-lg transition-shadow group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5">{a.category}</span>
                      <span className="text-text-secondary text-xs flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
                    </div>
                    <h3 className="font-bold text-text-main group-hover:text-primary transition-colors leading-snug">{a.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10">All Guides & Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(a => (
                <div key={a.title} className="border border-border-light hover:shadow-xl transition-shadow group bg-white">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5">
                        <Tag size={11} /> {a.category}
                      </span>
                      <span className="text-text-secondary text-xs flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors mb-3 leading-snug">{a.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">{a.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.topics.slice(0, 2).map(t => (
                        <span key={t} className="text-xs bg-section-bg border border-border-light text-text-secondary px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border-light px-8 py-4">
                    <a href="#" className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Read Article <ArrowRight size={14} />
                    </a>
                  </div>
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
