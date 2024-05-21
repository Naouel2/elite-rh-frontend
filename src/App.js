
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from './pages/Login';
import Home from './pages/Home'
import Formation from './pages/Formation';
import Profile from './pages/Profile';

// Components
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/formation" element={<ProtectedRoute><Formation /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
