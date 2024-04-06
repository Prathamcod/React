import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {



  const [count, setCount] = useState(0)
  let myArrayObject = {
    username: "pratham suthar",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-14'>Tailwind test</h1>
      <Card name=" pratham suthar" SomeOnject={myArrayObject} />
      <Card name="jon chena" />

    </>
  )
}

export default App
