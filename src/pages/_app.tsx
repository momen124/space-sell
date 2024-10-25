import RootLayout from "@/components/layout/RootLayout";
import { CartProvider } from "@/context/cart";
import unAuthorizedHandler from "@/hooks/useMutation/unauthed";
import { ModalProvider } from "@/packages/modals";
import "@/styles/globals.css";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";


const queryCache = new QueryCache({
  onError: err => {
    if (err instanceof AxiosError) {
      unAuthorizedHandler(err);
    }
  },
});
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount(query) {
        return !query.isStale();
      },
      staleTime: 4 * 60 * 1000,
      refetchOnWindowFocus(query) {
        return !query.isStale();
      },
    },
  },
  queryCache,
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ModalProvider>
          <CartProvider>
            <RootLayout>
            <Component {...pageProps} />
            </RootLayout>
          </CartProvider>
        </ModalProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
