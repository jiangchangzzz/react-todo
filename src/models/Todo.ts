export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
    createDate: Date = new Date();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
