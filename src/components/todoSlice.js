import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;