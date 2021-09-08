import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./TodoList";
import { reducer as filterReducer } from "./Filter";

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
export default createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
