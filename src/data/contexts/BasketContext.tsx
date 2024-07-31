"use client"
import React, { createContext, useState } from "react"

export interface BasketContextProps {
    number: number
    decrement: () => void
    increment: () => void
}

export interface BasketProviderProps {
    children: React.ReactNode
}

const BasketContext = createContext<BasketContextProps>({} as any)

export function BasketProvider({ children }: BasketProviderProps) {
    const [number, setNumber] = useState(0)

    return (
        <BasketContext.Provider
            value={{
                number,
                decrement: () => {
                    setNumber(number + 1)
                },
                increment: () => {
                    setNumber(number - 1)
                },
            }}
        >
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext
