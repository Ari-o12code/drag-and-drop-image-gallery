import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginPage from '../components/LoginPage';
import GalleryPage from '../components/GalleryPage';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

