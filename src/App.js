import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar/Navbar';
import CatFacts from './pages/CatFacts'

function App() {
  return (
    <div className="App">
      <Header className="Header"/>

      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catFacts" element={<CatFacts />} />
      </Routes>
    </div>
  );
}

export default App;
