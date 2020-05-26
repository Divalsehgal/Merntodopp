import {
  CREATE_TODO,
  GET_TODO,
  GET_TODO_BY_ID,
  UPDATE_TODO_BY_ID,
} from "../actions/types";
const DEFAULT_STATE = {
  todo: [],
  todobyid: {},
};
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
      };
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todobyid: action.payload,
      };
    case UPDATE_TODO_BY_ID:
      console.log(action.payload.id, action.payload.obj);
      let todo = [...state.todo];
      todo = todo.map((item, index) => {
        if (item._id === action.payload.id) {
          item = action.payload.obj;
          return item;
        }
        return item;
      });

      return {
        ...state,
        todo: todo,
      };
    default:
      return state;
  }
};

export default rootReducer;
