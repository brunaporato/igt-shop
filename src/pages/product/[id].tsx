import { CartContext } from "@/context/CartContext"
import { stripe } from "@/lib/stripe"
import { ButtonFinal } from "@/styles/pages/app"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Stripe from "stripe"

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { addItemToCart } = useContext(CartContext)

  const { isFallback } = useRouter();

  if(isFallback) {
    return (
      <>
        <ProductContainer>
          <ImageContainer type='skeleton' />
          <ProductDetails>
            <ProductDetails type='skeletonName' />
            <ProductDetails type='skeletonDescription' />
            <ButtonFinal type='skeleton' disabled />
          </ProductDetails>
        </ProductContainer>
      </>
    )
  }


  function handleAddProductToCart() {
    addItemToCart(product)
  }

  return (
    <>
    <Head>
      <title>{product.name} | Igt Shop</title>
    </Head>
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <ButtonFinal onClick={handleAddProductToCart} disabled={isCreatingCheckoutSession}>
          Colocar na sacola
        </ButtonFinal>
      </ProductDetails>
    </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_P68AfbXaUZ2eQS' } } //inserir aqui os ids dos produtos mais acessados
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  if(!params) {
    return {
      notFound: true,
    }
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, //1hour
  }
}