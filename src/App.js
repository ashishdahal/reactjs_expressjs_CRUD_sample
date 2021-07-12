
import './App.css';
import Card from './Components/Card'
import React, { useState } from 'react'

function App() {

const[yname,setYname]=useState("Displays Your Name");
const [age,setAge] = useState("Displays Your Age");
const [title,setTitle] = useState("Displays title of The task");
const [date,setDate] = useState("Displays When it needs to be finished");
const [task,setTask] = useState("Displays description of the task")

function collectUserInfo() {
 

  setYname("Name: "+document.getElementsByTagName("input")[0].value);

  setAge("Age: "+document.getElementsByTagName("input")[1].value);

  setTitle("Task Title: "+document.getElementsByTagName("input")[2].value);

  setDate("Date to Complete: "+document.getElementsByTagName("input")[3].value);

  setTask("Task Description: "+document.getElementsByTagName("input")[4].value);

}

return (
    <div className="App">
      
      <div className = "inputContainer">
      <input className = "name" placeholder="Enter your name:"></input>
      <input className = "age" placeholder="Enter your age:"></input>
      <input className = "title" placeholder="Enter Task Title:"></input>
      <input className = "date" placeholder="Enter due date of task:"></input>
      <input className = "task" placeholder="Describe your task"></input>
      <button onClick={collectUserInfo}  className="but" >Click to Update Card</button>

    </div>
      
      <Card yname={yname} age={age} title={title} date={date} task={task} />
    </div>  
  );

}


export default App;
