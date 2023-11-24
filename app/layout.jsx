import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const poppins500 = Poppins({ 
  subsets: ['latin'],
  weight: ['500'], 
})

const poppins600 = Poppins({ 
  subsets: ['latin'],
  weight: ['600'],
})

export const metadata = {
  title: {
    template: '%s | MediTechLabs',
    default: 'MediTechLabs',
  },
  description: 'MediTechLabs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={poppins500.className}>
          <Nav />
        </div>
        <div className={poppins600.className}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
