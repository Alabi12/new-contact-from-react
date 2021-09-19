import { applyMiddleware, compose, createStore } from "redux";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import firebase from "../firebase/config"
import UserReducer from "../Reducer/UserReducer"
import thunk from "redux-thunk";


const Store = createStore(UserReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, 
        getFirestore})), reduxReactFirebase(firebase), reduxFirestore(firebase)
));

export default Store;