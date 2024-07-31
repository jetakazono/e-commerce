import { useContext } from "react"
import BasketContext from "../contexts/BasketContext"

const useBasket = () => {
    return useContext(BasketContext)
}

export default useBasket
