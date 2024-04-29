import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState : [
        {id:1 , name: '', description : 'test', IsComplete: false},
        // {id:2 , name: '', description : 'test', IsComplete: true},
        // {id:3 , name: '', description : 'test', IsComplete: false},
        // {id:4 , name: '', description : 'test', IsComplete: true},
    ],
    reducers:{
        add: (state,action) => {
            const newTodo = {
                id: Date.now(),
                name: action.payload.name,
                description: action.payload.description,
                IsComplete: false
            };
            state.push(newTodo)
        },
        toggleComplete: (state, action)=>{
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            )
            state[index].IsComplete = action.payload.IsComplete
        },
        remove: (state, action) =>{
            return state.filter((todo)=>todo.id !== action.payload.id)
        }
    }
})


export const { add, toggleComplete, remove } = todoSlice.actions; 
export default todoSlice.reducer;


