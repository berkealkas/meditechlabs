import { Mulish } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const mulish = Mulish({
  subsets: ['latin'],
  weights: [400, 700],
})

export const metadata = {
  title: 'MediTechLabs',
  description: 'MediTechLabs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
