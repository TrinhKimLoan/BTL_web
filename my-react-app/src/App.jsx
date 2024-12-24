import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryDetail from "./pages/StoryDetail";
import ChapterDetail from "./pages/ChapterDetail";
import Header from "./components/Header";
import FilteredStories from "./pages/FilteredStories";
import GenreStories from "./pages/GenreStories";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/chapter/:id" element={<ChapterDetail />} />
        <Route path="/completed" element={<FilteredStories status="completed" />} />
        <Route path="/ongoing" element={<FilteredStories status="ongoing" />} />
        <Route path="/genres/:genreId" element={<GenreStories />} />
      </Routes>
    </Router>
  );
};

export default App;
