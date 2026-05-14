import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Singh — Growth Strategist & Performance Marketer",
  description: "Building brands through scalable digital systems. 7+ years across B2B, Govt of India, and global clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
