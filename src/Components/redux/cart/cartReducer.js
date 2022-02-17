import { ADD_CART, DELETE_CART } from "./cartType"
const initialState = {
    cart: [],
    total: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const updatedCart = [...state.cart]
            const updatedItemIndex = updatedCart.findIndex(i => i.id === action.payload.id)
            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload })
                return { ...state, cart: updatedCart }
            }
            return { ...state, cart: updatedCart }
        case DELETE_CART:
            const Cart = [...state.cart]
            const filteredCart = Cart.filter(item => item.id !== action.payload)

            return { ...state, cart: filteredCart }

        default:
            return state
    }
}
export default cartReducer 