import React from "react";
import {RiDeleteBin7Fill} from "react-icons/ri"
import {TiTick} from "react-icons/ti"

export default function Todo({todos,complete,remove}){
    
    return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
            <div className="text">{todo.text}</div>
            <div className="icons" key={todo.id}>
                <TiTick className={todo.isComplete ? 'hide' : 'icons1'} onClick={() => {complete(todo.id)}}></TiTick>
                <RiDeleteBin7Fill className="icons2" onClick={() => {remove(todo.id)}}></RiDeleteBin7Fill>  
            </div>
        </div>
    ));
}
