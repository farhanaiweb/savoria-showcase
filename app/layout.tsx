import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savoria | Premium Culinary Experience",
  description: "Experience the perfect harmony of heritage and innovation at Savoria Fine Dining.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}