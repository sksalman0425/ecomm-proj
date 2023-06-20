import { PRODUCT_LIST } from "./constant"

export const productList = () => {

    return {
        type: PRODUCT_LIST,
     //no need to pass  data to saga bz saga get data from async operation i.e. API
    }
}
