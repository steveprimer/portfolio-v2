import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotlightCursor from "@/app/components/ui/SpotlightCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Anson Stephan | Full Stack Developer",
  description: "Co-Founder of A* Codex & Front End Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} relative min-h-screen selection:bg-teal-300 selection:text-teal-900`}
      >
        {/* Background Logic */}
        <SpotlightCursor />

        {/* Main Content Wrapper */}
        <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
