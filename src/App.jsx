import {  Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from "./pages/Landingpage";
import Navbar from "./Components/Navbar";

function App() {
  return (
  <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
      </div>
  );
}

export default App;
