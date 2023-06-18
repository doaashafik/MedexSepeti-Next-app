import Image from "next/image";
import "./Card.scss";
import { productType } from "@/app/components/NewProducts/Types";
import Link from "next/link";

const Content = ({title, value}: { title: string, value: number | string}) => {
    return (
        <section className="action">
            <p className="action-title">{title}</p>
            <p>{value || "N/A"}</p>
        </section>
    )
}
export default function Card({ product, tag }: { product: productType, tag: string }) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <Link href={"#"} className="custom-card-img-container">
                <Image src={product.image} alt={product.title} width={150} height={170} priority />
            </Link>
            <div className="card-body">
                <h5>
                    <span className="m-2">{product.title}</span>
                    {product.totalViews > 0 && (
                    <div className="badge badge-secondary">{product.totalViews}</div>
                    )}
                </h5>
                <div className="card-actions d-flex justify-content-between">
                    <Content title="Date" value={product.creationDate}/>
                    <Content title="Price" value={product.price} />
                    <Content title="wishList" value={product["customers-wishlist"]} />

                </div>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{tag}</div>
                </div>
            </div>
        </div>
    );
}
