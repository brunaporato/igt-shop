import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import logoImg from '@/assets/logo.svg'
import { ButtonFinal, CartBottom, CartButton, CartContainer, Container, ImgContainerCart, ItemCart, ItemsContainer } from '@/styles/pages/app'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { PiHandbagBold, PiXBold } from 'react-icons/pi'
import CartProvider, { CartContext } from '@/context/CartContext'
import { Header } from '@/components/Header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  

  const { itemsCart } = useContext(CartContext)
  console.log(itemsCart) // retornando undefined aqui, mas quando nos outros componentes retorna certo


  // useEffect(() => {
  //   const quantity = itemsCart?.length ?? 0;
  //   setQuantityItems(quantity)

  // }, [itemsCart]);

  return (
    <CartProvider>
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
