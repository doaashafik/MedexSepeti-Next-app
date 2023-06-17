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
        <section>
            <h2 className="text-center">Brands</h2>
            <EmblaCarousel options={OPTIONS} slides={SLIDES}/>
        </section>
    )
}
