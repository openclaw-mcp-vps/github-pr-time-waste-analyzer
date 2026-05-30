import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Time Waste Analyzer – Find What's Slowing Down Your PR Reviews",
  description:
    "Analyzes GitHub PR data to identify bottlenecks, reviewer patterns, and suggests process improvements to reduce cycle time for engineering teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="817e7ef2-a876-49a7-9e00-01d767ebe04d"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
