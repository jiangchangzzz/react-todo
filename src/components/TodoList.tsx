import * as React from 'react';

import { Todo } from '../models/Todo';
import './TodoList.css';

interface ITodoListProps {
    todos: Todo[],
    onRemove: (todo: Todo)=>void,
    onComplete: (todo: Todo)=>void
}

export class TodoList extends React.Component<ITodoListProps> {
  handleChange = (todo: Todo): void => {
    this.props.onComplete(todo);
  }

  render() {
    const { todos, onRemove } = this.props;
    return (
        todos.length > 0 ?
        <ul className="todo-list">
            {todos.map(todo => (
                <li className="todo-item" key={todo.id}>
                    <input type="checkbox" checked={todo.complete} onChange={() => this.handleChange(todo)}/>
                    <p>{todo.title}</p>
                    <button type="button" onClick={() => onRemove(todo)}>Remove</button>
                </li>
            ))}
        </ul>
        : null
    )
  }
}

export default TodoList;
