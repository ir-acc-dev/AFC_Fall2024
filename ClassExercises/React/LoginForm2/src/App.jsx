import { useState } from 'react'
import './App.css'
import {personObj} from "./helper"
import { greeting } from './helper'

function App() {

  // const[fname, setFname] = useState("Irish")
  // const[age, setAge] = useState(21)
  // const[pw, setPassword] = useState("")



  
  const [person, setPerson] = useState(personObj)

  return (
    <form action = "/getData" method = "get">
      <h1>{greeting}</h1>
      <label> First Name: 
        <input type = "text" name = "" id = "" />
      </label>
      <label> Age
        <input type = "number" name = "" id = "" />
      </label>
      <label> Password:
        <input type = "password" name = "" id = "" />
      </label>
      <button type="submit">Submit</button>

    </form>
    
  )
}

export default App
