import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "@/scss/layout/root.scss";

//TODO 38: Defer assets, css, font, js
//TODO 39: Delete unused js and css. (Critters?)

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
