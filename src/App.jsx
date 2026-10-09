import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Planner from "./pages/Planner";
import Festivals from "./pages/Festivals";
import Budget from "./pages/Budget";
import SavedTrips from "./pages/SavedTrips";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/savedtrips" element={<SavedTrips />} />
          <Route path="/map" element={<Map/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;