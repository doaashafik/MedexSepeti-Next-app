import Carousel from "@/app/lib/Carousel/Carousel";
import { promotedProductsTypes } from "./Types";
import "./PromotedProducts.scss";

import Image from "next/image";
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
};
export default function PromotedProducts({
    products,
}: {
    products: promotedProductsTypes[];
}) {
    return (
        <Carousel settings={settings}>
            {products.map((product) => (
                <div key={product.id}>
                    <Image alt={product.url} src={product.url} width={1000} className="custom-promoted-img-size" height={300} />
                </div>
            ))}
        </Carousel>
    );
}
