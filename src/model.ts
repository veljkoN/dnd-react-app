export interface Todo {
    id:number
    todo:string
    isDone:boolean
}

type Acitons = 
    { type:'add', payload:string }
    |{ type:'remove', payload:number }
    |{ type:'done', payload:number }

const TodoReducer = ( state:Todo[], action:Acitons) =>{
    switch ( action.type ) {
        case 'add':
            return [
                ...state,
                { id:Date.now(), todo:action.payload, isDone:false}
            ]
    
        case 'remove':
            return state.filter( todo => todo.id !== action.payload)
        case 'done':
            return state.map(todo => todo.id ===action.payload ? {...todo, isDone:!todo.isDone}: todo)
        default:
            return state
    }
}

///////-----------component-------------
import { useReducer } from "react";

const userExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);
}