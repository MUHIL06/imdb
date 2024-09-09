import "./App.css";
import{BrowserRouter, Routes, Route}from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";
import AddMovie from "./pages/Add";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Home   />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
