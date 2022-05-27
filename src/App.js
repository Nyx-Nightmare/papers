import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Freshman from "./Components/Freshman"
import Profile from "./Components/Profile";
import About from "./Components/About";
import AboutP from "./Components/AboutP";
import Available from "./Components/Avialable";
import Pending from "./Components/Pending";
import LogIn from "./Components/LogIn";
import NavbarProfile from "./Components/NavbarPofile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/:id/AboutP" element={<AboutP />} />
        <Route path="/:id/Pending" element={<Pending />} />
        <Route path="/:id/Forms" element={<Available />} />
        <Route path="/Freshman" element={<Freshman />} />
      </Routes>
    </Router>
  );

  
}
