import Footer from "./Footer"
import Header from "./Header"

export interface WrapperProps {
    children: React.ReactNode
    className?: string
}

export default function Page({ children, className }: WrapperProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main
                className={`w-full xl:w-[1200px] mx-auto flex-1 py-10 px-4  ${
                    className ?? ""
                }`}
            >
                {children}
            </main>
            <Footer />
        </div>
    )
}
