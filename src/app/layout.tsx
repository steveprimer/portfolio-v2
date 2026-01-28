import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Ensure this path matches where you actually saved the component
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
  // 1. Define the Structured Data (JSON-LD) for AI Bots
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anson Stephan",
    url: "https://ansonstephan.com", // Replace with your actual domain
    jobTitle: "Front End Developer & Agency Founder",
    worksFor: {
      "@type": "Organization",
      name: "A* Codex",
      url: "https://astarcodex.com",
    },
    sameAs: [
      "https://github.com/steveprimer/",
      "https://www.linkedin.com/in/anson-stephan-71132525b/",
      "https://www.instagram.com/_steve_primer/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} relative min-h-screen selection:bg-teal-300 selection:text-teal-900`}
      >
        {/* 2. Background Logic */}
        <SpotlightCursor />

        {/* 3. Inject the JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 4. Main Content Wrapper */}
        <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
