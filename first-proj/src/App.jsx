import AppHead from "./components/AppHead"
import Add from "./components/Add"
import Activities from "./components/Activities"
import "./App.css"

function App() {

  return <center class="todo-container">
    <AppHead></AppHead>
    <Add></Add>
    <div className="items-box">
      <Activities></Activities>
    </div>
    
  </center>
}

export default App
