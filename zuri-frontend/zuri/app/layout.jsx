import { Inter } from 'next/font/google'
import './globals.css'
import {cabin} from './fonts'


export const metadata = {
  title: 'Zuri',
  description: 'nuts, groundnuts, organic, fresh, new, kisumu, nyanza, nairobi, kenya, Lake Victoria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        {children}
      </body>
    </html>
  )
}

