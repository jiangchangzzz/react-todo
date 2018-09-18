import * as constants from '../constants/todo';
import { Todo } from '../models/Todo';

export interface IAddTodo{
    type: constants.ADD_TODO;
    payload: string;
}

export interface IRemoveTodo{
    type: constants.REMOVE_TODO;
    payload: Todo;
}

export interface ICompleteTodo{
    type: constants.COMPLETE_TODO,
    payload: Todo;
}

export interface IClearTodo{
    type: constants.CLEAR_TODO;
}

export type TodoAction = IAddTodo | IRemoveTodo | ICompleteTodo | IClearTodo;

export function addTodo(title: string): IAddTodo{
    return {
        type: constants.ADD_TODO,
        payload: title
    };
}

export function removeTodo(todo: Todo): IRemoveTodo{
    return {
        type: constants.REMOVE_TODO,
        payload: todo
    };
}

export function completeTodo(todo: Todo): ICompleteTodo{
    return {
        type: constants.COMPLETE_TODO,
        payload: todo
    };
}

export function clearTodo(): IClearTodo{
    return {
        type: constants.CLEAR_TODO
    };
}