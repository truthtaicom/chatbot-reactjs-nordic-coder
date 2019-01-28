import * as actions from '../actions/chatbotActions'

const initialState = {
    load: false,
    data: [],
    error: null
}

export function chatBotReducer(state = initialState, action) {
    switch (action.type) {
        case actions.CHATBOT_SUBMIT_REQUEST:
            return {
                ...state,
                load: true
            }
        case actions.CHATBOT_SUBMIT_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                load: false
            }
        case actions.CHATBOT_SUBMIT_FAILURE:
            return {
                ...state,
                error: action.error,
                load: false
            }
        default:
            return {
                ...state
            }
    }
}