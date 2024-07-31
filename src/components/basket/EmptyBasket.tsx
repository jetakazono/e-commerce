import { IconShoppingCartOff } from "@tabler/icons-react"
import Link from "next/link"

export const EmptyBasket = () => {
    return (
        <div className="flex justify-center items-center flex-col text-center gap-7">
            <IconShoppingCartOff size={150} stroke={0.5} />
            <div className="flex justify-center items-center flex-col text-center gap-5">
                <h2 className="text-4xl text-zinc-400">
                    Uh-oh, your cart is empty!
                </h2>
                <p className="text-zinc-200">
                    Add products by clicking the button below.
                </p>
            </div>
            <Link
                href="/"
                className="text-lime-300 border border-orange-400  px-4 py-2 rounded-md bg-orange-600/20"
            >
                Start Shopping
            </Link>
        </div>
    )
}
