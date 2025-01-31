
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahamaya Law",
  description: "Mahamaya Law is a law firm that provides legal services to clients in India.",
  icons: {
    icon: '../../public/images/MahamayaLawLogo.png',
    apple: '../../public/images/MahamayaLawLogo.png',
    shortcut: '../../public/images/MahamayaLawLogo.png', 
  },
};


export default function RootLayout({ children }) {
  // const termsAccepted = false;
  
  // const acceptedTerms = sessionStorage.getItem('acceptedTerms');
  // if (acceptedTerms === 'true') {
  //   termsAccepted = true;
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}</body>
    </html>
  );
}


