import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: 'rental, find rentals, find properties'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>The Shaaree</title>
        <meta name="title" content="The Shaaree" />
        <meta name="description" content="The best sharee of the world" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cdn.ideahubbd.com/BaahStore/OldImages/3fb967d5-c8d0-453c-9cff-95cf25cb5098.jpg" />
        <meta property="og:title" content="The Shaaree" />
        <meta property="og:description" content="The best sharee of the world" />
        <meta property="og:image" content="https://cdn.ideahubbd.com/BaahStore/OldImages/3fb967d5-c8d0-453c-9cff-95cf25cb5098.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cdn.ideahubbd.com/BaahStore/OldImages/3fb967d5-c8d0-453c-9cff-95cf25cb5098.jpg" />
        <meta property="twitter:title" content="The Shaaree" />
        <meta property="twitter:description" content="The best sharee of the world" />
        <meta property="twitter:image" content="https://cdn.ideahubbd.com/BaahStore/OldImages/3fb967d5-c8d0-453c-9cff-95cf25cb5098.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
