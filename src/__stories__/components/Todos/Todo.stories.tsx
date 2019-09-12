import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Todo } from "components/Todos/Todo";
import React from "react";
import { ITodo } from "store/actions";

export const todo: ITodo = {
  completed: false,
  id: 1,
  title: "Really cool todo.",
};

export const actions = {
  onClick: action("onClick"),
};

storiesOf("Todo", module)
  .add("default", () => <Todo todo={todo} onClick={actions.onClick} />);
  // .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  // .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
