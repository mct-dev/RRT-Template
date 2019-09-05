import { initialTodoState, todosReducer } from '../../reducers/todos';
import { deleteTodo, ITodo } from '../../actions/todos';


describe('The TodosReducer', () => {

	test('correctly updates state when deleting a todo', () => {
		const todos: ITodo[] = [
			{
				id: 1,
				completed: false,
				title: 'fake todo'
			}
		];
		const state: ITodo[] = [
			...initialTodoState,
			...todos
		]
		const action = deleteTodo(1);
		const newState = todosReducer(state, action);

		expect(newState.length).toBe(0);
	})

});
