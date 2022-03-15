import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Books from "./components/Books";
import Houses from "./components/Houses";
import Video from "./components/Video";
import Characters from "./components/Characters";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Video />
              </>
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/search" element={<Search /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
