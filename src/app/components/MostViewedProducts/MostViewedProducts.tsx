import Carousel from "@/app/lib/Carousel/Carousel";
import Card from "@/app/lib/Card/Card";
import { productType } from "../NewProducts/Types";

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
export default async function MostViewedProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    return (
        <div className="custom-product">
            <h2 className="text-center">Most Viewed Products</h2>
            <Carousel settings={settings}>
                {products.map((product, index) => (
                    <div key={product.title}>
                        <Card product={product} tag={index <= 4 ? "most-viewed": "normal"} />
                    </div>))}
            </Carousel>
        </div>
    );
}
