import { FETCH_NFT_SUCCESS, FETCH_NFT_REQUEST, FETCH_NFT_FAILURE } from './nftType';
import { getAllData } from "../../../services/CRUDServises";

function fetchNFTRequest() {
    return {
        type: FETCH_NFT_REQUEST,
    }
}
function fetchNFTSuccess(NFTs) {
    return {
        type: FETCH_NFT_SUCCESS,
        payload: NFTs,

    }
}
function fetchNFTFail(error) {
    return {
        type: FETCH_NFT_FAILURE,
        payload: error,
    }
}



export const fetchNFTs = () => {
    return function (dispatch) {
        dispatch(fetchNFTRequest())
        console.log("req");
        getAllData().then(res => {
            const nfts = res.data.assets
            console.log("success");
            dispatch(fetchNFTSuccess(nfts))
        }).catch(error => {
            dispatch(fetchNFTFail(error.message))
            console.log(error.message);
        })
    }
}