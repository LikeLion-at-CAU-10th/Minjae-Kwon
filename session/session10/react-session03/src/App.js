import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Love from "./pages/Love";
import NavBar from "./components/NavBar";
import Person from "./pages/Person";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":nickname" element={<Person />} />
          <Route path="likelion" element={<div>likelion</div>} />
        </Route>
        <Route path="/love" element={<Love />} />
      </Routes>
    </Router>
  );
}

export default App;
