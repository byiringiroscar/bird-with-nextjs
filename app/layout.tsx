import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bird-coderazor",
  description: "bird-coderazor is beautiful website designed by Oscar Byiringiro open minded developer and designer please feel free to reach out to me for any project or collaboration checkout my linkedin profile https://www.linkedin.com/in/oscarbyiringiro/ around with my portfolio https://oscar-byiringiro.onrender.com/ with also my github https://github.com/byiringiroscar", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" />

      </head>
      <body  className='flex flex-col min-h-screen'>
          <Navbar />
            <main className='relative overflow-hidden flex-grow'>{children}</main>
          <Footer />
        </body>
    </html>
  );
}
