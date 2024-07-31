import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { ThemeToggleSidebar } from "@/components/ThemeTogglerSideBar";
import { FloatingNavDemo } from "@/components/ui/FloatingNav";
import { Toaster } from "@/components/ui/toaster"
import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/data";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damion WIlson",
  description: "DDW Web Dev Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <FloatingNav navItems={navItems} />
        {children}
        
        <Toaster />
        <ThemeToggleSidebar />
        </Providers>
        {/* <Footer /> */}
        </body>
    </html>
  );
}
