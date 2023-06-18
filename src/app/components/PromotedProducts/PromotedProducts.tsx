"use client";
import { promotedProductsTypes } from "./Types";
import { EmblaOptionsType } from 'embla-carousel-react'
import EmblaCarousel from "@/app/lib/Carousel/Carousel";
import "./PromotedProducts.scss";




const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function PromotedProducts({
    products
}: { products: promotedProductsTypes[] }) {
    return (
        <section className="promoted-products">
            <EmblaCarousel
                options={OPTIONS}
                slides={SLIDES}
                arrowsColor={"#28527a"}
                data={products}
                slidesToShow={1}>
                {products.map((product) => (
                    <div key={product.id} style={{ width: "1240px", height: "30rem" }}>
                        <img
                            alt={product.url}
                            src={product.url}
                        />
                    </div>
                ))}
            </EmblaCarousel>
        </section>
    );
}
