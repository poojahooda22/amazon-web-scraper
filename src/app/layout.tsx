import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar';
import Header from '@/components/Header';

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon Web Scraper',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-slate-100">

        {/* Sidebar */}
        <Sidebar />
        <main className='p-10 max-w-7xl w-full mx-auto'>
          {/* Header */}
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
