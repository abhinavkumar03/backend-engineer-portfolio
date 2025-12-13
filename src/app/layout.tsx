import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Abhinav Kumar | Backend Software Engineer",
  description: "Backend Software Engineer specializing in scalable systems, Java, Spring Boot, and Cloud Infrastructure.",
  keywords: ["Backend Engineer", "Java", "Spring Boot", "System Design", "Microservices", "Abhinav Kumar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased selection:bg-blue-500/30`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
