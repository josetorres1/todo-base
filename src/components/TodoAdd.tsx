import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { addTodo, setTodosType, TodosType } from "../store";

function TodoAdd({
    todos,
    todosSet,
}: {
    todos: TodosType;
    todosSet: setTodosType;
}) {
    const [newTodo, setNewTodo] = React.useState("");
    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
                placeholder="New todo"
                value={newTodo}
                onChange={(evt) => setNewTodo(evt.target.value)}
            />
            <Button onClick={() => todosSet(addTodo(todos, newTodo))}>
                Add Todo
            </Button>
        </Grid>
    );
}

export default TodoAdd;
