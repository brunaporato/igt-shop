import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import logoImg from '@/assets/logo.svg'
import { CartButton, Container, Header } from '@/styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { PiHandbagBold } from 'react-icons/pi'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState(0)

  return (
    <Container className={roboto.className}>
      <Header>
        <Link href="/">
          <Image
            src={logoImg}
            alt=''
          />
        </Link>
        <CartButton position='header'>
          <PiHandbagBold size={24} />
          {cartItems != 0 &&
            <span>
              {cartItems}
            </span>
          }
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
