import { Space_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/core/components/Navbar";
import Script from "next/script";
import { ThemeProvider } from "@/core/components/ui/theme-providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/core/components/footer";

export const metadata = {
  title: "Techtoniclabs - Web Development Service",
  description:
    "From vision to launch, we specialize in helping you build stunning, high-performing websites that captivate your audience, drive conversions, and grow your business. Our team of expert designers and developers work closely with you to create custom web solutions tailored to your unique goals. Whether you need a sleek, modern design, seamless user experience, or robust e-commerce functionality, we have got you covered. We focus on delivering websites that not only look great but also perform exceptionally, ensuring your brand stands out in a competitive digital landscape. Let us transform your ideas into a powerful online presence that engages visitors, builds trust, and turns leads into loyal customers. Partner with us to take your business to the next level.",
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
