import * as types from "../constants/ActionTypes";

/**
 * Store todo item
 */
export const storeTodo = (txt) => ({
  type: types.ADD_TODO,
  txt,
});
