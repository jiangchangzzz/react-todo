import { TodoAction } from '../actions/todo';
import { TodoStore } from '../models/TodoStore';
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CLEAR_TODO } from '../constants/todo';
import { Todo } from '../models/Todo';

const initialState: TodoStore={
    lastId: 0,
    todos: []
};

function todo(state: TodoStore=initialState, action: TodoAction): TodoStore{
    switch(action.type){
        case ADD_TODO:
            let todo = new Todo({
                id: state.lastId,
                title: action.payload
            });
            return {
                ...state,
                lastId: state.lastId + 1,
                todos: [
                    ...state.todos,
                    todo
                ]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id!==action.payload.id)
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        todo.complete = !action.payload.complete;
                    }
                    return todo;
                })
            };
        case CLEAR_TODO:
            return {
                ...state,
                todos: []
            }
        default: 
            return state;
    }
}

export default todo;