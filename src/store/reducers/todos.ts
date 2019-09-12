import { Action, ActionTypes as AT, ITodo } from "../actions";

export const initialTodoState: ITodo[] = [];

export const todosReducer = (state = initialTodoState, action: Action) => {
  switch (action.type) {
    case AT.FETCH_TODOS:
      return action.payload;
    case AT.DELETE_TODO:
      return state.filter((todo: ITodo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
