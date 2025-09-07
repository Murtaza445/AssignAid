import "../app/assets/css/tailwind.css"
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600', '700'],
 })

export const metadata = {
  title: 'AssignAid - Assignment Help Service',
  description: 'Professional Assignment Help Service for Students | Expert Writers, 24/7 Support, Affordable Prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}>{children}</body>
    </html>
  )
}
