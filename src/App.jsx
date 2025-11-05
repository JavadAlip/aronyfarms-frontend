import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProjectSandalwood from './Pages/ProjectSandalwood';
import ProjectMango from './Pages/ProjectMango'
import ProjectCoffee from './Pages/ProjectCoffee'
import Blog from './Pages/Blog'
import BlogView from './Pages/BlogView'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project-sandalwood" element={<ProjectSandalwood />} />
        <Route path="/project-mango" element={<ProjectMango />} />
        <Route path="/project-coffee" element={<ProjectCoffee />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-view" element={<BlogView />} />
      </Routes>
    </Router>
  );
};