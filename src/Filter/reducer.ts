import { SET_FILTER } from "./actionTypes";
import { filterTypes } from "./constant";

export default (state: any = filterTypes.all, action: any) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
