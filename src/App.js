import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nabvar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
