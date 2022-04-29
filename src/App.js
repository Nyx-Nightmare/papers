import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Freshman from "./Components/Freshman"
import Profile from "./Components/Profile";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/Freshman" element={<Freshman />} />
      </Routes>
    </Router>
  );

  
}
