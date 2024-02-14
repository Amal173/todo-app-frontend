import './App.css';
import { Routes, Route } from "react-router-dom"
import AddTasks from './Components/AddTasks/AddTasks';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <AddTasks/> } />

      </Routes>
    </div>
  );
}

export default App;
