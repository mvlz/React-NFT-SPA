export const ADD_CART = 'ADD_CART';


export function AddCart(product) {
    return {
        type: ADD_CART,
        payload: product,
    }
}