import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S. Mohammad Imdad — AI Engineer & Software Developer",
  description:
    "Portfolio of S. Mohammad Imdad — AI Engineer and Software Developer building intelligent systems and full-stack applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}