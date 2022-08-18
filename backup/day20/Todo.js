
import { useDispatch,useSelector } from "react-redux/es/exports";
import {setNewTask,setUpdatedTask,setDeletedId} from "./TodoSlice";

const Todo =() => {
    const {tasks,errorMessage,newTask} = useSelector((store)=>store.todo);
    const dispatch = useDispatch();
    return(
        <div className="app">
            <h1>Todo Task</h1>
            <h2>CRUD Operation</h2>
            
            <div className="todo">
                <input type="text"
                    value={newTask} 
                    onChange={(e)=>{dispatch(setNewTask(e.target.value));
                    }}>
                </input>
                <button onClick={()=>{const newId=Math.max(...tasks.map((tasks)=>tasks.id));
                    console.log(newTask);
                    dispatch(
                        {type:"CREATE_TODO_TASK_SAGA",
                        postData:{id:Number(newId) +1,
                        task:newTask,}
                    })
                }}>create</button>
                <button onClick={()=>dispatch(
                    {
                        type:"READ_TODO_TASK_SAGA"})}>Raed</button>
                        <h2>{errorMessage && errorMessage}</h2>
                        </div>
                        <ul>
                        {tasks.map((curTask)=>(
                            <li key={curTask.id}>
                            <input type="text" value={curTask.task} onChange={(e)=>{dispatch(setUpdatedTask({id: curTask.id, task:e.target.value}));
                            }} ></input>
                <button onClick={()=>{dispatch(
                    {
                        type:"UPDATE_TODO_TASK_SAGA",
                    putData:{
                        id:curTask.id,
                        task:curTask.task,}
                    });
                }}> update</button>
                <button onClick={()=>{
                    dispatch(setDeletedId({delId:curTask.id}));
                    dispatch({type:"DELETE_TODO_TASK_SAGA",
                delData:{
                    id:curTask.id}});
                }}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
            }   
        
                


export default Todo;
