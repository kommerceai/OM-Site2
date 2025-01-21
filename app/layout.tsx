import { Inter, Poppins } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScriptLoader } from "@/components/script-loader"
import type { Metadata } from "next"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Organic Marketing | TikTok Growth Experts",
    template: "%s | Organic Marketing",
  },
  description: "Amplify your brand organically on TikTok with data-driven strategies and creator partnerships.",
  keywords: ["TikTok marketing", "organic growth", "creator partnerships", "social media strategy"],
  authors: [{ name: "Organic Marketing Team" }],
  creator: "Organic Marketing",
  publisher: "Organic Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        </head>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScriptLoader />
          <ServiceWorkerRegistration />
        </body>
      </html>
    </ClerkProvider>
  )
}

