'use client'

import { Header } from '@/components/layout/Header'
import { CartProvider } from '../context/cart'
import Footer from '@/components/layout/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </CartProvider>
  )
}
