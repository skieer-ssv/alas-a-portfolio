import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenuLoader } from "@/components/command-menu-loader";
import { GridBackground } from "@/components/grid-background";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Siddhant Vispute | Portfolio",
  description: "Software Engineer specializing in building scalable web applications.",
  keywords: ["Software Engineer", "Full-Stack Developer", "React", "Next.js", "Portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alas-a-portfolio.vercel.app/",
    title: "Siddhant Vispute | Portfolio",
    description: "Software Engineer specializing in building scalable web applications.",
    siteName: "Siddhant Vispute Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Vispute | Portfolio",
    description: "Software Engineer specializing in building scalable web applications.",
    creator: "@skieer_ssv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 relative">
            <GridBackground />
            {children}
          </main>
          <Footer />
          <CommandMenuLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
