import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { FinanceProvider } from "@/context/FinanceContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinTrack – Personal Finance Tracker",
  description: "Track your income and expenses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-50 text-gray-900`}>
        <FinanceProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">{children}</main>
          </div>
        </FinanceProvider>
      </body>
    </html>
  );
}
