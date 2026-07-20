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
          subtitle="How Blue Mountain Accountants LTD collects, uses, and protects your personal data in accordance with the UK GDPR and Data Protection Act 2018."
          category="Legal"
        />

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-section-bg border border-border-light p-6 mb-10 text-sm text-text-secondary">
              <strong className="text-text-main">Last Updated:</strong> {lastUpdated}. This privacy notice applies to all services provided by Blue Mountain Accountants LTD (Company No. 17187187), a company registered in England and Wales.
            </div>

            <div className="prose prose-lg max-w-none space-y-12">
              {[
                {
                  title: '1. Introduction',
                  content: `PRIVACY NOTICE issued by Blue Mountain Accountants LTD - The Data Protection Act 2018 (DPA 2018) and the General Data Protection Regulation (GDPR) impose certain legal obligations in connection with the processing of personal data.\n\nBlue Mountain Accountants LTD is a data controller within the meaning of the GDPR, and we process personal data. The firm’s contact details are as follows: Our address is - Unit C, Common Road, Studham Place, Dunstable, England, LU6 2FU.\n\nOur Data Protection Officer is Rajan Phuyal and can be contacted at info@bluemountain.co.uk.\n\nWe may amend this privacy notice from time to time. If we do so, we will supply you with and/or otherwise make available to you a copy of the amended privacy notice.\n\nWhere we act as a data processor on behalf of a data controller (for example, when processing payroll), we provide an additional schedule setting out required information as part of that agreement. That additional schedule should be read in conjunction with this privacy notice.`
                },
                {
                  title: '2. The purposes for which we intend to process personal data',
                  content: `We intend to process personal data for the following purposes:\n\n• to enable us to supply professional services to you as our client\n• to fulfil our obligations under relevant laws in force from time to time (eg the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 (MLR 2017))\n• to comply with professional obligations to which we are subject as a member of ACCA\n• to use in the investigation and/or defence of potential complaints, disciplinary proceedings and legal proceedings\n• to enable us to invoice you for our services and investigate/address any attendant fee disputes that may have arisen\n• to contact you about other services we provide which may be of interest to you if you have consented to us doing so`
                },
                {
                  title: '3. The legal basis for our intended processing of personal data',
                  content: `Our intended processing of personal data has the following legal bases:\n\n• At the time you instructed us to act, you gave consent to our processing your personal data for the purposes listed above.\n• The processing is necessary for the performance of our contract with you.\n• The processing is necessary for compliance with legal obligations to which we are subject (eg MLR 2017).\n• The processing is necessary for the purposes of the following legitimate interests which we pursue: investigating/defending legal claims, credit card processing.\n\nIt is a requirement of our contract with you that you provide us with the personal data that we request. If you do not provide the information that we request, we may not be able to provide professional services to you. If this is the case, we will not be able to commence acting or will need to cease to act.`
                },
                {
                  title: '4. Persons/organisations to whom we may give personal data',
                  content: `We may share your personal data with:\n\n• Companies House, Charity regulators and HMRC\n• any third parties with whom you require or permit us to correspond\n• subcontractors\n• an alternate appointed by us in the event of incapacity or death\n• professional indemnity insurers\n• our professional body ACCA in relation to practice assurance and/or the requirements of MLR 2017 (or any similar legislation)\n\nIf the law allows or requires us to do so, we may share your personal data with:\n\n• the police and law enforcement agencies\n• courts and tribunals\n• the Information Commissioner’s Office (ICO)\n\nWe may need to share your personal data with the third parties identified above in order to comply with our legal obligations, including our legal obligations to you. If you ask us not to share your personal data with such third parties, we may need to cease to act.`
                },
                {
                  title: '5. Transfers of personal data outside the European Economic Area (EEA)',
                  content: `Your personal data may be processed outside the EEA only. By giving your personal data, you agree to this arrangement.`
                },
                {
                  title: '6. Retention of personal data',
                  content: `When acting as a data controller and in accordance with recognised good practice within the tax and accountancy sector, we will retain all of our records relating to you as follows:\n\n• Where tax returns have been prepared, it is our policy to retain information for seven years from the end of the tax year to which the information relates.\n• Where ad hoc advisory work has been undertaken, it is our policy to retain information for four years from the date the business relationship ceased.\n• Where we have an ongoing client relationship, data that is needed for more than one year’s tax compliance (eg capital gains base costs and claims and elections submitted to HMRC) is retained throughout the period of the relationship, but will be deleted two years after the end of the business relationship unless you as our client ask us to retain it for a longer period.\n\nOur contractual terms provide for the destruction of documents after four years and therefore agreement to the contractual terms is taken as agreement to the retention of records for this period, and to their destruction thereafter.\n\nYou are responsible for retaining information that we send to you (including details of capital gains base costs and claims and elections submitted), and this will be supplied in the form agreed between us. Documents and records relevant to your tax affairs are required by law to be retained by you as follows:\n\nIndividuals, trustees and partnerships – i. with trading or rental income: five years and 10 months after the end of the tax year, ii. otherwise: 22 months after the end of the tax year.\n\nCompanies, LLPs and other corporate entities - six years from the end of the accounting period.\n\nWhere we act as a data processor as defined in DPA 2018, we will delete or return all personal data to the data controller as agreed with the controller at the termination of the contract.`
                },
                {
                  title: '7. Requesting personal data we hold about you (subject access requests)',
                  content: `You have a right to request access to your personal data that we hold. Such requests are known as ‘subject access requests’ (SARs).\n\nPlease provide all SARs in writing marked for the attention of Rajan Phuyal.\n\nTo help us provide the information you want and deal with your request more quickly, you should include enough details to enable us to verify your identity and locate the relevant information. For example, you should tell us:\n\n• your date of birth\n• previous or other name(s) you have used\n• your previous addresses in the past five years\n• personal reference number(s) that we may have given you, for example your national insurance number, your tax reference number or your VAT registration number\n• what type of information you want to know.\n\nIf you do not have a national insurance number, you must send a copy of: the back page of your passport or a copy of your driving licence, and a recent utility bill.\n\nDPA 2018 requires that we comply with a SAR promptly and in any event within one month of receipt. There are, however, some circumstances in which the law allows us to refuse to provide access to personal data in response to a SAR (eg if you have previously made a similar request and there has been little or no change to the data since we complied with the original request).\n\nWe will not charge you for dealing with a SAR.\n\nYou can ask someone else to request information on your behalf – for example, a friend, relative or solicitor. We must have your authority to respond to a SAR made on your behalf. You can provide such authority by signing a letter that states that you authorise the person concerned to write to us for information about you and/or receive our reply.\n\nWhere you are a data controller and we act for you as a data processor (eg by processing payroll), we will assist you with SARs on the same basis as is set out above.`
                },
                {
                  title: '8. Putting things right (the right to rectification)',
                  content: `You have a right to obtain the rectification of any inaccurate personal data concerning you that we hold. You also have a right to have any incomplete personal data that we hold about you completed. Should you become aware that any personal data that we hold about you is inaccurate and/or incomplete, please inform us immediately so we can correct and/or complete it.`
                },
                {
                  title: '9. Deleting your records (the right to erasure)',
                  content: `In certain circumstances, you have a right to have the personal data that we hold about you erased. Further information is available on the ICO website (ico.org.uk). If you would like your personal data to be erased, please inform us immediately and we will consider your request. In certain circumstances, we have the right to refuse to comply with a request for erasure. If applicable, we will supply you with the reasons for refusing your request.`
                },
                {
                  title: '10. The right to restrict processing and the right to object',
                  content: `In certain circumstances, you have the right to ‘block’ or suppress the processing of personal data or to object to the processing of that information. Further information is available on the ICO website (ico.org.uk). Please inform us immediately if you want us to cease to process your information or you object to processing so that we can consider what action, if any, is appropriate.`
                },
                {
                  title: '11. Obtaining and reusing personal data (the right to data portability)',
                  content: `In certain circumstances, you have the right to be provided with the personal data that we hold about you in a machine-readable format, eg so that the data can easily be provided to a new professional adviser. Further information is available on the ICO website (ico.org.uk). The right to data portability only applies:\n\n• to personal data an individual has provided to a controller\n• where the processing is based on the individual’s consent or for the performance of a contract\n• when processing is carried out by automated means.\n\nWe will respond to any data portability requests made to us without undue delay and within one month. We may extend the period by a further two months where the request is complex or a number of requests are received but we will inform you within one month of the receipt of the request and explain why the extension is necessary.`
                },
                {
                  title: '12. Withdrawal of consent',
                  content: `Where you have consented to our processing of your personal data, you have the right to withdraw that consent at any time. Please inform us immediately if you wish to withdraw your consent.\n\nPlease note:\n\n• the withdrawal of consent does not affect the lawfulness of earlier processing\n• if you withdraw your consent, we may not be able to continue to provide services to you\n• even if you withdraw your consent, it may remain lawful for us to process your data on another legal basis (eg because we have a legal obligation to continue to process your data).`
                },
                {
                  title: '13. Automated decision-making',
                  content: `We do not intend to use automated decision-making in relation to your personal data.`
                },
                {
                  title: '14. Complaints',
                  content: `If you have requested details of the information we hold about you and you are not happy with our response, or you think we have not complied with the GDPR or DPA 2018 in some other way, you can complain to us. Please send any complaints to Rajan Phuyal.\n\nIf you are not happy with our response, you have a right to lodge a complaint with the ICO (ico.org.uk).`
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
