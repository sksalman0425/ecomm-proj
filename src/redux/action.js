import { ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action addToCart is called", data)
    return {
        type: ADD_TO_CART,
        data:data
    }
}
export const removeFromCart = (data) => {
    console.warn("action removeFromCart is called", data)
    return {
        type: REMOVE_FROM_CART,
        data:data
    }
}
//for emptying cart we don't need data
export const emptyCart = () => {
    console.warn("action emptyCart is called")
    return {
        type: EMPTY_CART,
      
    }
}