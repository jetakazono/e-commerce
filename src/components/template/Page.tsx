import Header from "./Header"

export interface WrapperProps {
    children: React.ReactNode
    className?: string
}

export default function Page({ children, className }: WrapperProps) {
    return (
        <div className="flex flex-col">
            <Header />
            <main>{children}</main>
        </div>
    )
}
