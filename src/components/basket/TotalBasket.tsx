import BasketItem from "@/data/model/BasketItem"

export interface TotalBasketProp {
    items: BasketItem[]
}

export const TotalBasket = ({ items }: TotalBasketProp) => {
    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    )

    return (
        <div className="flex items-end justify-between bg-zinc-900 rounded-md p-4 md:p-7 mt-5">
            <div className="flex flex-col justify-between">
                <span className="text-zinc-500">Total </span>
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                    £ {total.toFixed(2)}
                </span>
            </div>
            <button className="text-lime-300 border border-orange-400 px-2 md:px-4 py-2 rounded-md bg-orange-600/20">
                Proceed to checkout
            </button>
        </div>
    )
}
