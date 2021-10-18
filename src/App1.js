import './App.css';

import React, { useState } from 'react'
import App2 from './App2';
import Login from './Components/Login';


function App1() {

const [token,setToken] =useState();

if(!token){
  return <Login setToken={setToken}/>
}


  
  return(

  <div className = "LoginContainer">
  <App2/>
  </div>
  
   
   )
  
  };


export default App1;