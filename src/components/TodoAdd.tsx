import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { addTodo, useTodoContext } from "../store";

function TodoAdd() {
    const [todos, todosSet] = useTodoContext();
    const [newTodo, setNewTodo] = React.useState("");
    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
                placeholder="New todo"
                value={newTodo}
                onChange={(evt) => setNewTodo(evt.target.value)}
            />
            <Button
                onClick={() => {
                    todosSet(addTodo(todos, newTodo));
                    setNewTodo("");
                }}
            >
                Add Todo
            </Button>
        </Grid>
    );
}

export default TodoAdd;
