import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <PageHero
          title="Cookie Policy"
          subtitle="How Blue Mountain Accountants uses cookies and similar tracking technologies on this website."
          category="Legal"
        />

        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6 space-y-12">
            {[
              {
                title: 'What Are Cookies?',
                content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies do not contain executable code and cannot access other information on your computer.`
              },
              {
                title: 'How We Use Cookies',
                content: `We use cookies for the following purposes:\n\n• Essential Cookies: Required for the website to function properly, including session management and security.\n• Performance Cookies: We use Google Analytics to understand how visitors interact with our website. All data is anonymised.\n• Functional Cookies: Remember your preferences, such as language settings.\n• Marketing Cookies: Used to track the effectiveness of our online advertising (only with your consent).`
              },
              {
                title: 'Cookies We Use',
                content: `Strictly Necessary Cookies:\n• _session: Session management — expires when browser is closed\n• csrf_token: Cross-site request forgery protection — expires after 24 hours\n\nAnalytics Cookies (require consent):\n• _ga: Google Analytics — expires after 2 years\n• _gid: Google Analytics — expires after 24 hours\n\nMarketing Cookies (require consent):\n• _fbp: Facebook Pixel — expires after 90 days`
              },
              {
                title: 'Managing Your Cookie Preferences',
                content: `You can control and manage cookies in several ways:\n\n• Browser Settings: Most browsers allow you to refuse or delete cookies. Please refer to your browser's help documentation.\n• Our Cookie Banner: When you first visit our site, you will see a cookie consent banner that lets you select which categories of cookies you accept.\n• Opt-out Links: For Google Analytics, visit: https://tools.google.com/dlpage/gaoptout\n\nPlease note that disabling essential cookies may affect the functionality of this website.`
              },
              {
                title: 'Changes to This Policy',
                content: `We may update this Cookie Policy from time to time. The date of the most recent revision is shown at the top of this page. We encourage you to review this policy periodically.`
              }
            ].map(s => (
              <div key={s.title} className="border-b border-border-light pb-10 last:border-none">
                <h2 className="text-2xl font-bold text-primary mb-5">{s.title}</h2>
                <div className="text-text-secondary leading-relaxed whitespace-pre-line">{s.content}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
