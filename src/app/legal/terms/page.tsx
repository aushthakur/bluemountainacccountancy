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
          subtitle="The standard terms and conditions governing the provision of accounting, tax, payroll and advisory services by Blue Mountain Accountants LTD."
          category="Legal"
        />

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-section-bg border border-border-light p-6 mb-10 text-sm text-text-secondary">
              <strong className="text-text-main">Version 3.1 — Effective 20 July 2026.</strong> These Terms apply to all engagements entered into after this date. Blue Mountain Accountants LTD is a company registered in England and Wales (Company No. 17187187) and is regulated by the ACCA.
            </div>

            <div className="prose prose-lg max-w-none space-y-12">
              {[
                {
                  title: '1. Applicable Law',
                  content: 'Our letter of engagement, service schedules, and these standard terms are governed entirely by the laws of England and Wales. Any disputes, claims, or differences arising from this agreement will be exclusively settled within the jurisdiction of the English and Welsh courts. By agreeing to these terms, both parties waive any right to contest the suitability or jurisdiction of these courts.'
                },
                {
                  title: '2. Client Identification and Verification',
                  content: 'In compliance with UK anti-money laundering regulations, we are legally obligated to verify the identity of all our clients. We will not commence any work on your behalf until these identification checks are fully completed, barring exceptional scenarios. To fulfill this, we may ask you to provide specific documentation or utilize electronic ID verification databases.'
                },
                {
                  title: '3. Client Money',
                  content: 'Any funds we hold on your behalf will be kept strictly separate from our own firm\'s finances. These funds will be securely held in a designated client trust bank account, managed entirely in accordance with the client money rules set forth by the ACCA.'
                },
                {
                  title: '4. Commissions and Other Benefits',
                  content: 'From time to time, we may receive commissions or other benefits when introducing you to third-party professionals or arranging specific transactions on your behalf. Should this occur, we will always provide you with written notification outlining the amounts, terms, and nature of the benefit received.'
                },
                {
                  title: '5. Complaints',
                  content: 'We strive to deliver exceptional, efficient service at all times. However, if you are dissatisfied with any part of our work, please direct your concerns to our Managing Director. We promise to investigate any complaints swiftly and thoroughly in an effort to reach a satisfactory resolution. If you remain dissatisfied with our internal response, you have the right to escalate the matter to our regulatory body, the ACCA.'
                },
                {
                  title: '6. Confidentiality',
                  content: 'All communications and information shared between us are strictly confidential. We will take all necessary precautions to protect your data, disclosing it only when legally required or in accordance with our Privacy Notice. This confidentiality agreement remains in effect both during our engagement and after it concludes, unless you explicitly authorize us to disclose your details. Occasionally, we may use subcontractors to assist with your affairs; they will be bound by identical confidentiality and security obligations.'
                },
                {
                  title: '7. Conflicts of Interest',
                  content: 'If a conflict of interest arises between you and our firm, or between you and another client, we will implement appropriate safeguards to protect your interests. If a conflict cannot be successfully managed, we will promptly inform you that we are unable to continue providing services. We reserve the right to work with other clients whose interests may differ from or oppose yours, provided our strict confidentiality obligations are upheld.'
                },
                {
                  title: '8. Data Protection',
                  content: 'You confirm and acknowledge that our firm will process your data strictly in accordance with our separate Privacy Notice.'
                },
                {
                  title: '9. Disengagement',
                  content: 'If our working relationship ends, whether by your request or our resignation, we will typically provide a formal disengagement letter to outline the final responsibilities of both parties. If we do not hear from you for a period of two months or more, we reserve the right to issue a disengagement letter to your last known address and formally terminate our services. Following termination, we may destroy any of your documents still in our possession after six months if we cannot return them to you, subject to other legal retention requirements.'
                },
                {
                  title: '10. Electronic and Other Communication',
                  content: 'Unless instructed otherwise, we will primarily communicate with you and authorized third parties via email or other digital channels. While we employ virus-scanning software to minimize risks, electronic communications are inherently vulnerable to interception, delayed delivery, or corruption. We accept no liability for any loss, damage, or commercial consequences arising from viruses or electronic transmission errors. These are accepted risks of modern communication; if you prefer hard-copy correspondence, please notify us. Postal correspondence is considered received two working days after dispatch. You must ensure we always have your most current contact information.'
                },
                {
                  title: '11. Fees and Payment Terms',
                  content: 'Our fees reflect the time, skill, responsibility, and risk involved in the work we undertake for you. Any fee estimates provided are not legally binding unless expressly stated in writing. While we may offer fixed fees for certain tasks, these are typically reviewed annually or revised if unforeseen circumstances expand the scope of work. You remain responsible for our invoices, even if you anticipate them being covered by insurance or professional body memberships.\n\nInvoices are issued monthly and must be settled within 7 days. VAT will be added where applicable, along with any necessary out-of-pocket disbursements. We typically ask clients to pay via a monthly direct debit, adjusted periodically based on actual billings. We reserve the right to charge interest on overdue commercial invoices at 8% above the Bank of England base rate, and may suspend our services if payments are excessively delayed. Disputes regarding invoices must be raised within 21 days.'
                },
                {
                  title: '12. Implementation',
                  content: 'We will only help execute or implement the advice we provide if we are specifically instructed and have agreed to do so in writing.'
                },
                {
                  title: '13. Intellectual Property Rights',
                  content: 'Unless specific legislation states otherwise, our firm retains full copyright and intellectual property rights over all documents, reports, and materials prepared during our engagement.'
                },
                {
                  title: '14. Severability',
                  content: 'If any clause within our engagement letter, schedules, or terms is deemed invalid or unenforceable, that specific clause will be struck from the agreement, while the remaining provisions will continue in full effect. In the event of a contradiction between these standard terms and your specific engagement letter, the engagement letter will take precedence.'
                },
                {
                  title: '15. Internal Disputes Within a Client',
                  content: 'Should a dispute arise among the directors, partners, or owners of your business, we will not take sides or provide exclusive information to any single party without mutual consent. We will continue to deliver information to the registered office for the board’s attention. If we receive conflicting instructions, we will pause our services and refer the matter back to the board or partnership until a unified decision is reached.'
                },
                {
                  title: '16. Investment Advice',
                  content: 'As we are not authorized under the Financial Services and Markets Act 2000 to provide investment or insurance advice, we will refer you to an appropriately licensed Financial Conduct Authority (FCA) professional if such guidance is required.'
                },
                {
                  title: '17. Lien',
                  content: 'Where permitted by law and professional guidelines, we reserve the right to retain your funds, documents, and records until all outstanding invoices and disbursements have been settled in full.'
                },
                {
                  title: '18. Limitation of Liability for Non-Audit Work',
                  content: 'By agreeing to our terms, we mutually accept that our total aggregate liability for any claims relating to non-audit professional services—whether for negligence, breach of contract, or breach of duty—is capped at five times the total fee charged for that specific work, unless a court determines this multiple is legally unfair. This cap covers all damages, costs, and interest. This limitation does not apply to acts of fraud, dishonesty, or criminal behavior by our firm or its staff. We accept no liability for indirect or consequential losses.\n\nFurthermore, we will not be held responsible for any penalties, tax liabilities, or losses incurred because you provided incomplete or inaccurate information, or failed to act promptly on our advice or HMRC correspondence. Our advice is provided solely on the basis of the facts presented to us at the time; we take no responsibility for subsequent changes in the law or for oral advice that is not formally confirmed in writing.'
                },
                {
                  title: '19. Limitation of Third-Party Rights',
                  content: 'The professional advice and reports we generate are intended exclusively for your use. We do not accept any duty of care or liability to any third parties who may obtain access to our work, unless explicitly agreed upon in our engagement letter. Furthermore, no third party has the right to enforce any terms of our agreement under the Contracts (Rights of Third Parties) Act 1999.'
                },
                {
                  title: '20. Period of Engagement and Termination',
                  content: 'Our responsibilities commence upon your acceptance of our engagement letter, and we hold no liability for periods prior to this date. Either party may terminate the agreement by providing 21 days\' written notice. However, we may terminate the arrangement immediately if you fail to cooperate or if we suspect you have provided misleading information to us or HMRC. Upon termination, we owe no further duties or obligations beyond the agreed completion date of any in-progress work. Recurring compliance work ceases 21 days after the termination notice is given.'
                },
                {
                  title: '21. Professional Body Rules',
                  content: 'We operate strictly within the ethical guidelines, regulations, and bye-laws of the Association of Chartered Certified Accountants (ACCA). We cannot assist in any tax planning that violates Professional Conduct in Relation to Taxation standards, and we are obligated to follow the general anti-abuse rule. We hold the authority to correct obvious HMRC errors, and you are responsible for immediately informing us of any inaccuracies in your previously submitted tax returns so a voluntary disclosure can be arranged.'
                },
                {
                  title: '22. Reliance on Advice',
                  content: 'We aim to provide all critical advice in a written format. Any oral advice given during meetings or phone calls should not be solely relied upon until it has been formally confirmed in writing. All advice is given based on the laws and circumstances applicable on the exact date it is provided.'
                },
                {
                  title: '23. Retention of Papers',
                  content: 'It is your legal duty to retain all essential tax records. If our working relationship ends, we will attempt to coordinate cloud-accounting access, which may require you to pay software providers directly. Legally, individuals with trading/rental income must retain records for five years and ten months post-tax year, while companies must retain them for six years post-accounting period. While we may return original documents to you upon request, we reserve the right to securely destroy any correspondence or records we hold after seven years.'
                },
                {
                  title: '24. The Provision of Services Regulations 2009',
                  content: 'In compliance with our professional obligations, we maintain comprehensive professional indemnity insurance. Details regarding our insurer and the scope of our coverage are available upon request.'
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
