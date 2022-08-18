import {createSlice} from "@reduxjs/toolkit";
import { createTodoTask, deleteTodoTask, readTodoTask, updateTodoTask } from "./saga";

const initialState = {
    tasks:[],
    errorMessage:"",
    newTask:"",
    delId:0,
};

const todoSlice = createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            setNewTask: (state,action)=>{
                console.log(action.payload);
                state.newTask=action.payload;
                console.log(state.newTask);
            },
            setUpdatedTask: (state,action)=>{
                state.tasks=state.tasks.map((task)=>{
                    if(task.id===action.payload.id){
                        task.task=action.payload.task;
                    }
                    return task;
                });
            },
            setDeletedId:(state,action) =>
            {
                state.delId=action.payload.delId
            },
            readTodoTask(state,action)
            {
                console.log(state.tasks);
                console.log(action.payload);
                state.tasks=action.payload;
                console.log("tasks:",state.tasks);
                state.errorMessage="";

            },
            createTodoTask(state,action)
            {
                state.tasks=[...state.tasks,action.payload];
                state.newTask="";
                state.errorMessage="";
            },
            updateTodoTask(state,action)
            {
                state.errorMessage="";
            },
            deleteTodoTask(state,action)
            {
                state.tasks=state.tasks.filter((task)=>(task.id!==state.delId));
                state.errorMessage="";
            },
            setErrorMessage(state,action)
            {
                state.errorMessage=action.payload.errorMessage;
            }
        }
    }
)
export const{readTodoTask,createTodoTask,updateTodoTask,deleteTodoTask,setErrorMessage,setNewTask,setUpdatedTask,setDeletedId}=todoSlice.actions;
export default todoSlice.reducer;
