import { useState } from "react";

const ListbyEvent=()=>{
    const[getTask, setGetTask]=useState(false);
    const todoList=[
        {id:1, task:"Buy Grocery"},
        {id:2, task:"Meet Friends"},
        {id:3, task:"Attend Family Function"},
        {id:4, task:"Watch New Movie"},
        {id:5, task:"Pay EB bill"},
    ];
        return(<div>
            <h2>TODO LIST</h2>
            <button onClick={()=>(setGetTask(!getTask))}Read></button>

            <ul>{todoList.map((task)=>(<li key={task.id}>{task.task}</li>)
        )}</ul>
            </div>)
        }
export default ListbyEvent;