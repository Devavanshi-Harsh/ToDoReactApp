import {ADDTODOS, DELETETODOS, UPDATETODOS} from "./ActionTypes";
export const AddToDo=(data)=>(
    {
        type:ADDTODOS,
        payload:data
    }
)
export const DeleteToDo=(id)=>(
    {
        type:DELETETODOS,
        payload:id
    }
)
export const UpdateToDo=(data)=>(
    {
        type:UPDATETODOS,
        payload:data
    }
)