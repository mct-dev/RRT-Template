import React, { Component } from "react";
import { ITodo } from "store/actions";

interface ITodoProps {
  onClick: () => any;
  todo: ITodo;
}

export class Todo extends Component<ITodoProps> {

  private todo = this.props.todo;

  public render() {
    return (
      <div onClick={this.props.onClick}>
        {this.todo.title}
      </div>
    );
  }

  // private handleTodoClick = () => {
  //   // console.log(this.todo);
  //   this.deleteTodo(this.todo.id);
  // }
}
