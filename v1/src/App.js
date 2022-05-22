import React from "react";
import Login from "./Login";
import Main from "./Main";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Help from "./Components/Help";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
