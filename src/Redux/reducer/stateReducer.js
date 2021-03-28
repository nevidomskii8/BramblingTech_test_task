import { createReducer } from "@reduxjs/toolkit";
import { fetchState, removeObject, sortByAge, sortById, sortByName } from "../action/stateAction";
import { ageAscending, ageDiscending, idAscending, idDiscending, nameAscending, nameDiscending } from "./sortHandler";

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
    [sortById.type]: (state, action) => {
         state.data = action.payload === 'discending'
            ? state.data.sort(idAscending)
            : state.data.sort(idDiscending)
    },
    [sortByName.type]: (state, action) => {
        state.data =  action.payload === 'discending'
            ? state.data.sort(nameAscending)
            : state.data.sort(nameDiscending)
    },
    [sortByAge.type]: (state, action) => {
        state.data = action.payload === 'discending'
            ? state.data.sort(ageAscending)
            : state.data.sort(ageDiscending)
    },
    [removeObject.type]: (state, action) => {
        const deletedObject = state.data.findIndex(obj => obj.id === action.payload);
        state.data.splice(deletedObject, 1);
    },
});

export default stateReducer;