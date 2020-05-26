import {
  CREATE_TODO,
  GET_TODO,
  GET_TODO_BY_ID,
  UPDATE_TODO_BY_ID,
} from "./types";

import axios from "axios";
export const addTodo = (body) => (dispatch) => {
  console.log(body);
  axios.post(`http://localhost:4000/todo/add`, body).then((response) => {
    dispatch({
      type: CREATE_TODO,
      payload: response.data,
    });
  });
};

export const getTodo = () => (dispatch) => {
  axios.get(`http://localhost:4000/todo/`).then((response) => {
    dispatch({
      type: GET_TODO,
      payload: response.data,
    });
  });
};

export const getTodoById = (id) => (dispatch) => {
  axios.get(`http://localhost:4000/todo/${id}`).then((response) => {
    dispatch({
      type: GET_TODO_BY_ID,
      payload: response.data,
    });
  });
};

export const updateTodoById = (id, obj) => (dispatch) => {
  axios.put(`http://localhost:4000/todo/update/${id}`, obj).then((response) => {
    dispatch({
      type: UPDATE_TODO_BY_ID,
      payload: { obj, id },
    });
  });
};
