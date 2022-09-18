import React, { useState } from "react";
import Setoftodo from "./Setoftodo";
import Todo from "./Todo";
export default function Todolist(){

    const [todos,settodos]  = useState([]);

    const addtask = task => {
        if(!task.text){
            return
        }

    const newtodo = [task,...todos];
    settodos(newtodo);
    }

    const remove = id => {
        let updatetask = [...todos].filter(task => task.id !== id)
        settodos(updatetask)
    }

    const complete = id => {
        let updatetask = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
       settodos(updatetask)
    }

    return <div>
        <Setoftodo addtask={addtask}></Setoftodo>
        <Todo todos={todos} complete={complete} remove={remove}></Todo>
    </div>;
}
