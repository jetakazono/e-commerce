import Basket from "./Basket"
import Logo from "./Logo"

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-zinc-800 h-20 px-10 sticky w-full top-0 z-10">
            <Logo />
            <Basket />
        </header>
    )
}
