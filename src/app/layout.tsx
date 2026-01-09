import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Deepak Singh — Frontend Developer",
  description: "Portfolio of Deepak Singh — BSc IT Student, Frontend Developer, and Aspiring Software Engineer. Specializing in React, Tailwind CSS, and modern web technologies.",
  keywords: ["Deepak Singh", "Frontend Developer", "React Developer", "Portfolio", "Web Developer", "Ahmedabad"],
  authors: [{ name: "Deepak Singh" }],
  openGraph: {
    title: "Deepak Singh — Frontend Developer",
    description: "Portfolio of Deepak Singh — Frontend Developer. Built with React & Tailwind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="981cb50c-00f5-4c97-aedc-0dcb15296dfc"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
