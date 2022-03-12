import { ADD_SAVED, DELETE_SAVED } from "./savedType"


export function deleteSaved(id) {
    return {
        type: DELETE_SAVED,
        payload: id,
    }
}
export function addSaved(product) {
    return {
        type: ADD_SAVED,
        payload: product,
    }
}