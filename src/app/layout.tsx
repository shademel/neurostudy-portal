import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "500", "100"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: 'Neurodiversity Academy',
  description: 'Neurostudy Neurodiversity Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
