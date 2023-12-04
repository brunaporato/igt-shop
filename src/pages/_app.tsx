import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import logoImg from '@/assets/logo.svg'
import { ButtonFinal, CartBottom, CartButton, CartContainer, Container, Header, ImgContainerCart, ItemCart, ItemsContainer } from '@/styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { PiHandbagBold, PiXBold } from 'react-icons/pi'
import { ImgContainer } from '@/styles/pages/success'
import CartProvider, { CartContext, ProductType } from '@/context/CartContext'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const [quantityItems, setQuantityItems] = useState<number>(0)

  const { itemsCart } = useContext(CartContext)
  console.log(itemsCart) // retornando undefined aqui, mas quando nos outros componentes retorna certo

  function handleOpenCart() {
    setCartOpen(true)
  }

  function handleCloseCart() {
    setCartOpen(false)
  }

  useEffect(() => {
    const quantity = itemsCart?.length ?? 0;
    setQuantityItems(quantity)

  }, [itemsCart]);

  return (
    <CartProvider>
      <Container className={roboto.className}>
        <Header>
          <Link href="/">
            <Image
              src={logoImg}
              alt=''
            />
          </Link>
          <CartButton position='header' onClick={handleOpenCart}>
            <PiHandbagBold size={24} />
            {quantityItems != 0 &&
              <span>
                {quantityItems}
              </span>
            }
          </CartButton>
        </Header>
        <Component {...pageProps} />
        {
          cartOpen === true &&
            <CartContainer>
              <button className='close' onClick={handleCloseCart}>
                <PiXBold size={24} />
              </button>
              <h1>Sacola de compras</h1>

              <ItemsContainer>
                <ItemCart>
                  <ImgContainerCart></ImgContainerCart>
                  <div className="details">
                    <span>Camiseta X</span>
                    <strong>R$ 79,90</strong>
                    <Link href=''>
                      Remover
                    </Link>
                  </div>
                </ItemCart>
                <ItemCart>
                  <ImgContainerCart></ImgContainerCart>
                  <div className="details">
                    <span>Camiseta X</span>
                    <strong>R$ 79,90</strong>
                    <Link href=''>
                      Remover
                    </Link>
                  </div>
                </ItemCart>
              </ItemsContainer>

              <CartBottom>
                <div className='quantity'>
                  <span>Quantidade</span>
                  <span>3 itens</span>
                </div>
                <div className='price'>
                  <span>Valor total</span>
                  <span>R$ 270,00</span>
                </div>
              </CartBottom>

              <ButtonFinal>
                Finalizar compra
              </ButtonFinal>
            </CartContainer>
        }
      </Container>
    </CartProvider>
  )
}
