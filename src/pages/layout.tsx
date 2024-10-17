'use client'

import { Header } from '@/components/layout/Header'
import { CartProvider } from './context/cart'
import { NotificationProvider } from './context/notification'
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NotificationProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </CartProvider>
    </NotificationProvider>
  )
}
