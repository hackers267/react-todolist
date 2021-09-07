import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

type Action = {
  id: number;
  type: Symbol;
  done: boolean;
  text: string;
};

export function reducer(state: Action[] = [], action: Action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((item) => {
        if (action.id !== item.id) {
          return item;
        }
        return { ...item, done: !item.done };
      });
    case ADD_TODO:
      const { type, ...current } = action;
      return [...state, current];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
