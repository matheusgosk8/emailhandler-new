import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import '../globals.css'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Email Handler',
  description: 'Página inicial do gerenciador do app email handler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback ={<Loading/>}>
      <Nav/>
        {children}
      <Footer/>
        </Suspense>
      </body>
    </html>
  )
}
