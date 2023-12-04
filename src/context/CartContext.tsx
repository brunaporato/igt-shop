import { ReactNode, createContext, useState } from "react"

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextProps {
  itemsCart: ProductType[]
  addItemToCart: (product: ProductType) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export default function CartProvider({ children }: CartProviderProps) {
  const [itemsCart, setItemsCart] = useState<ProductType[]>([])

  function addItemToCart(product: ProductType) {
    const newCart = [...itemsCart]
    newCart.push(product)
    setItemsCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        itemsCart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}