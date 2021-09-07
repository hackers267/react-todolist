import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./TodoList";

const reducer = combineReducers({
  // @ts-ignore
  todos: todoReducer,
});

export default createStore(reducer);
