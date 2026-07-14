import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';

export default function PrivacyPage() {
  const lastUpdated = '1 January 2025';

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Privacy Notice"
          subtitle="How Blue Mountain Accountants Ltd collects, uses, and protects your personal data in accordance with the UK GDPR and Data Protection Act 2018."
          category="Legal"
        />

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-section-bg border border-border-light p-6 mb-10 text-sm text-text-secondary">
              <strong className="text-text-main">Last Updated:</strong> {lastUpdated}. This privacy notice applies to all services provided by Blue Mountain Accountants Ltd (Company No. 12345678), a company registered in England and Wales.
            </div>

            <div className="prose prose-lg max-w-none space-y-12">
              {[
                {
                  title: '1. Who We Are',
                  content: `Blue Mountain Accountants Ltd ("we", "us", "our") is a chartered accountancy firm regulated by the Institute of Chartered Accountants in England and Wales (ICAEW). We are the data controller for personal data you provide to us.\n\nRegistered address: 10 Broad Street, Milton Keynes, MK1 1AB, United Kingdom.\n\nFor all data protection enquiries, please contact our Data Protection Officer at: dpo@bluemountain.co.uk`
                },
                {
                  title: '2. Personal Data We Collect',
                  content: `We collect and process the following categories of personal data:\n\n• Identity Data: Full name, title, date of birth, National Insurance number, UTR number\n• Contact Data: Email address, postal address, telephone numbers\n• Financial Data: Bank account details, income information, tax records, employment records\n• Technical Data: IP address, browser type, cookies (see our Cookie Policy)\n• HMRC Data: Data accessed on your behalf through HMRC's Agent Services\n\nWhere we need to collect personal data by law, or under the terms of a contract, and you fail to provide that data, we may not be able to perform the contract we have with you.`
                },
                {
                  title: '3. How We Use Your Data',
                  content: `We use your personal data for the following purposes:\n\n• Providing accounting, tax, payroll, and advisory services to you\n• Submitting tax returns and other documents to HMRC on your behalf\n• Managing payroll and pension obligations for your employees\n• Complying with our legal and regulatory obligations (including AML regulations)\n• Sending relevant tax updates, deadline reminders, and service updates\n• Improving our services and client experience\n\nThe legal bases for processing are: performance of a contract, compliance with legal obligations, and legitimate interests.`
                },
                {
                  title: '4. Data Sharing',
                  content: `We may share your personal data with:\n\n• HM Revenue & Customs (HMRC): As required to provide our services\n• Companies House: For company secretarial services\n• Cloud software providers: Xero, QuickBooks, FreeAgent (under strict data processing agreements)\n• Our professional indemnity insurers\n• Law enforcement agencies where legally required\n\nWe will never sell your personal data to third parties for marketing purposes.`
                },
                {
                  title: '5. Data Retention',
                  content: `We retain your personal data for as long as necessary to provide our services and comply with our legal obligations:\n\n• Client files: 7 years from the end of the relevant tax year\n• HMRC correspondence: 7 years from date of correspondence\n• Anti-Money Laundering records: 5 years from the end of the business relationship\n• Marketing data: Until you unsubscribe or request deletion`
                },
                {
                  title: '6. Your Rights',
                  content: `Under the UK GDPR, you have the following rights:\n\n• Right of Access: Request a copy of the personal data we hold about you\n• Right to Rectification: Request correction of inaccurate personal data\n• Right to Erasure: Request deletion of your personal data (subject to our legal retention obligations)\n• Right to Restriction: Request that we limit how we process your data\n• Right to Portability: Receive your data in a structured, machine-readable format\n• Right to Object: Object to processing based on legitimate interests\n\nTo exercise any of these rights, please contact us at dpo@bluemountain.co.uk. We will respond within one calendar month. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at www.ico.org.uk.`
                },
                {
                  title: '7. Changes to This Notice',
                  content: `We may update this privacy notice from time to time. We will notify you of significant changes by email and update the "Last Updated" date at the top of this page. We encourage you to review this notice periodically.`
                }
              ].map(section => (
                <div key={section.title} className="border-b border-border-light pb-10 last:border-none">
                  <h2 className="text-2xl font-bold text-primary mb-5">{section.title}</h2>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-section-bg border border-border-light p-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Questions About Your Data?</h3>
              <p className="text-text-secondary mb-4">Contact our Data Protection Officer directly.</p>
              <a href="mailto:dpo@bluemountain.co.uk" className="inline-block bg-primary text-white font-semibold px-8 py-3 hover:bg-secondary transition-colors">
                Email dpo@bluemountain.co.uk
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
