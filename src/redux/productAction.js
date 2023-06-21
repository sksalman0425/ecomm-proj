import { PRODUCT_LIST,SEARCH_PRODUCT } from "./constant"

export const productList = () => {

    return {
        type: PRODUCT_LIST,
     //no need to pass  data to saga bz saga get data from async operation i.e. API
    }
}
export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}
