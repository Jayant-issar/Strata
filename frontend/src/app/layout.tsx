import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strata",
  description: "Chat with your documents with ease",
  creator: "Jayant Issar"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn(" min-h-screen font-sans antialiased",inter.className)}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
