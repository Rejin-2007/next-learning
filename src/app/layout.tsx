import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import type { Metadata, ResolvingMetadata } from 'next'
import Header from "@/components/Header";
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const setting = await client.getSingle("settings")
  return {
    title: setting.data.title || "",
    description : setting.data.description,
    openGraph: {
      images: [setting.data.image.url || ""],
    },
  }
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {children}
        <footer>Footer!!</footer>
      </body>
    </html>
  );
}
