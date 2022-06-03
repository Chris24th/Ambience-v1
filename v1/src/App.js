import React from "react";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
