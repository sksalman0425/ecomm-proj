import {takeEvery,put} from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';


function* getProducts(){
    //  console.log("saga called");
    let data = yield fetch(' http://localhost:3500/products');
    data =  yield data.json();
    console.warn("action is called", data)
    yield put({type:SET_PRODUCT_LIST,data})
}
//action.js call saga and saga directly call reducer by using type:SET_PRODUCT_LIST
function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProducts)
}
export default productSaga;