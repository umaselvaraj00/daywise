import {takeEvery,call,put}from"redux-saga/effects";
import axios from "axios";
import {readTodoTask,createTodoTask,updateTodoTask,deleteTodoTask,setErrorMessage}from"./todoSlice";
const url="http://localhost:4000/todotask";
let callAPI =async({url,method,data})=>{
    return await axios({url,method,data});

}
export function* createTodoTaskSaga(action){
    try{
        let{data} = yield call(()=>callAPI({url:url,method:"POST",data:action.postData}));
        console.log(data);
        yield put(createTodoTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));

    }
}
export function* readTodoTaskSaga(){
    try{
        let {data} = yield call(()=>callAPI({url:url}));
        console.log(data);
        yield put(readTodoTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));

    }
}
export function*updateTodoTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`,method:"PUT",data:action.putData}));
        console.log(data);
        yield put(updateTodoTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));

    }
}
export function* deleteTodoTaskSaga(action){
    try{
       console.log("deleteSaga")
        let {data} = yield call(()=>callAPI({url:`${url}/${action.delData.id}`,method:"DELETE",}));
        console.log(data);
        yield put(deleteTodoTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));

    }
}
export default function*rootSaga(){
    yield takeEvery("CREATE_TODO_TASK_SAGA",createTodoTaskSaga);
    yield takeEvery("READ_TODO_TASK_SAGA",readTodoTaskSaga);
    yield takeEvery("UPDATE_TODO_TASK_SAGA",updateTodoTaskSaga);
    yield takeEvery("DELETE_TODO_TASK_SAGA",deleteTodoTaskSaga);
}