import "./App.css";
import Header from "./Components/Header/Header";
import HotelResult from "./Components/Hotels/HotelResult";
import Hotels from "./Components/Hotels/Hotels";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hotels />
      <HotelResult />
    </div>
  );
}

export default App;
