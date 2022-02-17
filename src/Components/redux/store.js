import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import nftReducer from "./nft/nftReducer";

const store = createStore(nftReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;