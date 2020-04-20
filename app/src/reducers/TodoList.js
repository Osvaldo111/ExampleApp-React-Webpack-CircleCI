import { ADD_TODO } from "../constants/ActionTypes";

const init = {
  activities: [],
};

export default function (state = init, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, activities: action.txt };
    default:
      return { ...state };
  }
}
