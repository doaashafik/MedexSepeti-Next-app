export interface productType {
    image: string;
    creationDate: string;
    "customers-wishlist": number;
    "totalViews": number;
    "title": string,
    "description": string;
    "price": number;
    tags?: string[] | null
}