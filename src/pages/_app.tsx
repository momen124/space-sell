import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NotificationProvider } from '@/context/notification'
import { CartProvider } from '@/context/cart'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </NotificationProvider>
  )
}
