import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
//the two components allows us define all our route and group them together
import { Route, Routes } from "react-router-dom";
import Datafetching from "./Pages/Datafetching";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Navbar />
      <div className="Component">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientdata" element={<Datafetching />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
