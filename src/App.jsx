import "./App.css";
import Login from "../src/Pages/Login.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";

function App() {
  return (
    <>
      <div className="bg-blue-200h-screen m-0 p-0">
        <nav className="mb-4">
          <Link to="/login"></Link>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
