
import './App.css';
import Card from './Components/Card'
import React, { useState } from 'react'

function App() {
const [yname,setYname] = useState("Displays Your Name");
const [age,setAge] = useState("Displays Your Age");
const [title,setTitle] = useState("Displays title of The task");
const [date,setDate] = useState("Displays When it needs to be finished");
const [task,setTask] = useState("Displays description of the task")



function collectUserInfo() {
 
  let na = prompt("What is your Name?");
  setYname("Name: "+na);
  let ag = prompt("What is your Age?");
  setAge("Age: "+ag);
  let ti = prompt("What is the Title of the Task");
  setTitle("Task Title: "+ti);
  let da = prompt("What is the Date it needs to be Finished?");
  setDate("Date to Complete: "+da);
  let ta = prompt("Describe the task please!");
  setTask("Task Description: "+ta);

}

return (
    <div className="App">
      <button onClick={collectUserInfo}  className="but" >Click me to Update Card</button>
      <Card yname={yname} age={age} title={title} date={date} task={task} />
    </div>  
  );


}

export default App;
