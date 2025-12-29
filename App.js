import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Examples from "./pages/Examples";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/">Əsas</NavLink>
        <NavLink to="/about">Haqqinda</NavLink>
        <NavLink to="/examples">Iş nümunələri</NavLink>
        <NavLink to="/contact">Əlaqə məlumatları</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/examples" element={<Examples />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
