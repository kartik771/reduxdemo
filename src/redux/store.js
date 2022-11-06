import {createStore} from 'redux'
import BatReducer from "./BatReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(BatReducer, composeWithDevTools());

export default store 