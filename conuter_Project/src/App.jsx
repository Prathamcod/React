import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked", counter)
    counter = counter + 1;
    setCounter(counter);
    if (counter == 20) {
      setCounter(counter = 20);
    }
    else {
      setCounter(counter + 1)
    }

  }

  const removeValue = () => {
    console.log("Clicked", counter)
    counter = counter - 1
    setCounter(counter)
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      setCounter(counter = 0);
    }
  }

  return (
    <>
      <h1>Hello from from create vite + react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
