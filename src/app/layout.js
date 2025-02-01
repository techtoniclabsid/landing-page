import { Space_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/navbar/navbar";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/theme-providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/landing-page/footer";

export const metadata = {
  title: "Techtoniclabs - Website Crafter",
  description:
    "From vision to launch, we help you build websites that captivate, convert, and grow your business.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics gaId="G-7N5PNP1BEY" />
          <main className="pt_sans">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
