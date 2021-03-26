import { createReducer } from "@reduxjs/toolkit";
import { fetchState } from "../action/stateAction";

const initialState = {
    loading: false,
    data: [],
    error: [],
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
});

export default stateReducer