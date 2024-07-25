import type { Metadata } from "next";
import { Montserrat, Libre_Baskerville } from "next/font/google";

import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

import { SITE_TITLE } from "@/utils/constants";

import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-lbv"
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-ms"
});

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  description: `${SITE_TITLE}`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${libreBaskerville.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body
        className={clsx(
          "min-h-screen overflow-y-hidden bg-background antialiased",
          montserrat.className
        )}
        style={{ minWidth: 400 }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-left" />
        </ThemeProvider>
      </body>
    </html>
  );
}
