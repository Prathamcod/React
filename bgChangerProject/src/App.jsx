
import { useState } from "react"

function App() {
  const [color, setColor] = useState("orange");

  return (
    <>
      <div className="w-full h-screen  duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap jsutify-center gap-3 shodow-lg bg-white px-3 py-3 rounded-3xl">

            <button onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >red</button>

            <button onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "green" }}
            >Green</button>

            <button onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
            >blue</button>

            <button onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "black" }}
            >black</button>

            <button onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "orange" }}
            >orange</button>

            <button onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >yellow</button>

            <button onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "pink" }}
            >pink</button>

            <button onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "white" }}
            >white</button>

            <button onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "brown" }}
            >brown</button>

            <button onClick={() => setColor("darkgreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "darkgreen" }}
            >darkgreen</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
