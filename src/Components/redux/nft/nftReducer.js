import { FETCH_NFT_FAILURE, FETCH_NFT_REQUEST, FETCH_NFT_SUCCESS } from './nftType'
const initialState = {
    loading: false,
    nfts: [],
    error: "",
}
const nftReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NFT_REQUEST:
            return { ...state, loading: true }
        case FETCH_NFT_FAILURE:
            return { ...state, loading: false, error: action.payload, nfts: [] }
        case FETCH_NFT_SUCCESS:
            return { ...state, loading: false, error: "", nfts: action.payload }
        default:
            return state
    }
}
export default nftReducer;