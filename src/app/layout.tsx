import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import { BreadcrumbWithCustomSeparator } from "./components/BreadCrums";
import { ResponsiveSideBar } from "./components/ResponsiveSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='flex gap-8'>
          <div className="hidden md:block bg-blue-700">
            <SideBar />
          </div>
          <div className="block md:hidden absolute bg-blue-900 w-full">
            <ResponsiveSideBar />
          </div>
          <main className="px-8 flex min-h-screen w-full flex-col items-center justify-between py-24 md:max-w-[70%] md:pr-8 md:pl-0 lg:max-w-[75%] xl:w-full xl:max-w-none">
            <div className="absolute top-0 left-10 md:left-52 py-4">
              <BreadcrumbWithCustomSeparator />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
