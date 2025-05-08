
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahamaya Law",
  description: "Mahamaya Law is a law firm that provides legal services to clients in India.",
  // image: "images/MahamayaLawLogo.png",
  // img: "images/MahamayaLawLogo.png",
  // logo: "images/MahamayaLawLogo.png",
  // icon: "images/MahamayaLawLogo.png",
  icons: {
    icon: '/images/MahamayaLawLogo.png',
    apple: 'images/MahamayaLawLogo.png',
    shortcut: 'images/MahamayaLawLogo.png', 
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


