"use client";
import Divider from "@/app/lib/Divider/Divider";
import Header from "@/app/lib/Header/Header"
import MegaHeader from "@/app/lib/MegaHeader/MegaHeaderDesktop"
import SSRProvider from 'react-bootstrap/SSRProvider';


export default function BaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SSRProvider>
            <Header />
            <section className="mega-header-desktop">
            <MegaHeader />
            </section>
            {children}
        </SSRProvider>
    )
}