import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"; // Import Font
import "./globals.css";

// Cấu hình font
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nguyen Van Hung | Senior Backend Engineer",
  description: "Portfolio of a Senior Backend Engineer specializing in .NET and Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#030014] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}