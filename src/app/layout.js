import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Floating";
import HomeModal from "@/components/HomeModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vpack Machine - Mineral Water Plant manufacturer in Delhi",
  description:
    "Vpack Machine Pvt. Ltd. is your trusted partner for advanced, reliable machinery solutions in the water, beverage, and pharma sectors.",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-1">
          {children} <HomeModal />
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
