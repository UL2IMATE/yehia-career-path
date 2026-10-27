import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehia's Career Hub",
  description: "Track career opportunities and applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        {/* Global Navigation - visible on every page */}
        <header className="w-full bg-white border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-blue-900">
              Yehia Career Hub
            </Link>
            <div className="flex gap-6 text-gray-700">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link
                href="/plan"
                className="hover:text-blue-600 transition-colors"
              >
                Plan
              </Link>
              <Link
                href="/opportunities"
                className="hover:text-blue-600 transition-colors"
              >
                Opportunities
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
