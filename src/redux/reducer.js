import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //addTodo-reducer
        addTodos: (state, action) => {
            return [...state, action.payload];
        },
        //deleteTodo-reducer
        deleteTodos: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        //updateTodo-reducer
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, item: action.payload.item };
                }
                return todo;
            });
        },
        //completed
        completedTodos: (state,action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: true };
                }
                return todo;
            })
        }

    },
});

export const { addTodos , deleteTodos, updateTodos, completedTodos} = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;
