"use client"

import { BasketProvider } from "@/data/contexts/BasketContext"

export default function Layout(props: any) {
    return <BasketProvider>{props.children}</BasketProvider>
}
