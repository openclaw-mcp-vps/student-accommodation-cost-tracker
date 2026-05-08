import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Accommodation Cost Tracker",
  description: "Track and split student housing expenses automatically"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="50061667-f305-45f2-9b4f-d062b552e64b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
