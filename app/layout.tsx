import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monal's Universe now You are entering in different environment",
  description: "Here you will get hyPnotise be careful My super Next Js Application will inhance developers to develop more things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <header>Monal & Company</header>
        {children}
        <footer>Made with Love❤ All rights reserved Inc. India</footer>
        
      </body>
    </html>
  );
}
