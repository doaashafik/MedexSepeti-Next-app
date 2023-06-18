"use client";

import Card from "@/app/lib/Card/Card";
import { productType } from "../NewProducts/Types";
import EmblaCarousel from "@/app/lib/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";


const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default async function MostViewedProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    return (
        <div className="product-card pb-0">
            <h4>Best Selling</h4>
            <EmblaCarousel options={OPTIONS} slides={SLIDES} data={[]} arrowsColor={"#22b0f0"} slidesToShow={5}>
                {products.map((product, index) => (
                    <div key={index}>
                        <Card product={product} tag={index <= 4 ? "best-selling" : "normal"} />
                    </div>))}
            </EmblaCarousel>
        </div>
    );
}
