import { ButtonFinal, CartBottom, CartButton, CartContainer, HeaderContainer, ImgContainerCart, ItemCart, ItemsContainer } from "@/styles/pages/app";
import Link from "next/link";
import { PiHandbagBold, PiXBold } from "react-icons/pi";
import Image from 'next/image';
import logoImg from '@/assets/logo.svg';
import { useState } from "react";


export function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const [quantityItems, setQuantityItems] = useState<number>(0)
  
  function handleOpenCart() {
    setCartOpen(true)
  }

  function handleCloseCart() {
    setCartOpen(false)
  }
  
  return (
    <>
    <HeaderContainer>
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
    </HeaderContainer>
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
    </>
  )
}