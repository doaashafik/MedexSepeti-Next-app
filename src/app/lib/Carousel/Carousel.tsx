
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Link from 'next/link'
import Image from 'next/image'
import { brands } from '@/app/components/Brands/Data'
import "./Carousel.scss";


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {brands.map((brand, index) => (
            <div className="embla__slide" key={index}>
              <Link href={"#"} className="custom-link-rounded">
                <Image
                  className="custom-brand-rounded"
                  priority width={130} height={130} src={brand.url}
                  alt={brand.title} />
              </Link>
              <h4 className="font-bold text-center">{brand.title}</h4>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel