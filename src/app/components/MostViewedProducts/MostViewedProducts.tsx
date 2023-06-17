"use client";
import Card from "@/app/lib/Card/Card";
import EmblaCarousel from "@/app/lib/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { productType } from "../NewProducts/Types";
import "./MostViewedProduct.scss";

const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
}
const SLIDE_COUNT = 14
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default async function MostViewedProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    return (
        <div className="product-card">
            <h3>Most Viewed Products</h3>
            <EmblaCarousel options={OPTIONS} slides={SLIDES} arrowsColor={"#22b0f0"} slidesToShow={5}>
                {products.map((product, index) => (
                    <div key={index}>
                        <Card product={product} tag={index <= 4 ? "most-viewed" : "normal"} />
                    </div>))}
            </EmblaCarousel>
        </div>
    );
}
