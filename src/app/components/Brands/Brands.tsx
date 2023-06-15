import Carousel from "@/app/lib/Carousel/Carousel";
import { brands } from "./Data";
import Image from "next/image";
import Link from "next/link";
import "./Brands.scss";
import { Fragment } from "react";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    slidesPerRow: 1
}
export default function Brands() {
    return (
        <Carousel settings={settings}>
            {brands.map(brand => (
                <div key={brand.title}>
                    <div className="custom-slick-item" key={brand.title}>
                        <Link href={"#"} className="custom-link-rounded">
                            <Image
                                className="custom-brand-rounded"
                                priority width={130} height={130} src={brand.url}
                                alt={brand.title} />
                        </Link>
                        <h4 className="font-bold text-center">{brand.title}</h4>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
