import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes as AT, Action } from "./types";
import { makeHttpRequest } from "./http";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: AT.FETCH_TODOS;
  payload: ITodo[];
}

export interface IFetchTodosErrorAction {
  type: AT.FETCH_TODOS_ERROR;
  payload: Error;
}

export interface IDeleteTodoAction {
  type: AT.DELETE_TODO;
  payload: number;
}

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (): ((dispatch: Dispatch<Action>) => Promise<void>) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result = await makeHttpRequest(dispatch, () =>
        axios.get<ITodo[]>(todosUrl)
      );
      dispatch({
        type: AT.FETCH_TODOS,
        payload: result.data
      });
    } catch (err) {
      dispatch({
        type: AT.FETCH_TODOS_ERROR,
        payload: err
      });
    }
  };
};

export const fetchTodosError = (err: Error): IFetchTodosErrorAction => {
  return {
    type: AT.FETCH_TODOS_ERROR,
    payload: err
  };
};

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    type: AT.DELETE_TODO,
    payload: id
  };
};
