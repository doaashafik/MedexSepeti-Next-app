import Image from "next/image";
import { productType } from "@/app/components/NewProducts/Types";
import Link from "next/link";
import "./HorizontalCard.scss";


export default function HorizontalCard({ product, tag }: { product: productType, tag: string }) {
    return (
        <div className="horizontal-card d-flex flex-row">
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
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tag}</div>
                </div>
            </div>
        </div>
    );
}
