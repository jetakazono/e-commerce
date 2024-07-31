"use client"
import React, { createContext, useState } from "react"
import BasketItem from "../model/BasketItem"
import Product from "../model/Product"

export interface BasketContextProps {
    items: BasketItem[]
    itemsQtd: number
    add: (item: Product) => void
}

export interface BasketProviderProps {
    children: React.ReactNode
}

const BasketContext = createContext<BasketContextProps>({} as any)

export function BasketProvider({ children }: BasketProviderProps) {
    const [items, setItems] = useState<BasketItem[]>([])

    const addToBasket = (item: Product) => {
        setItems((prevItems) => {
            const itemIndex = prevItems.findIndex(
                (basketItem) => basketItem.product.id === item.id
            )

            if (itemIndex === -1) {
                return [...prevItems, { product: item, quantity: 1 }]
            } else {
                const updatedItems = [...prevItems]
                updatedItems[itemIndex] = {
                    ...updatedItems[itemIndex],
                    quantity: updatedItems[itemIndex].quantity + 1,
                }
                return updatedItems
            }
        })
    }

    return (
        <BasketContext.Provider
            value={{
                items,
                get itemsQtd() {
                    return items.reduce(
                        (total, item) => total + item.quantity,
                        0
                    )
                },
                add: addToBasket,
            }}
        >
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext
