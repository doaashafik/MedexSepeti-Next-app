import Carousel from "@/app/lib/Carousel/Carousel";
import Image from "next/image";
import { productType } from "./Types";
import Card from "@/app/lib/Card/Card";
import "./NewProducts.scss";

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: false,
    fade: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1
};
export default async function NewAddedProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    return (
        <div className="custom-new-product">
            <h2 className="text-center">Products that just Arrived</h2>
            <Carousel settings={settings}>
                {products.map((product) => (
                    <div key={product.title}>
                        <Card product={product} />
                    </div>))}
            </Carousel>
        </div>
    );
}
