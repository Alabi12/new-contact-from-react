import { createStore } from "redux";
import UserReducer from "../Reducer/UserReducer"

const Store = createStore(UserReducer)

export default Store;