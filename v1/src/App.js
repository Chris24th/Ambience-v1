import React from "react";
import Login from "./Login";
import Main from "./Main";
import AboutUs from "./Components/AboutUs";
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
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
