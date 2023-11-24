import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from "./Components/Header/Header";
import Hotels from "./Components/Hotels/Hotels";
import Flights from "./Components/Flights/Flights";
import HotelResult from "./Components/Hotels/HotelResult";
import FlightResult from "./Components/Flights/FlightResult";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Flights/>} />
        <Route exact path="/flights" element={<Flights/>} />
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/hotelResult" element={<HotelResult/>} />
        <Route path="/hotelResult" element={<FlightResult/>} />


        
      </Routes>
    </Router>
   
  );
}

export default App;
