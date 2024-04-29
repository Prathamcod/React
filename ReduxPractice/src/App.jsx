import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <main>
        Welcome To My first React App Website
      </main>

      <div className="card">
        <Card ProName="T-Shirt" price="$110" items="2" />
        <Card ProName="Shirt" price="$130" items="1" />
        <Card ProName="Short" price="$150" items="4" />
      </div>

      <Footer />
    </>
  )
}

export default App
