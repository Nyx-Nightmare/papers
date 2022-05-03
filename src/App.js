import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Freshman from "./Components/Freshman"
import Profile from "./Components/Profile";
import About from "./Components/About";
import Available from "./Components/Avialable";
import Pending from "./Components/Pending";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pending" element={<Pending />} />
        <Route path="/Forms" element={<Available />} />
        <Route path="/Freshman" element={<Freshman />} />
      </Routes>
    </Router>
  );

  
}
