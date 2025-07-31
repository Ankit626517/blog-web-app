import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavbarPages/Navbar";
import Home from "./Component/NavbarPages/Home";
import About from "./Component/NavbarPages/About";
import Contact from "./Component/NavbarPages/Contact";
import Categories from "./Component/NavbarPages/Categories";

import Footer from "./Component/Footer";
import CreateBlog from "./Component/CreateBlog";
import PrivateRoute from "./PrivateRoute";
// cleeck Auth start


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// cleeck Auth end
function App() {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
      

            <Route
              path="/CreateBlog"
              element={
                <PrivateRoute>
                  <CreateBlog />
                </PrivateRoute>
              }
            />
          </Routes>
          {/* <Register/> */}
          <Footer />
        </Router>
      </ClerkProvider>
    </>
  );
}

export default App;
