import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Reem Kaleem - AI/ML Developer Portfolio",
  description:
    "Portfolio of Reem Kaleem, Computer Science Engineering student specializing in AI/ML with expertise in Python, Machine Learning, and Full-Stack Development. CGPA 9.15/10.",
  keywords: [
    "Reem Kaleem",
    "AI Developer",
    "Machine Learning",
    "Computer Vision", 
    "Python Developer",
    "Full Stack Developer",
    "ATME College",
    "Portfolio"
  ],
  authors: [{ name: "Reem Kaleem", url: "https://github.com/Reemkaleem" }],
  creator: "Reem Kaleem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reem-kaleem-portfolio.vercel.app",
    title: "Reem Kaleem - AI/ML Developer Portfolio",
    description: "Portfolio showcasing AI/ML projects, computer vision systems, and full-stack development work.",
    siteName: "Reem Kaleem Portfolio",
    images: [
      {
        url: "/placeholder-user-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Reem Kaleem Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reem Kaleem - AI/ML Developer Portfolio",
    description: "Portfolio showcasing AI/ML projects, computer vision systems, and full-stack development work.",
    images: ["/placeholder-user-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
