
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://mahamayalaw.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mahamaya Law | Advocates & Legal Consultants in Lucknow & Delhi NCR",
    template: "%s | Mahamaya Law",
  },
  description:
    "Mahamaya Law is a full-service law firm with offices in Lucknow and Delhi NCR, offering expert legal counsel in litigation, intellectual property rights, employment and labour law, corporate and M&A, dispute resolution and arbitration, matrimonial law, white collar crime defence, competition law, and data protection.",
  keywords: [
    "Mahamaya Law",
    "law firm in Lucknow",
    "advocates in Lucknow",
    "law firm in Delhi",
    "law firm in Noida",
    "advocates in Delhi NCR",
    "law firm in Noida",
    "best lawyers in India",
    "best lawyers in Delhi",
    "litigation lawyer Lucknow",
    "litigation lawyer Delhi",
    "litigation lawyer Noida",
    "civil and commercial litigation",
    "intellectual property rights lawyer",
    "trademark and patent attorney India",
    "employment and labour law advisor",
    "corporate law firm India",
    "corporate law firm Delhi",
    "corporate law firm Noida",
    "mergers and acquisitions lawyer",
    "arbitration and dispute resolution",
    "matrimonial and divorce lawyer",
    "white collar crime defence lawyer",
    "competition law advisor India",
    "data protection and privacy law India",
    "DPDP Act compliance",
  ],
  authors: [{ name: "Mahamaya Law" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/MahamayaLawLogo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Mahamaya Law",
    title: "Mahamaya Law | Advocates & Legal Consultants in Lucknow & Delhi NCR",
    description:
      "Full-service legal counsel in litigation, IPR, corporate & M&A, arbitration, matrimonial law, white collar crime, competition law, and data protection.",
    images: ["/images/MahamayaLawLogo.png"],
  },
  twitter: {
    card: "summary",
    title: "Mahamaya Law | Advocates & Legal Consultants in Lucknow & Delhi NCR",
    description:
      "Full-service legal counsel in litigation, IPR, corporate & M&A, arbitration, matrimonial law, white collar crime, competition law, and data protection.",
    images: ["/images/MahamayaLawLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}


