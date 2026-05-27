import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar | Software Development Engineer",
  description:
    "Aditya Kumar's portfolio — backend, mobile, and product-focused engineering work across Node.js, Express, PostgreSQL, MongoDB, Flutter, and Firebase.",
  authors: [{ name: "Aditya Kumar" }],
  keywords: [
    "Aditya Kumar",
    "Backend Developer",
    "Flutter Developer",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Portfolio",
  ],
  openGraph: {
    title: "Aditya Kumar | Software Development Engineer",
    description:
      "Portfolio showcasing backend systems, Flutter apps, and production-ready engineering work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar | Software Development Engineer",
    description:
      "Portfolio showcasing backend systems, Flutter apps, and production-ready engineering work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geist.className} min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
      >
        <InteractiveBackground />
        <div className="relative isolate z-10">{children}</div>
      </body>
    </html>
  );
}