"use client";
import EmblaCarousel from "@/app/lib/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { productType } from "../NewProducts/Types";
import HorizontalCard from "@/app/lib/HorizontalCard/HorizontalCard";
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
            <h4>Most Viewed Products</h4>
            <EmblaCarousel options={OPTIONS}
                slides={SLIDES} arrowsColor={"#22b0f0"} data={[]} slidesToShow={6}>
                {products.map((product, index) => (
                    <div className="embla__slide" key={index}>
                        <div className="embla__slide__inner">
                            <HorizontalCard product={product} tag={index <= 4 ? "most-viewed" : "normal"} />
                        </div>
                        {
                            products[index + 1] &&
                            <div className="embla__slide__inner">
                                <HorizontalCard product={products[index + 1]} tag={index <= 4 ? "most-viewed" : "normal"} />
                            </div>
                        }

                    </div>
                ))}
            </EmblaCarousel>
        </div>
    );
}
