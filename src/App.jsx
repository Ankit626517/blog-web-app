import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavbarPages/Navbar";
import Home from "./Component/NavbarPages/Home";
import About from "./Component/NavbarPages/About";
import Contact from "./Component/NavbarPages/Contact";
import Categories from "./Component/NavbarPages/Categories";
import Register from "./Component/NavbarPages/Register"
import Login from "./Component/NavbarPages/Login";
import Footer from "./Component/Footer";
import CreateBlog from "./Component/CreateBlog";

function App() {
  return (
    <>    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />

=======
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/CreateBlog" element={<CreateBlog/>}></Route>
>>>>>>> AnkitWork
      </Routes>
      {/* <Register/> */}
      <Footer />
    </Router>
    
   
    
    </>
  
  );
}

export default App;
