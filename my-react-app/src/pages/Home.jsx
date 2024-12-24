import React, { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";
import { fetchStories } from "../api";
import '../index.css';

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories().then((data) => setStories(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">DANH SÁCH TRUYỆN</h1>
      <div className="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Home;
