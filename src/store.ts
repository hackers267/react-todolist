import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./TodoList";

const reducer = combineReducers({
  todos: todoReducer,
});
export default createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
