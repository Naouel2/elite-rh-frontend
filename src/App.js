
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*pages*/
import Login from './pages/Login';
import Home from './pages/Home'
import Formation from './pages/Formation';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/formation" element={<Formation />} />
    </Routes>

  </Router>
  );
}

export default App;
