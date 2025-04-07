import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movieinfo from "./Components/MovieInfo";
import TopRated from "./Components/TopRated";
import UpComing from "./Components/UpComing";
import Search from "./Components/Search";
function App() {
  return (
    <Router>
      {/* Router component should wrap your whole app */}
      <Navbar />
      <Routes>
        {/* Define the routes for your app */}
        <Route path="/" element={<Home />} />
        <Route path="/movieinfo/:movieid" element={<Movieinfo />} />
        <Route path="/Toprated" element={<TopRated />} />
        <Route path="/Upcomings" element={<UpComing />} />
        <Route path="/search/:searchresult" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
