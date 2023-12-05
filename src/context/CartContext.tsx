import { ReactNode, createContext, useState } from "react"

export interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextProps {
  itemsCart: ProductType[]
  totalPriceFormatted: string
  addItemToCart: (product: ProductType) => void
  removeItemFromCart: (product: ProductType) => void
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

  function removeItemFromCart(product: ProductType) {
    const indexToRemove = itemsCart.findIndex((item) => item.id === product.id)

    if(indexToRemove !== -1) {
      const newCart = [...itemsCart]
      newCart.splice(indexToRemove, 1)
      setItemsCart(newCart)
    }
  }

  function convertPriceToNumber(priceString: String) {
    const numericString = priceString.replace("R$", "").replace(",", ".").trim();
    return parseFloat(numericString)
  }

  const numericPrices = itemsCart.map((item) => {
    return convertPriceToNumber(item.price)
  })

  const totalPrice = numericPrices.reduce((accumulator, price) => accumulator + price, 0)

  const totalPriceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)

  return (
    <CartContext.Provider
      value={{
        itemsCart,
        totalPriceFormatted,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}