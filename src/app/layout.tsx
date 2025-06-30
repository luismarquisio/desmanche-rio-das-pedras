"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Desmanche Rio Das Pedras",
  description: "Cloned website of Desmanche Rio Das Pedras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white text-black font-sans">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-[#1a1464] text-white py-4 text-center uppercase font-bold tracking-widest text-lg">
            DESMANCHE RIO DAS PEDRAS
          </header>

          {/* Main content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-[#1a1464] text-white py-4 text-center uppercase font-bold tracking-widest text-sm flex justify-between items-center px-6">
            <span>DESMANCHE RIO DAS PEDRAS</span>
            <img
              src="https://static.wixstatic.com/media/1b8af8_750f030c7b5a41ac8331856e2b47181c~mv2.jpg/v1/fill/w_1280,h_292,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1b8af8_750f030c7b5a41ac8331856e2b47181c~mv2.jpg"
              alt="Footer Image"
              className="h-10 object-contain"
            />
          </footer>
        </div>
      </body>
    </html>
  );
}
