import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index.mjs";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer
    /* compose(applyMiddleware(thunk)) */
)
console.log(store)
export default store;