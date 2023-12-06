import { stripe } from "@/lib/stripe";
import { ImgContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    images: string[]
    id: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const quantityPurchased = products.length

  return (
    <>
    <Head>
      <title>Compra efetuada | Igt Shop</title>
      <meta name="robots" content="noindex" />
    </Head>
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <div className="products">
        {
          products && products.map(product => {
            return (
              <ImgContainer
                key={product.id}
              >
                <Image src={product.images[0]} width={120} height={110} alt="" />
              </ImgContainer>
            )
          })
        }
      </div>

      <p>
        Uhuul <strong>{customerName}</strong>
        , sua compra de <strong>{quantityPurchased} {quantityPurchased > 1 ? 'camisetas' : 'camiseta'}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
    </>
  )
}

// Escolha de fetch de dados: 
// Client-side (useEffect) - insegurança ao expor os dados na chamada
// SSR (GetServerSideProps) 
// SSG (GetStaticProps) - não quero que a pagina seja estatica alias vai ser diferente para cada compra

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map(item => item.price?.product as Stripe.Product)


  return {
    props: {
      customerName, 
      products  
    }
  }
}