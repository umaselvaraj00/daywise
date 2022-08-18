import todoReducer,{readTodoTask} from "./todoSlice";
import todoTaskData from "./todotask.json";

it("readTodoTask Reducer Testing", ()=>{
    const initState ={tasks:[]};
    const action =readTodoTask(todoTaskData);
    const result =todoReducer(initState,action);
    expect(Object.keys(result.tasks).length).toEqual(todoTaskData.length);
})