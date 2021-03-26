import { createSelector } from "reselect";

export const getStateData = createSelector(
    state => state.state.data,
    data => data
  )