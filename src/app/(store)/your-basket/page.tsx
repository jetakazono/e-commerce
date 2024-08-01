"use client"

import { EmptyBasket } from "@/components/basket/EmptyBasket"
import { TotalBasket } from "@/components/basket/TotalBasket"
import WidgetBasketItem from "@/components/basket/WidgetBasketItem"
import Page from "@/components/template/Page"
import useBasket from "@/data/hooks/useBasket"

export default function BasketPage() {
    const { items, add, remove, itemsQtd } = useBasket()

    return (
        <Page>
            {itemsQtd ? (
                <>
                    <div className="flex flex-col gap-5">
                        {items.map((item) => {
                            return (
                                <WidgetBasketItem
                                    key={item.product.id}
                                    item={item}
                                    add={(item) => add(item.product)}
                                    remove={(item) => remove(item.product)}
                                />
                            )
                        })}
                    </div>
                    <TotalBasket items={items} />
                </>
            ) : (
                <EmptyBasket />
            )}
        </Page>
    )
}
