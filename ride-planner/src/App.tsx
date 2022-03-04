import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Books from "./components/Books";
import Houses from "./components/Houses";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
