import { ADD_CARD_TO_DETAILS } from "../actions/actionTypes"

const initialState = {
    postData: {}
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD_TO_DETAILS:
            return {
                ...state,
                postData: action.payload
            }
        default:
            return state
    }
}

export default detailsReducer