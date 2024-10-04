import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Results from './components/Results';
import Error from './components/Error';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
