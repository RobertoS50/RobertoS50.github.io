import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import { CDN } from "@/util/globalConstants";
import "@/scss/layout/root.scss";

//TODO 38: !!FUTURE!! Defer assets, css, font, js

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
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="preload"
          as="image"
          href={CDN + "/RobertoS-4-tablet-scaled.jpg"}
          media="(max-width: 1279px)"
        />
        <link
          rel="preload"
          as="image"
          href={CDN + "/RobertoS-4-small-scaled.jpg"}
          media="(min-width: 1280px) and (max-width: 3839px)"
        />
        <link
          rel="preload"
          as="image"
          href={CDN + "/RobertoS-4-4K-scaled.jpg"}
          media="(min-width: 3840px)"
        />
        <link
          rel="preload"
          as="image"
          href={CDN + "/Logos/linkedIn/linkedIn-mobile.webp"}
          media="(max-width: 1279px)"
        />
        <link
          rel="preload"
          as="image"
          href={CDN + "/Logos/linkedIn/linkedIn-small.webp"}
          media="(min-width: 1280px) and (max-width: 3839px)"
        />
        <link
          rel="preload"
          as="image"
          href={CDN + "/Logos/linkedIn/linkedIn-4K.webp"}
          media="(min-width: 3840px)"
        />
        <link rel="preload" as="image" href={CDN + "/Logos/GmailLogo.svg"} />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
