import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Test from "./components/pages/Test";
import PersonalityTypes from "./components/pages/PersonalityTypes";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Result from "./components/pages/Result/Result";
import { PersonalityProvider } from "./Context/PersonalityContext";

function App() {
  return (
    <PersonalityProvider>
      <Router>
        <div className="App grid">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/personalitytypes" element={<PersonalityTypes />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </PersonalityProvider>
  );
}

export default App;
