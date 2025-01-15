import { Space_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/navbar/navbar";
import Script from "next/script";

export const metadata = {
  title: "Techtoniclabs",
  description: "best web developer in town",
};
export const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_mono",
  weight: "700",
});

export const pt_sans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt_sans",
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="/brevo.js" strategy="afterInteractive" />
      <body
        className={`${space_mono.variable} ${pt_sans.variable} antialiased`}
      >
        <main className="pt_sans">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
