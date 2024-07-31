"use client"

import Product from "@/data/model/Product"
import Image from "next/image"

import useBasket from "@/data/hooks/useBasket"

export interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { name, imageURL, description, price } = product
    const { add } = useBasket()

    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image
                    src={imageURL}
                    alt={name}
                    fill
                    className="object-cover"
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
                        className="border rounded-full px-5 py-1 tex-xs"
                        onClick={() => add(product)}
                    >
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    )
}
