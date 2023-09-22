import Reducers from "../reducers/Reducers"
const {createStore, combineReducers} = require("redux")
const rootReducer = combineReducers({Reducers, })
const store = createStore(rootReducer)
export default store
