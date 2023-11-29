import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'


import camiseta1 from '@/assets/Type6.png'
import camiseta2 from '@/assets/Type7.png'
import camiseta3 from '@/assets/Type8.png'
import camiseta4 from '@/assets/Type9.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={camiseta1.src}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={camiseta2.src}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={camiseta3.src}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
