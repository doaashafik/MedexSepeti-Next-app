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
export default async function BestSellingProducts({ promise }: { promise: Promise<productType[]> }) {
    const products = await promise;
    console.log(products, 'best')
    return (
        <div className="custom-new-product">
            <h2 className="text-center">Products Best Selling</h2>
            <Carousel settings={settings}>
                {products.map((product) => (
                    <div key={product.title}>
                        <Card product={product} />
                    </div>))}
            </Carousel>
        </div>
    );
}
