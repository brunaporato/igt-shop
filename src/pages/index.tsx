import { HomeContainer, Product } from "@/styles/pages/home";
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'


import camiseta1 from '@/assets/Type6.png'
import camiseta2 from '@/assets/Type7.png'
import camiseta3 from '@/assets/Type8.png'
import camiseta4 from '@/assets/Type9.png'

import 'keen-slider/keen-slider.min.css'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
        <Image
          src={camiseta4.src}
          width={520}
          height={480}
          alt=""
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
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
