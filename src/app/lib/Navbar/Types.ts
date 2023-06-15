export const sub_categories: CategoryType[] = [
    {
        name: "Pharmacy & Personal Care",
        id: 1,
        categories: [
            { url: "#", name: "Special Offers" },
            { url: "", name: "Personel Care" },
            { url: "#", name: "Eyecare & Earcare" },
            { url: "", name: "Sexual Health" },
            { url: "#", name: "First Aid" }]
    },
    {
        name: "Medical Facilities",
        id: 1,
        categories: [
            { url: "#", name: "Surgery Unit" },
            { url: "#", name: "Medical Technical Facilities" }]
    },
    {
        name: "Specialties Products",
        id: 1,
        categories: [
            { url: "", name: "Podiatry" },
            { url: "#", name: " Dermatology" },
            { url: "#", name: "Primary Care " },
            { url: "#", name: "Cardiology" }
        ]
    },
    {
        name: "Dental Student",
        id: 2,
        categories: [
            { url: "#", name: "Restoratif" },
            { url: "", name: "Endodonti" },
            { url: "#", name: "Laboratuvar Malzemeleri" },
            { url: "", name: "Ortodonti" },
            { url: "#", name: "Genel" }]
    },
    {
        name: "Dental Sterilization",
        id: 2,
        categories: [
            { url: "#", name: "Otoklav Ekipmanları" },
            { url: "#", name: "Otoklav Cihazları" }]
    },

    {
        name: "Clinic Interior",
        id: 2,
        categories: [
            { url: "", name: "Clinical Devices" },
            { url: "#", name: " Dental Units" },
            { url: "#", name: "Dental Clinic Cabinets" },
            { url: "#", name: "Other Dental Equipment" }
        ]
    },
    {
        name: "Orthodontic Equipment",
        id: 3,
        categories: [
            { url: "#", name: "Adhesives" },
            { url: "", name: "Orthodontic Brackets" },
            { url: "#", name: "Orthodontics Transparent Braces" },
            { url: "#", name: "Orthodontic Rubber" },
            { url: "#", name: "Cheeck Retractors" },
            { url: "#", name: "Bracket Holders" },
            { url: "#", name: "Ortho Hooks" },
            { url: "#", name: "Orthodontic Alginate" }]
    },
    {
        name: "Orthodontic Hand Tools",
        id: 3,
        categories: [
            { url: "#", name: "and Pusher" },
            { url: "#", name: "Pliers" },
            { url: "#", name: "Other Orthodontics" },
            { url: "#", name: "Medical Technical Facilities" }]
    }
]
export const main_categories: MainCategoriesTypes = {
    1: "Medical",
    3: "Orthodontics",
    2: "Equipments"
}
export const sub_categories_logos: MainCategoriesLogosTypes = {
    1: ["https://admin.medexsepeti.com/graph/uploads/200x150/category_images/z7pqzZEgPbU1lykrxxIbCvQGZpIqsSfjHGQRXHwa.jpg", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/6EH9c1giZV3SYt2W9Cl50dzNIHQxB2GxJwIBH9aM.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/rSJCXgEwplgZ9fXBnYcV2Zq7PLSFH8GmJKcUoPbA.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/9g7Ug6Ej4GROWS5rD7gUh60gVAPBgRxANtUxdwml.jpg"],
    2: ["https://admin.medexsepeti.com/graph/uploads/200x150/category_images/z7pqzZEgPbU1lykrxxIbCvQGZpIqsSfjHGQRXHwa.jpg", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/6EH9c1giZV3SYt2W9Cl50dzNIHQxB2GxJwIBH9aM.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/rSJCXgEwplgZ9fXBnYcV2Zq7PLSFH8GmJKcUoPbA.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/9g7Ug6Ej4GROWS5rD7gUh60gVAPBgRxANtUxdwml.jpg"],
    3: ["https://admin.medexsepeti.com/graph/uploads/200x150/category_images/6ntI5kCoRuiPNUHyLt40FZHHPqmnUPJ8E0H7zz9d.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/5buMRLFBhX2faEJ6ge8yohJppQPg4tIPm77SSrD0.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/QQRQLL3NpvKQyv85rg8XlrPnNQ3srnU7lsVyTs2z.png", "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/DGPzdR0b3YsulCZDWovEHzp5I0Z5OWrdsI3omfhW.png"],

}
export const categoriesIds = [1,2,3];
export interface CategoryType {
    name: string;
    id: number;
    categories: {
        url: string;
        name: string;
    }[];
}
export interface MainCategoriesTypes {
    [id: number]: string
}
export interface MainCategoriesLogosTypes {
    [id: number]: string[]
}

