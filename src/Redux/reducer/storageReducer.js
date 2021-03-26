import { createReducer } from "@reduxjs/toolkit";
import { setSortParams, setSortCending } from "../action/storageAction";

let initialState;

try {
    initialState = JSON.parse(localStorage.getItem('storage') || "[]")
} catch (e) {
    console.log('Local storage is empty')
}

export const storageReducer = createReducer(initialState, {
    [setSortParams.type]: (state, action) => {
        state.push(action.payload)
    },
    [setSortCending.type]: (state, action) => {
        state.push(action.payload)
    },
});

export default storageReducer;