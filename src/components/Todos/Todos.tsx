import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  deleteTodo,
  fetchTodos,
  IHttpRequest,
  ITodo,
} from "store/actions";
import { IStoreState } from "store/reducers";
import { Todo } from "./Todo";

interface ITodosProps {
  deleteTodo: typeof deleteTodo;
  fetchTodos: () => void;
  http: IHttpRequest;
  todos: ITodo[];
}

export class TodosComponent extends Component<ITodosProps> {

  public fetchTodos = (): void => {
    const { fetchTodos: fetchTs } = this.props;
    fetchTs();
  }

  public renderList(): JSX.Element[] {
    const { deleteTodo: delTodo } = this.props;
    return this.props.todos.map((todo: ITodo) => {
      return (
        <Todo key={todo.id} todo={todo} onClick={() => delTodo(todo.id)} />
      );
    });
  }

  public render() {
    const {
      http: { inProgress: requestPending },
    } = this.props;
    return (
      <div>
        <button onClick={this.fetchTodos}>Fetch</button>
        {requestPending ? <div>Loading...</div> : this.renderList()}
      </div>
    );
  }

}

const mapStateToProps = ({
  todos,
  http,
}: IStoreState): { http: IHttpRequest, todos: ITodo[] } => {
  return {
    http,
    todos,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  fetchTodos: () => fetchTodos()(dispatch),
});

export const Todos = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosComponent);
