import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id:1,
        title:'Todo 1',
        body:'Title body 1',
        createdAt:''
    }
]
  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      createTodo: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.push(action.payload)
      },
      deleteTodo: (state,action) => {
        return state.filter(todo=>todo.id !== action.payload)
      },
      updateTodo: (state, action) => {
         return state.map(todo=>
            todo.id == action.payload.id ? action.payload : todo
        )
        
      },
     
    },
  })
  
  // Action creators are generated for each case reducer function
export const { createTodo, deleteTodo, updateTodo, } = todoSlice.actions

export default todoSlice.reducer
