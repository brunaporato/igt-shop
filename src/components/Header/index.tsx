import { ButtonFinal, HeaderContainer } from "@/styles/pages/app";
import Link from "next/link";
import { PiHandbagBold, PiXBold } from "react-icons/pi";
import Image from 'next/image';
import logoImg from '@/assets/logo.svg';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { CartBottom, CartButton, CartContainer, ImgContainerCart, ItemCart, ItemsContainer, RemoveButton } from "./style";


export function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const [quantityItems, setQuantityItems] = useState<number>(0)

  const { itemsCart, totalPriceFormatted, removeItemFromCart } = useContext(CartContext)

  function handleOpenCart() {
    setCartOpen(true)
  }

  function handleCloseCart() {
    setCartOpen(false)
  }

  useEffect(() => {
    itemsCart ? setQuantityItems(itemsCart.length) : setQuantityItems(0)
  }, [itemsCart, quantityItems])
  
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
            {
              itemsCart && itemsCart.map(item => {
                return (
                  <ItemCart key={(item.id) + Math.random()}>
                    <ImgContainerCart>
                      <Image
                        src={item.imageUrl}
                        width={94}
                        height={94}
                        alt=""
                      />
                    </ImgContainerCart>
                    <div className="details">
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                      <RemoveButton
                        onClick={() => removeItemFromCart(item)}
                      >
                        Remover
                      </RemoveButton>
                    </div>
                  </ItemCart>
                )
              })
            }
          </ItemsContainer>

          <CartBottom>
            <div className='quantity'>
              <span>Quantidade</span>
              <span>{quantityItems} {quantityItems > 1 ? 'itens' : 'item'}</span>
            </div>
            <div className='price'>
              <span>Valor total</span>
              <span>{totalPriceFormatted}</span>
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