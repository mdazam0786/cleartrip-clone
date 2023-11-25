import "./App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Hotels from "./Components/Hotels/Hotels";
import Flights from "./Components/Flights/Flights";
import HotelResult from "./Components/Hotels/HotelResult";
import HotelDesription from "./Components/Hotels/HotelDesription";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Flights/>} />
        <Route exact path="/flights" element={<Flights/>} />
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/hotelResult" element={<HotelResult/>} />
        <Route path="/hotelDescription" element={<HotelDesription/>} />
        
      </Routes>
    </Router>
   
  );
}

export default App;
