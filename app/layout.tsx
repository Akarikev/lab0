import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevRoute",
  description: "Get that perfect Dev Bio Link",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen  antialiased grainy", inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
