"use client"
import React, { createContext, useEffect, useState } from "react"
import BasketItem from "../model/BasketItem"
import Product from "../model/Product"
import useLocalStorage from "../hooks/useLocalStorage"

export interface BasketContextProps {
    items: BasketItem[]
    itemsQtd: number
    add: (item: Product) => void
    remove: (item: Product) => void
}

export interface BasketProviderProps {
    children: React.ReactNode
}

const BasketContext = createContext<BasketContextProps>({} as any)

export function BasketProvider({ children }: BasketProviderProps) {
    const { get, set } = useLocalStorage()
    const [items, setItems] = useState<BasketItem[]>([])

    useEffect(() => {
        const basket = get("basket")

        if (basket) {
            setItems(basket)
        }
    }, [get])

    const addToBasket = (item: Product) => {
        const itemIndex = items.findIndex(
            (basketItem) => basketItem.product.id === item.id
        )

        if (itemIndex === -1) {
            updateItems([...items, { product: item, quantity: 1 }])
        } else {
            const newItems = [...items]
            newItems[itemIndex].quantity++
            updateItems(newItems)
        }
    }

    const removeFromBasket = (item: Product) => {
        const newItems = items
            .map((basketItem) => {
                if (basketItem.product.id === item.id) {
                    basketItem.quantity--
                }
                return basketItem
            })
            .filter((i) => i?.quantity > 0)

        updateItems(newItems)
    }

    const updateItems = (newItems: BasketItem[]) => {
        setItems(newItems)
        set("basket", newItems)
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
                remove: removeFromBasket,
            }}
        >
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext
