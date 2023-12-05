import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { Container } from '@/styles/pages/app'
import CartProvider from '@/context/CartContext'
import { Header } from '@/components/Header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider>
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
