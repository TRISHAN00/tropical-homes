import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import homeReducer from '../redux/home';
import postReducer from '../redux/post';
import contactReducer from '../redux/contact';

// this is to set a flag for initial server renders
export const SET_IS_SERVER = 'SET_IS_SERVER'

function serverCheck(state = {isServer: false}, action) {
    const {type} = action
    switch (type) {
        case SET_IS_SERVER: {
            return {...state, isServer: true}
        }
        default:
            return state
    }
}


// combined all reducers
const combinedReducer = combineReducers({
    serverCheck,
    homeReducer,
    postReducer,
    contactReducer
})

// master reducer
const masterReducer = (state, actions) => {
    if (actions.type === HYDRATE) {
        return {...state, ...actions.payload}
    } else {
        return combinedReducer(state, actions)
    }
}

// main store
export const store = () => configureStore({
    reducer: masterReducer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const wrapper = createWrapper(store) //,{debug: true} -- if need debug
