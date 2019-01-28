import { createStore, combineReducers, applyMiddleware } from 'redux'
import { chatBotReducer } from './reducers/chatbotReducers'
import reduxThunk from 'redux-thunk';

const store = createStore(
    combineReducers({ chatBotReducer }),
    applyMiddleware(reduxThunk)
)

export default store