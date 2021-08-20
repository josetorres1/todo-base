import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useTodos } from "./store";

export function App() {
    const [todos, setTodos] = useTodos([]);
    return (
        <ChakraProvider theme={theme}>
            <Box maxWidth="8xl" margin="auto" p={5}>
                <TopBar todosSet={setTodos} />
                <TodoList todos={todos} todosSet={setTodos} />
                <TodoAdd todos={todos} todosSet={setTodos} />
            </Box>
        </ChakraProvider>
    );
}
