"use client";

import { productType } from "./Types";
import Card from "@/app/lib/Card/Card";
import EmblaCarousel from "@/app/lib/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./NewProducts.scss";


const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
}
const SLIDE_COUNT = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default async function MostViewedProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    return (
        <div className="product-card">
            <h3>Products That Just Arrived</h3>
            <EmblaCarousel options={OPTIONS} slides={SLIDES} data={[]} arrowsColor={"#22b0f0"} slidesToShow={5}>
                {products.map((product, index) => (
                    <div key={index}>
                        <Card product={product} tag={"normal"} />
                    </div>))}
            </EmblaCarousel>
        </div>
    );
}
