import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Books from "./components/Books";
import Houses from "./components/Houses";
import Video from "./components/Video";
import Characters from "./components/Characters";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
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
            <Route path="/search" element={<Search />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
