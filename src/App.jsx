import { Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./pages/Dashboard"

function App() {
  

  return (
    <div className="font-[Outfit]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  )
}

export default App
