import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import nftReducer from "./nft/nftReducer";
import savedReducer from "./saved/savedReducer";

const rootReducer = combineReducers({
    nfts: nftReducer,
    cart: cartReducer,
    saved: savedReducer,
})
export default rootReducer