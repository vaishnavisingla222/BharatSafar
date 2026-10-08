import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Planner from "./pages/Planner";
import Festivals from "./pages/Festivals";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/festivals" element={<Festivals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;