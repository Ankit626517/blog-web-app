import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavbarPages/Navbar";
import Home from "./Component/NavbarPages/Home";
import About from "./Component/NavbarPages/About";
import Contact from "./Component/NavbarPages/Contact";
import Categories from "./Component/NavbarPages/Categories";
import Register from "./Component/NavbarPages/Register"

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {/* <Register/> */}
    </Router>
  );
}

export default App;
