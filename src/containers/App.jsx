import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginPage from '../components/LoginPage';
import GalleryPage from '../components/GalleryPage';
import Login from '../components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

