import Navbar from "./Navbar";
import EmployeeRecord from "./components/EmployeeRecord";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
//the two components allows us define all our route and group them together
import { Route, Routes } from "react-router-dom";
import Datafetching from "./user/Datafetching";
function App() {
  return (
    <>
      <Navbar />

      <div className="Component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Datafetching />} />
          <Route path="/about" element={<About />} />
           <Route path="/404" element={<Error />} />
        </Routes>
      </div>

      <ErrorPage/>
      <Home/>
    </>
  );
}

export default App;
