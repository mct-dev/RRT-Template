import { deleteTodo, ITodo } from "store/actions/todos";
import { initialTodoState, todosReducer } from "store/reducers/todos";

describe("The TodosReducer", () => {

  test("correctly updates state when deleting a todo", () => {
    const todos: ITodo[] = [
      {
        completed: false,
        id: 1,
        title: "fake todo",
      },
    ];
    const state: ITodo[] = [
      ...initialTodoState,
      ...todos,
    ];
    const action = deleteTodo(1);
    const newState = todosReducer(state, action);

    expect(newState.length).toBe(0);
  });

});
