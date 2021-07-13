
import './App.css';
import Card from './Components/Card'
import React, { useState } from 'react'

function App() {

const[yname,setYname]=useState("Displays Your Name");
const [age,setAge] = useState("Displays Your Age");
const [title,setTitle] = useState("Displays title of The task");
const [date,setDate] = useState("Displays When it needs to be finished");
const [task,setTask] = useState("Displays description of the task")

return (
    <div className="App">
      
      <div className = "inputContainer">
      <h1>Enter the values you need to update.</h1>
      <input className = "name" placeholder="Enter your name:" onChange={e => setYname(e.target.value)} ></input>
      <input className = "age" placeholder="Enter your age:" onChange={e => setAge(e.target.value)}></input>
      <input className = "title" placeholder="Enter Task Title:" onChange={e => setTitle(e.target.value)}></input>
      <input className = "date" placeholder="Enter due date of task:" onChange={e => setDate(e.target.value)}></input>
      <input className = "task" placeholder="Describe your task" onChange={e => setTask(e.target.value)}></input>

    </div>
      <Card yname={yname} age={age} title={title} date={date} task={task} />
    </div>  
  );

}


export default App;
