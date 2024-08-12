import './App.css';
import {React} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./frontend/Homepage.js"
import Gamepage from "./frontend/Gamepage.js"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Homepage/>}/>
          <Route path="/gamepage" element={<Gamepage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
