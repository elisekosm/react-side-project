import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Navbar from './Navbar/Navbar';
import CatFacts from './pages/CatFacts'

function App() {
  return (
    <div className="App">
      <Header className="Header"/>

      <Navbar />

      <Routes>
          <Route path="/" element={<CatFacts />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
