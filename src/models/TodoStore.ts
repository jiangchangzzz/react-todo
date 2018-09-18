import { Todo } from './Todo';

export interface TodoStore {
    lastId: number;
    todos: Todo[];
}