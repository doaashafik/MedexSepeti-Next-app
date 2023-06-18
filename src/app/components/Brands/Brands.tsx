"use client"
import { brands } from "./Data";
import Image from "next/image";
import Link from "next/link";
import "./Brands.scss";
import { EmblaOptionsType } from 'embla-carousel-react'
import EmblaCarousel from "@/app/lib/Carousel/Carousel";


const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps',
}
const SLIDE_COUNT = 14
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Brands() {
  return (
    <section className="brands">
      <h3 className="text-start font-bold brand-text">Brands</h3>
      <EmblaCarousel options={OPTIONS} slides={SLIDES} data={[]} arrowsColor={"#fff"} slidesToShow={8}>
        {brands.map((brand, index) => (
          <div className="embla__slide" key={index}>
            <Link href={"#"} className="link-rounded">
              <Image
                className="brand-rounded"
                priority width={130} height={130} src={brand.url}
                alt={brand.title} />
            </Link>
            <h6 className="text-center mt-2">{brand.title}</h6>
          </div>
        ))}
      </EmblaCarousel>
    </section>
  )
}
