// import { useEffect, useState } from "react";
// const Todo=()=>{
//     // const todoList=[
//     //     {id:1, task:"Buy Grocery"},
//     //     {id:2, task:"Meet Friends"},
//     //     {id:3, task:"Attend Family Function"},
//     //     {id:4, task:"Watch New Movie"},
//     //     {id:5, task:"Pay EB bill"},
//     // ];


//     // constructor(props)
//     // {
//     //     super(props);
//     //     this.state={ tasks:[], newTask:"",newId: 0,url:"http://localhost:4000/todotask" };
//     //     this.readTask = this.readTask.bind(this);
//     // }
//     const[name,setName]=useState("uma");
//     const[tasks,setTasks]=useState([]);
    
//    function readTask() {
//     //useEffect(()=>{
//         console.log(tasks)
//         fetch("http://localhost:4000/todotask")
//         .then((response) => response.json())
//         .then((data)=>setTasks(data.filter((task)=>task.task.includes(name))));
//     //     .catch(error => console.log("Error", error))
//     //     console.log(this.state.tasks);
//     //     <ul>{todoList.map((task)=>(<li key={task.id}>{task.task}</li>))}</ul>
//     // console.log(tasks);
        
//     }
// //     useEffect(()=>{console.log("useEffect called")},[]);
// //     useEffect(()=>{console.log(name)},[name]);
// //     useEffect(()=>{console.log(tasks)},[tasks]);
//  useEffect(()=>{readTask(tasks)},[name]);
//  console.log(tasks);
//     return(<div>
//         <h2>Todo List</h2>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>  
//         <h2>{name}</h2>
       
        
//         <ul>{tasks.map((tasks)=>(<li key={tasks.id}><input type="text" value={tasks.task}> </input>
//         </li>))}</ul>
    
//         </div>)
// }
    
// export default Todo;
import {useEffect, useState} from "react";
const Todo=()=>{
//     const todoList=[
//         {id:1,task:"Buy Grocery"},
//         {id:2,task:"Meet Friends"},
//         {id:3,task:"Attend Family Function"},
//         {id:4,task:"Watch New Movie"},
//         {id:5,task:"Pay EB Bill"},

// ];
const [name, setName] = useState();
const [tasks, setTasks] = useState([])

 function readTask(){
    console.log(tasks)
    fetch("http://localhost:4000/todotask")
    .then((response)=>response.json())
    .then((data)=> setTasks(data.filter((task)=>task.task.includes(name))));
 }
//  useEffect(()=>{console.log("use Effect called")},[])
//  useEffect(()=>{console.log(name)},[name])
//  useEffect(()=>{console.log(tasks)},[tasks])
  useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
return(
    <div>
        <h2>Todo List</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h2>{name}</h2>
 
        <ul>{tasks.map(
            (tasks)=>(<li key={tasks.id}><input type="text" value={tasks.task}></input></li>))}
        
        </ul>
        </div>)
}


export default Todo;

