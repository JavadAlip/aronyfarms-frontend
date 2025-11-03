import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};