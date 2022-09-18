import React, { useState} from "react";
export default function Setoftodo(props){

    const [input,setInput] = useState("");

    const handlechange = (e) => {
        setInput(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        props.addtask({
           id: Math.floor(Math.random()*10000),
           text: input,
           isComplete: false
    })
        setInput('');
    }

    return <form className="form">
        <input type="text"  className="input" placeholder="Add a Schedule...." value={input} name="text" onChange={handlechange}></input>
        <button type="submit" className="btn" onClick={handlesubmit}>ADD</button>
    </form>
}
