"use client"

import useBasket from "@/data/hooks/useBasket"
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

export default function Basket() {
    const { number } = useBasket()

    return (
        <Link href="/your-basket" className="flex flex-col items-center mt-2">
            <div className="relative">
                <span className="absolute -right-2.5 -top-2.5 rounded-full size-5 bg-orange-500 text-center text-xs flex justify-center items-center">
                    {number}
                </span>
                <IconShoppingCart size={32} stroke={1} className="-mt-2" />
            </div>
        </Link>
    )
}
