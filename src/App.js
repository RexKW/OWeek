import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/rules' element={<Rules />} />
            <Route exact path='/schedule' element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
