import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MindfulMate - Premium Mental Health Support & Therapy",
  description: "Experience personalized, premium mental health care. Connect with elite licensed therapists, access exclusive resources, and receive support in an elegant, confidential environment.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted`}>
        <div className="fixed inset-0 bg-grid [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
        <Navbar />
        <main className="flex-grow relative z-10">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
