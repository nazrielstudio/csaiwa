import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cikeas FC — Official",
  description: "Website resmi Cikeas FC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}