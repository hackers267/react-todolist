import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

let id = 1;

export const add_todo = (text: string) => ({
  type: ADD_TODO,
  text,
  done: false,
  id: id++,
});

export const remove_todo = (id: string) => ({
  type: REMOVE_TODO,
  id,
});

export const toggle_todo = (id: string) => ({
  type: TOGGLE_TODO,
  id,
});
