import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import nftReducer from "./nft/nftReducer";

const rootReducer = combineReducers({
    nfts: nftReducer,
    cart: cartReducer,
})
export default rootReducer