import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Freshman from "./Components/Freshman"
import Profile from "./Components/Profile";
import ProfileAdvisor from "./Components/ProfileAdvisor";
import About from "./Components/About";
import AboutP from "./Components/AboutP";
import AboutA from "./Components/AboutA";
import Sent from "./Components/Sent";
import Available from "./Components/Avialable";
import Pending from "./Components/Pending";
import LogIn from "./Components/LogIn";
import NavbarProfile from "./Components/NavbarPofile";
import NavbarAdvisor from "./Components/NavbarAdvisor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/:id/:name" element={<ProfileAdvisor />} />
        <Route path="/About" element={<About />} />
        <Route path="/:id/AboutP" element={<AboutP />} />
        <Route path="/:id/:name/AboutA" element={<AboutA />} />
        <Route path="/:id/:name/Sent" element={<Sent />} />
        <Route path="/:id/Pending" element={<Pending />} />
        <Route path="/:id/Forms" element={<Available />} />
        <Route path="/Freshman" element={<Freshman />} />
      </Routes>
    </Router>
  );

  
}
