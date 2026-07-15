import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isha Restaurant",
  icons: {
    icon: "/favicon.ico.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
