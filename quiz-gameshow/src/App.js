import './App.css';
import {React} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./frontend/Homepage.js"
import Gamepage from "./frontend/Gamepage.js"
import Editpage from './frontend/Editpage.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Homepage/>}/>
          <Route path="/gamepage" element={<Gamepage/>}/>
          <Route path="/editpage" element={<Editpage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
