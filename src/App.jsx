import { useState, useEffect } from 'react'
import './App.css'

function App() {

  function randomColor() {
    const red = parseInt(Math.random() * 256)
    const green = parseInt(Math.random() * 256)
    const blue = parseInt(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
  }

  useEffect(() => {
    setInterval(() => {
      document.body.style.background = randomColor()
    }, 2000);
  }, []);

  return (
    <>
    </>
  )
}

export default App
