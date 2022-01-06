/* eslint-disable import/first */
const redux = require("redux")
const {combineReducers, createStore, applyMiddleware} = redux
import thunk from "redux-thunk"
import countReducer from "./count"

import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"
import userReducer from "./user"

const rootReducer = countReducer
/* combineReducers({
    count: countReducer
    ,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer,
    user: userReducer  
})*/

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

export default store