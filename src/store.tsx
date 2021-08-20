import React from "react";

// Standard interface and functions
export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text,
    }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done,
    }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text,
        done: false,
    },
];

// Native react Implementation
const useTodos = (initial: Todo[]) => {
    const [todos, todosSet] = React.useState<Todo[]>(initial);
    const [newTodo, newTodoSet] = React.useState("");
    return {
        todos,
        newTodo,
        newTodoSet,
        addTodo() {
            todosSet((tl) => addTodo(tl, newTodo));
            newTodoSet("");
        },
        updateTodo(id: number, text: string) {
            todosSet((tl) => updateTodo(tl, id, text));
        },
        toggleTodo(id: number) {
            todosSet((tl) => toggleTodo(tl, id));
        },
        removeTodo(id: number) {
            todosSet((tl) => removeTodo(tl, id));
        },
        load(newTodos: Todo[]) {
            todosSet(newTodos);
        },
    };
};

export type UseTodosTypes = ReturnType<typeof useTodos>;

const TodosContext = React.createContext<UseTodosTypes | null>(null);

export const useTodoContext = () => React.useContext(TodosContext)!;

export const TodoProvider = ({ children }: { children: React.ReactNode }) => (
    <TodosContext.Provider value={useTodos([])}>
        {children}
    </TodosContext.Provider>
);
