import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Planner from "./pages/Planner";
import Festivals from "./pages/Festivals";
import Budget from "./pages/Budget";
import SavedTrips from "./pages/SavedTrips";
import Map from "./pages/Map";

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />

      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/savedtrips" element={<SavedTrips />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;