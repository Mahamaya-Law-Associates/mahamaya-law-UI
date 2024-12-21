
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahamaya Law",
  description: "Mahamaya Law is a law firm that provides legal services to clients in India.",
  image: "public/images/Mahamaya_Logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}</body>
    </html>
  );
}


