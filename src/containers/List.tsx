import * as React from 'react';
import { connect } from 'react-redux';

import { RootStore } from '../models/RootStore';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';
import * as actions from '../actions/todo';
import { Dispatch } from 'redux';
import { Todo } from '../models/Todo';

interface IListProps {
    todos: Todo[],
    addTodo: (title: string)=>void,
    removeTodo: (todo: Todo)=>void,
    completeTodo: (todo: Todo)=>void
}

export class List extends React.Component<IListProps> {
    render() {    
        const { todos, addTodo, removeTodo, completeTodo } = this.props;          
        return (
            <div>
                <NewTodo onNewTodo={addTodo}/>
                <TodoList todos={todos} onRemove={removeTodo} onComplete={completeTodo}/>
            </div>
        );
  };
}

const mapStateToProps = (state: RootStore) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch: Dispatch<actions.TodoAction>) => {
    return {
        addTodo: (title: string) => dispatch(actions.addTodo(title)),
        removeTodo: (todo: Todo) => dispatch(actions.removeTodo(todo)),
        completeTodo: (todo: Todo) => dispatch(actions.completeTodo(todo)),
        clearTodo: () => dispatch(actions.clearTodo())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
