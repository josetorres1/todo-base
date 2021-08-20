import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useTodoContext } from "../store";

function TodoAdd() {
    const { addTodo, newTodo, newTodoSet } = useTodoContext();
    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
                placeholder="New todo"
                value={newTodo}
                onChange={(evt) => newTodoSet(evt.target.value)}
            />
            <Button
                onClick={() => {
                    addTodo();
                    newTodoSet("");
                }}
            >
                Add Todo
            </Button>
        </Grid>
    );
}

export default TodoAdd;
