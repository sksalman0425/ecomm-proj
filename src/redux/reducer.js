import { ADD_TO_CART } from "./constant"



// export const cartData = (data = [], action) => {
//     if (action.type === ADD_TO_CART) {
//     console.warn("ADD_TO_CART condtion ", action)

//         // some logic
//         return data
//     } else {
//         return "no action called"
//     }
// }




export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        default:
            return []
    }
}