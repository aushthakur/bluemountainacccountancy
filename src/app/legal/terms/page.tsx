import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Terms & Conditions"
          subtitle="The standard terms and conditions governing the provision of accounting, tax, payroll and advisory services by Blue Mountain Accountants Ltd."
          category="Legal"
        />

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-section-bg border border-border-light p-6 mb-10 text-sm text-text-secondary">
              <strong className="text-text-main">Version 3.1 — Effective 1 January 2025.</strong> These Terms apply to all engagements entered into after this date. Blue Mountain Accountants Ltd is a company registered in England and Wales (Company No. 12345678) and is regulated by the ICAEW.
            </div>

            <div className="space-y-12">
              {[
                {
                  title: '1. Definitions and Interpretation',
                  content: `In these Terms and Conditions:\n\n"Client" means the individual, partnership, company, or other entity that has engaged Blue Mountain Accountants Ltd.\n"Services" means the accounting, tax, payroll, advisory or other professional services described in the Engagement Letter.\n"Engagement Letter" means the letter or proposal that sets out the specific scope of Services to be provided.\n"Fees" means the charges for the Services as set out in the Engagement Letter or as otherwise agreed.\n"We/Us/Our" refers to Blue Mountain Accountants Ltd.`
                },
                {
                  title: '2. Basis of Engagement',
                  content: `2.1 These Terms form part of our contract with you. By signing an Engagement Letter or using our Services, you agree to be bound by these Terms.\n\n2.2 If there is any conflict between these Terms and the Engagement Letter, the Engagement Letter shall prevail.\n\n2.3 We accept instructions only from you or authorised representatives of your business. We are not responsible for acting on instructions from unauthorised third parties.`
                },
                {
                  title: '3. Our Obligations',
                  content: `3.1 We will provide the Services with reasonable care, skill, and diligence in accordance with applicable professional standards.\n\n3.2 We will assign a dedicated account manager to your account and ensure continuity of service.\n\n3.3 We will notify you promptly of any material changes to tax law or HMRC regulations that may affect your affairs.\n\n3.4 All staff involved in providing Services are appropriately qualified and subject to ongoing professional development requirements.`
                },
                {
                  title: '4. Your Obligations',
                  content: `4.1 You must provide us with accurate, complete, and timely information as requested. Delays in providing information may result in missed deadlines and penalties for which we accept no responsibility.\n\n4.2 You are responsible for reviewing and approving all documents, returns, and accounts before we submit them on your behalf.\n\n4.3 You must inform us immediately of any changes to your circumstances that may affect your tax position, including changes in income, new business activities, or significant asset acquisitions or disposals.`
                },
                {
                  title: '5. Fees and Payment',
                  content: `5.1 Our fees are as set out in the Engagement Letter. Fixed monthly fees are payable by Direct Debit on the first working day of each month.\n\n5.2 All fees are subject to VAT at the prevailing rate unless specifically exempt.\n\n5.3 We reserve the right to increase our fees annually in line with the Consumer Price Index (CPI) with 60 days\' written notice.\n\n5.4 Work falling outside the agreed scope will be quoted separately before commencement.\n\n5.5 Invoices not paid within 30 days may incur interest at 8% above the Bank of England base rate under the Late Payment of Commercial Debts Act 1998.`
                },
                {
                  title: '6. Limitation of Liability',
                  content: `6.1 Our total aggregate liability to you in any 12-month period shall not exceed the total fees paid by you to us in that period.\n\n6.2 We are not liable for any indirect, special, or consequential losses, including loss of profits or loss of business opportunity.\n\n6.3 We are covered by Professional Indemnity Insurance in excess of £5,000,000. Details are available upon request.`
                },
                {
                  title: '7. Termination',
                  content: `7.1 Either party may terminate this engagement by giving 30 days\' written notice.\n\n7.2 We may terminate immediately if you fail to pay undisputed fees, provide false information, or require us to act illegally or unethically.\n\n7.3 Upon termination, we will issue a closing fee invoice for all work completed to date. We will cooperate with any incoming accountant as required by ICAEW professional standards.`
                },
                {
                  title: '8. Governing Law',
                  content: `These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales. We are committed to resolving disputes through our formal complaints procedure before any court action is pursued.`
                }
              ].map(s => (
                <div key={s.title} className="border-b border-border-light pb-10 last:border-none">
                  <h2 className="text-2xl font-bold text-primary mb-5">{s.title}</h2>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">{s.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
