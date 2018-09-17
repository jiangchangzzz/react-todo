import { TodoAction } from '../actions/todo';
import { TodoStore } from '../models/TodoStore';
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CLEAR_TODO } from '../constants/todo';

const initialState: TodoStore={
    todos: []
};

function todo(state: TodoStore=initialState, action: TodoAction): TodoStore{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
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