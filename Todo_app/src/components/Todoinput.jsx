import {useState} from "react";
import './todo.css'
import {nanoid} from "nanoid"
export const Todoinput =({handleAddTodo,setFlag})=>{
  let x = JSON.parse(localStorage.getItem("todos"))
    const [text,setText] =useState("")
    const handleChange =({target})=>{
        setText(target.value);
    }
    const handleClick =()=>{
        const data ={
            id:nanoid(4),
            title:text,
            status:false,
        }
        if(!data.title){return}
        handleAddTodo(data)
        setText("")
    }
    return(
        <>
         <div className="h1">Todo Count is  {x.length} </div>
        <div className="gridder">
        <input className="form-control" type="text" placeholder="Enter Todo Here" value={text} onChange={handleChange} />
        <button className="btn btn-primary"onClick={handleClick}>Add Todo</button>
        <div className="remover">
        <button onClick={()=>{
           const update = false;
           setFlag(update);
        }} className="btn btn-danger">Show Pendings</button>
        <button
        onClick={()=>{
            const update = true;
            setFlag(update);
         }} className="btn btn-success">Show all</button>
        </div>
        </div>
        </>
    )
}