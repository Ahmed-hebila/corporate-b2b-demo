import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata = {
  title: `${siteConfig.name} | وصف موجز لنشاط الشركة`,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <body className="font-sans min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
