import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import {
    removeTodo,
    setTodosType,
    Todo,
    TodosType,
    toggleTodo,
    updateTodo,
} from "../store";

function TodoListItems({
    todos,
    todosSet,
}: {
    todos: TodosType;
    todosSet: setTodosType;
}) {
    return (
        <>
            {todos.map((todo: Todo) => (
                <Flex pt={2} key={todo.id}>
                    <Checkbox
                        onClick={(evt) => {
                            todosSet(toggleTodo(todos, todo.id));
                        }}
                    />
                    <Input
                        mx={2}
                        value={todo.text}
                        onChange={(evt) =>
                            todosSet(
                                updateTodo(todos, todo.id, evt.target.value)
                            )
                        }
                    />
                    <Button
                        onClick={() => todosSet(removeTodo(todos, todo.id))}
                    >
                        Delete
                    </Button>
                </Flex>
            ))}
        </>
    );
}

function TodoList({
    todos,
    todosSet,
}: {
    todos: TodosType;
    todosSet: setTodosType;
}) {
    return (
        <>
            <Heading>Todo List</Heading>
            <TodoListItems todos={todos} todosSet={todosSet} />
        </>
    );
}

export default TodoList;
