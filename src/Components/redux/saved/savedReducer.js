import { ADD_SAVED, DELETE_SAVED } from "./savedType"
const initialState = {
    saved: [],
}

const savedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAVED:
            const updatedSaved = [...state.saved]
            const updatedItemIndex = updatedSaved.findIndex(i => i.id === action.payload.id)
            if (updatedItemIndex < 0) {
                updatedSaved.push({ ...action.payload })
                return { ...state, saved: updatedSaved }
            } else {
                updatedSaved.splice(updatedItemIndex, 1)
                return { ...state, saved: updatedSaved }
            }

        case DELETE_SAVED:
            const saved = [...state.saved]
            const filteredSaved = saved.filter(item => item.id !== action.payload)

            return { ...state, saved: filteredSaved }

        default:
            return state;
    }
}
export default savedReducer 