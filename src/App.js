
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Sorting from "./components/Sorting"
function App() {
  const [bars, setBars] = useState()

  const handleValueChange = (newValue) => {
    setBars(newValue)
  };



  return (
    <div className="App">
      <Navbar onChange={handleValueChange}/>
      <Sorting lengthOf={bars}/>
    </div>
  );
}

export default App;
