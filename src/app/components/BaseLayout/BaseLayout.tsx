import Navbar from "@/app/lib/Navbar/Navbar"

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}