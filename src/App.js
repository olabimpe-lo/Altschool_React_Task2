import Navbar from "./Navbar";
import Employee from "./pages/EmployeeRecord";
import Home from "./pages/Home";
import About from "./pages/About";

//the two components allows us define all our route and group them together
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <div className="component">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
