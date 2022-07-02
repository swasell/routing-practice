import './App.css';
import Home from './components/Home';
import Params from './components/Params';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>

        <Route path="/home" element={< Home />} />
        <Route path="/:word" element={< Params />} />
        <Route path="/:word/:col/:bgCol" element={< Params />} />

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
