import Navbar from "./components/Navbar";
import ClientRecord from "./components/ClientRecord";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
//the two components allows us define all our route and group them together
import { Route, Routes } from "react-router-dom";
import Datafetching from "./Pages/Datafetching";
function App() {
  return (
    <>
      <Navbar />

      <div className="Component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientdata" element={<Datafetching />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
