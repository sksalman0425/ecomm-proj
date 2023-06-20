import { SET_PRODUCT_LIST } from "./constant"



export const productData = (data = [], action) => {
    switch (action.type) {
//action.js call saga and saga directly call reducer no no need to used PRODUCT_LIST here
        case SET_PRODUCT_LIST:
        console.warn("SET_PRODUCT_LIST condition ", action)
        return [...action.data]
        default:
            return data
    }
}