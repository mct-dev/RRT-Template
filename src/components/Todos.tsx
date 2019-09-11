import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  fetchTodos,
  ITodo,
  IHttpRequest
} from "../actions";
import { IStoreState } from "../reducers";
import { Dispatch } from "redux";

interface ITodoProps {
  todos: ITodo[];
  http: IHttpRequest;
  fetchTodos: () => void;
  deleteTodo: typeof deleteTodo;
}

export class TodosComponent extends Component<ITodoProps> {

  public onButtonClick = (): void => {
    const { fetchTodos: fetchTs } = this.props;
    fetchTs();
  };

  public renderList(): JSX.Element[] {
    const { deleteTodo: delTodo } = this.props;
    return this.props.todos.map((todo: ITodo) => {
      return (
        <div key={todo.id} onClick={() => delTodo(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  public render() {
    const {
      http: { inProgress: requestPending }
    } = this.props;
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {requestPending ? <div>Loading...</div> : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({
  todos,
  http
}: IStoreState): { todos: ITodo[]; http: IHttpRequest } => {
  return {
    todos,
    http
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	fetchTodos: () => fetchTodos()(dispatch),
	deleteTodo: (id: number) => dispatch(deleteTodo(id))
})

export const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);
