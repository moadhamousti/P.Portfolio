import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/data/constants/fonts";
import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Moad Hamousti Portfolio",
  description:
    "An elegant and visually appealing portfolio showcasing the work and career of Moad Hamousti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-[#f8f8f8] dark:bg-cool-black relative`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
