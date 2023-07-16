import './globals.css'
import type { Metadata } from 'next'
import Header from '../../components/Header';
import { Roboto_Mono } from 'next/font/google'
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'X-Ray Analysis and Contribution Tool',
  description: 'A free open source tool that lets anyone to get basic diagnostic report of their X-Ray image.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
