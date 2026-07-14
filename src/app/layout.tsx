import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ConsultationModalProvider } from "@/lib/ConsultationModalContext";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Mountain Accountants | Chartered Accountants UK | Online Accounting, Tax & Bookkeeping",
  description: "Award-winning ICAEW Chartered Accountants offering online accounting, bookkeeping, payroll, VAT, self assessment and corporate tax services for UK sole traders, limited companies and SMEs. Fixed-fee monthly packages. Book your free consultation today.",
  keywords: "chartered accountants UK, accountants Milton Keynes, limited company accountants, sole trader accountants, VAT returns, self assessment, bookkeeping UK, Making Tax Digital, IR35 accountants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${roboto.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-text-main font-sans">
        <ConsultationModalProvider>
          {children}
          <CookieConsent />
          <FloatingCTA />
          <ConsultationModal />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
