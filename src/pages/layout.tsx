import { Inter } from 'next/font/google'
import './globals.css'
import { NotificationProvider } from '../context/notification'
import { CartProvider } from '../context/cart'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Sell',
  description: 'Buy and sell space items',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  )
}
