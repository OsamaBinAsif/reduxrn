import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let nextId = 0;
export const addTodoo = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});

export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    id
})