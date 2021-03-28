import { createReducer } from "@reduxjs/toolkit";
import { setStorage, } from "../action/storageAction";

let initialState;

try {
    initialState = JSON.parse(localStorage.getItem('storage') || "{}");
} catch (e) {
    console.log('Local storage is empty');
}

export const storageReducer = createReducer(initialState, {
    [setStorage.type]: (state, action) => {
            return action.payload
    },
});

export default storageReducer;