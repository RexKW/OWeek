import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Schedule from './pages/Schedule';
import Countdown from './pages/Countdown';
import Footer from './components/Footer'
import 'flowbite/dist/flowbite.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/countdown' element={<Countdown />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/rules' element={<Rules />} />
            <Route exact path='/schedule' element={<Schedule />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
