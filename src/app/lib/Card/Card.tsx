import Image from "next/image";
import "./Card.scss";
import { productType } from "@/app/components/NewProducts/Types";
import Link from "next/link";

export default function Card({ product, tag }: { product: productType, tag: string }) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <Link href={"#"} className="custom-card-img-container">
                <Image src={product.image} alt={product.title} width={150} height={250} priority />
            </Link>
            <div className="card-body">
                <h5 className="font-bold">
                    <span className="m-2">{product.title}</span>
                    {product.totalViews > 0 && (
                        <div className="badge badge-secondary">{product.totalViews}</div>
                    )}
                </h5>
                <p className="card-description">{product.description}</p>
                <div className="card-actions justify-center">

                    <p><strong>Date</strong>: {product.creationDate}</p>
                    {" - "}
                    <p><strong>Price</strong>: {product.price}</p>
                    {<p><strong>wishList</strong>: {product["customers-wishlist"]}</p>}

                </div>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{tag}</div>
                </div>
            </div>
        </div>
    );
}
