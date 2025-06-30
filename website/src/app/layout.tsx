import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "@/scss/layout/root.scss";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Roberto Soto",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
