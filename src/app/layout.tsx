import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { instrumentSerif, inter, jetbrainsMono } from "@/components/Fonts";

export const metadata: Metadata = {
  title: "Manish Ghimire — Frontend Developer",
  description:
    "Frontend developer building thoughtful, fast, and well-crafted interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased relative`}
      >
        <div className="grain" aria-hidden />
        <CursorGlow />
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
