import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDR - Best HD wallpapers free download",
  description: "This is a free hd wallpaper download website for Desktop, PC, Mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="up" className="relative">
        {children}
      </body>
    </html>
  );
}
