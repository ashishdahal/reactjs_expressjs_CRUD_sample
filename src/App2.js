
import './App.css';
import Card from './Components/Card'
import React, { useState } from 'react'

let data;

const url = "http://localhost:8080/datastore";
  async function getData(){
  const response = await fetch(url);
  data = await response.json();
  //console.log(JSON.stringify(data));
  //let reqData = JSON.stringify(data);
  //console.log(JSON.stringify(data.yname));
  }
getData();


function App2() {

    const [yname,setYname]=useState("Displays your name : "+data.yname);
    const [age,setAge] = useState("Displays Your Age : "+data.age);
    const [title,setTitle] = useState("Displays title of The task : " +data.title);
    const [date,setDate] = useState("Displays When it needs to be finished : "+data.date);
    const [task,setTask] = useState("Displays description of the task : "+data.task);

function EnterData(){
    
    return( 
    <div className="App">
      <div className = "inputContainer">
      <h1>Enter the values you need to update.</h1>
      <input className = "name" placeholder="Enter your name:" onChange={e => setYname("Name :"+e.target.value)} ></input>
      <input className = "age" placeholder="Enter your age:" onChange={e => setAge("Age: "+e.target.value)}></input>
      <input className = "title" placeholder="Enter Task Title:" onChange={e => setTitle("Title: "+e.target.value)}></input>
      <input className = "date" placeholder="Enter due date of task:" onChange={e => setDate("Due date: "+e.target.value)}></input>
      <input className = "task" placeholder="Describe your task" onChange={e => setTask("Task Description: "+e.target.value)}></input>
      <button >ADD_TO_BACKEND</button>
      </div>
      <Card yname={yname} date={date} age={age} title={title} task={task}/>
    </div>);
  }

 

  return EnterData();


  

};





export default App2;
