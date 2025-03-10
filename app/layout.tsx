import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const getRandomNumber = (): 1 | 2 | 3 | 4 | 5 => {
  return (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bgNumber = getRandomNumber();

  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <div
            className={cn(
              "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover",
              {
                "bg-[url(/bg.jpg)] ": bgNumber === 1,
                "bg-[url(/bg2.jpg)] ": bgNumber === 2,
                "bg-[url(/bg3.jpg)] ": bgNumber === 3,
                "bg-[url(/bg4.jpg)] ": bgNumber === 4,
                "bg-[url(/bg5.jpg)] ": bgNumber === 5,
              },
            )}
          >
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              {children}
            </main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
