import { createReducer } from "@reduxjs/toolkit";
import { fetchState, removeObject } from "../action/stateAction";

const initialState = {
    loading: false,
    data: [],
};

const stateReducer = createReducer(initialState, {
    [fetchState.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [fetchState.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [fetchState.pending]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [removeObject.type]: (state, action) => {
        const deletedObject = state.data.findIndex(obj => obj.id === action.payload);
        state.data.splice(deletedObject, 1);
    },
});

export default stateReducer;