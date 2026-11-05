import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout"

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;