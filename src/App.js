import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nabvar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Doctor from "./Components/Doctor/Doctor";
import UpdateDoctor from "./Components/Doctor/UpdateDoctor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/updateDoctor" element={<UpdateDoctor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
