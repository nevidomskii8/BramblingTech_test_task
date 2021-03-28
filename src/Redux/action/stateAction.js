import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchState = createAsyncThunk('pictures/getState', async () => {
    const data = axios.get(`http://localhost:5000/state/getState`).then(
        res => res.data
    );
    return data;
})

export const sortById = createAction('SORT_BY_ID');
export const sortByName = createAction('SORT_BY_NAME');
export const sortByAge = createAction('SORT_BY_AGE');
export const removeObject = createAction('REMOVE_OBJECT');