import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer/page";
import Logo from "./../public/logo2.png";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  showFooter: boolean;
};

export const metadata: Metadata = {
  title: "MuseMaker 3D",
  description: "Website for specialized 3d services",
};

export default function RootLayout({ children, showFooter = true }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="flex flex-col items-center justify-between p-12">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="/"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src={Logo}
                    alt="Vercel Logo"
                    width={70}
                    height={24}
                    priority
                  />
                </a>
              </div>
              <Link href='/services' style={{ width: 'fit-content' }} className="fixed btn button-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Services
              </Link>
              <Link href='/portfolio' style={{ width: 100 }} className="fixed btn left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Works&nbsp;
              </Link>
              <Link href='/blog' className="fixed btn left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Blog&nbsp;
              </Link>
              
              <Link href='/about' className="fixed btn left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                About&nbsp;
              </Link>
            </div>
          </div>
        </header>
        {children}
        {showFooter && <Footer />}
      </body>

    </html>
  );
}
