import axios from 'axios';

export const CHATBOT_SUBMIT_REQUEST = 'CHATBOT_SUBMIT_REQUEST'
export const CHATBOT_SUBMIT_SUCCESS = 'CHATBOT_SUBMIT_SUCCESS'
export const CHATBOT_SUBMIT_FAILURE = 'CHATBOT_SUBMIT_FAILURE'

export function sendRequestToBot(requestData) {
    return (dispatch) => {
        dispatch({
            type: CHATBOT_SUBMIT_REQUEST
        })
        dispatch({
            type: CHATBOT_SUBMIT_SUCCESS,
            payload: requestData
        })

        const api = "https://us-central1-chat-bot-reactjs.cloudfunctions.net/api/bot"

        return axios
        .post(api, { text: requestData.message })
        .then((result) => {
            const value = result.data[0].queryResult.fulfillmentText
            const userRequest = {
                user: "BOT",
                message: value
            }

            dispatch({
                type: CHATBOT_SUBMIT_SUCCESS,
                payload: userRequest
            })
        })
        .catch((error) => {
            dispatch({
                type: CHATBOT_SUBMIT_FAILURE,
                error
            })
        })
    }
}