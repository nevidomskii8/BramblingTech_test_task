import { createSelector } from "reselect";

export const getStateFilter = createSelector(
    state => state.storage,
    data => data
  );