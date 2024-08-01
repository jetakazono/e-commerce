"use client"
import Image from "next/image"
import BasketItem from "@/data/model/BasketItem"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import { TotalBasket } from "./TotalBasket"

export interface WidgetBasketItemProps {
    item: BasketItem
    add?: (item: BasketItem) => void
    remove?: (item: BasketItem) => void
}

export default function WidgetBasketItem({
    item,
    add,
    remove,
}: WidgetBasketItemProps) {
    const { name, imageURL, description, price } = item.product

    return (
        <div className="flex flex-col md:flex-row items-center gap-5 bg-zinc-900 rounded-md overflow-hidden py-5 md:py-0">
            <div className="relative w-28 h-28">
                <Image
                    src={imageURL}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center flex-1 items-center md:items-start px-4">
                <span className="text-xl font-bold">{name}</span>
                <span className="flex-1 text-sm text-zinc-400 max-w-80 md:max-w-full">
                    {description}
                </span>
                <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
                    <span className="">£{price.toFixed(2)}</span>
                    <IconX />
                    <span>{item.quantity}</span>
                    <span>=</span>
                    <span className="text-orange-400">
                        £{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 pr-4">
                <button
                    onClick={() => {
                        remove?.(item)
                    }}
                >
                    <IconMinus />
                </button>
                <span className="bg-black text-sm px-4 py-2 rounded-md">
                    {item.quantity}
                </span>
                <button
                    onClick={() => {
                        add?.(item)
                    }}
                >
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}
