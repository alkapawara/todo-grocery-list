import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todo:[{
        id:Math.random()*100,
        itm:"sunscreem"
    }]
  }
export const todoSlice = createSlice({
name:"todoList",
initialState,
reducers:{
    add:(state,action)=>{
        const todolist={
            id:Math.random()*100,
            itm:action.payload
        }
        state.todo.push(todolist)
    },

    del:(state,action)=>{
       
        const delfun=state.todo.filter((itm)=>itm.id!==action.payload)
        state.todo=delfun
    },
    update:(state,action)=>{
        const index=state.todo.findIndex((itm)=>itm.id===action.payload.id)
        const updatlist=[...state.todo]
        updatlist[index].itm=action.payload.itm

    }
}
})

export const { add, del ,update } = todoSlice.actions

export default todoSlice.reducer