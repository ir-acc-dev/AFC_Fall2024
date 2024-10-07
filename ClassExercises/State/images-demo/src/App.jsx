import { useState } from 'react'
import './App.css'
import image from "./assets/Chardonnay.jpeg"
import riesling from "../public/images/Riesling.jpeg"

function App() {
  

  return (
    <>
      <h1>Hello</h1>
      <img src={image} alt=""/>
      <img src={riesling} alt="" />
    </>
  )
}

export default App
