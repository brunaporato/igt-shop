import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { CartButton } from "@/styles/pages/app";
import { PiHandbagBold } from "react-icons/pi";
import { useContext } from "react";
import { CartContext, ProductType } from "@/context/CartContext";
import { ProductProps } from "./product/[id]";

interface HomeProps {
  products: ProductType[]
}

interface HandleOnClickProps {
  e: MouseEvent
  product: ProductType
}


export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    }
  })

  const { addItemToCart, itemsCart } = useContext(CartContext)

  console.log(itemsCart)

  function handleAddItemToCart(e: React.MouseEvent<HTMLButtonElement>, product: ProductType) {
    e.preventDefault()
    addItemToCart(product)
  }

  return (
    <>
    <Head>
      <title>Home | Igt Shop</title>
    </Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      {products && products.map(product => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
              />
              <footer>
                <div className="info">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton
                  position='footer'
                  onClick={(e) => handleAddItemToCart(e, product)}
                >
                  <PiHandbagBold size={32} />
                </CartButton>
              </footer>
            </Product>
          </Link>
        )
      })}

    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })


  return {
    props : {
      products
    },

    revalidate: 60 * 60 * 2,
  }
}

