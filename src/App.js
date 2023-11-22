import "./App.css";

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hotels from "./Components/Hotels/Hotels";
import Flights from "./Components/Flights/Flights";
import HotelResult from "./Components/Hotels/HotelResult";
// import HotelResultCart from "./Components/Hotels/HotelResultCart";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Flights/>} />
        <Route path="/flights" element={<Flights/>} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotelResult" element={<HotelResult/>} />
        {/* <Route path="/hotelResultCart" element={<HotelResultCart/>} /> */}


        
      </Routes>
      </Router>
   
  );
}

export default App;
