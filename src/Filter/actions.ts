import { SET_FILTER } from "./actionTypes";
import { filterTypes } from "./constant";

export const setFilter = (filterType: filterTypes) => ({
  type: SET_FILTER,
  filter: filterType,
});
