export type TodoList = {
    todo : Todo;
    tasks? : Array<Task>;
    subtasks?: Array<SubTask>; 
}

export type Todo = {
    name: string;
}

export type Task = {
    name: string;
    time_Total?: Date;
    status: boolean;
}

export type SubTask = {
    name: string;
    time_Total: Date;
    status: boolean;
}

