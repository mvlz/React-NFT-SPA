import { ADD_CART, DELETE_CART } from "./cartType"


export function addCart(product) {
    return {
        type: ADD_CART,
        payload: product,
    }
}
export function deleteCart(id) {
    return {
        type: DELETE_CART,
        payload: id,
    }
}