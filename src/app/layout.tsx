import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>
          <Toaster position="bottom-right" />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
