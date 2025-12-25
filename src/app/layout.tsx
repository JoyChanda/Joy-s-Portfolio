import type { Metadata } from "next";
import { Lato, Playfair_Display, Arimo, Fira_Code } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Joy Chanda | Full Stack Developer",
  description: "Portfolio of Joy Chanda, a passionate Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfair.variable} ${arimo.variable} ${firaCode.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

