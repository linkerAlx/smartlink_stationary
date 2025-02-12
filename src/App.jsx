import {  Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from "./pages/Landingpage";
import Navbar from "./Components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Productspage from "./pages/Productspage";
import Footer from "./Components/Footer";

function App() {
  return (
  <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutpg" element={<Aboutpage />} />
        <Route path="/contactpg" element={<Contactpage />} />
        <Route path="/productpg" element={<Productspage />} />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
