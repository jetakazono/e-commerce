"use client"

import Product from "@/data/model/Product"
import Image from "next/image"

import useBasket from "@/data/hooks/useBasket"
import { useState } from "react"

export interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { name, imageURL, description, price } = product
    const { add } = useBasket()
    const [btnText, setBtnText] = useState("Move to Basket")

    return (
        <div className="flex flex-col bg-zinc-900 w-full ">
            <div className="relative w-full h-52">
                <Image
                    src={imageURL}
                    alt={name}
                    fill
                    className="object-cover hover:brightness-50 transition-all ease-in-out"
                />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="flex-1 text-sm text-zinc-400">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2">
                        £{price.toFixed(2)}
                    </span>
                    <button
                        className="border rounded-full px-5 py-1 tex-xs hover:bg-zinc-500 hover:border-transparent"
                        disabled={btnText === "In basket"}
                        onClick={() => {
                            setBtnText("In basket")
                            setTimeout(() => {
                                setBtnText("Move to Basket")
                            }, 5000)
                            add(product)
                        }}
                    >
                        {btnText}
                    </button>
                </div>
            </div>
        </div>
    )
}
