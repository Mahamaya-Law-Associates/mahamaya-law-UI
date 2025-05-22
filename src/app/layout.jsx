
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahamaya Law",
  description: "Mahamaya Law is a law firm that provides legal services to clients in India.",
  // image: "images/MahamayaLawLogo.png",
  // img: "images/MahamayaLawLogo.png",
  // logo: "images/MahamayaLawLogo.png",
  // icon: "favicon.ico",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href="favicon.ico" />
        <Link rel="apple-touch-icon" href="/images/MahamayaLawLogo.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}


