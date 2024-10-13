
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/context/CartContext'
import { NotificationProvider } from '@/context/notificationContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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