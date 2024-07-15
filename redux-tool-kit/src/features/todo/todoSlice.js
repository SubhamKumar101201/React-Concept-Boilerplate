import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            title: "React",
            content: "React is a JavaScript library for building user interfaces",
        },
        {
            id: nanoid(),
            title: "Redux",
            content: "Redux is a predictable state container for JavaScript apps",
        },
        {
            id: nanoid(),
            title: "Node.js",
            content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
        }
    ]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            // state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.title = action.payload.title
            todo.content = action.payload.content
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer