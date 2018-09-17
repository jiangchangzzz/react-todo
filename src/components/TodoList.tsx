import * as React from 'react';

import { Todo } from '../models/Todo';

interface ITodoListProps {
    todos: Todo[],
    onRemove: (todo: Todo)=>void
}

export class TodoList extends React.Component<ITodoListProps> {
  render() {
    const { todos, onRemove } = this.props;
    return (
        todos.length > 0 ?
        <ul>
            {todos.map(todo => {
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.complete}/>
                    <p>{todo.title}</p>
                    <button type="button" onClick={() => onRemove(todo)}>Remove</button>
                </li>
            })}
        </ul>
        : null
    )
  }
}

export default TodoList;
