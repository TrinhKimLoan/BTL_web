import React, { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";
import { useParams } from "react-router-dom";

const FilteredStories = ({ status }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredStories = async () => {
      try {
        const response = await fetch("http://localhost:3000/stories");
        const data = await response.json();
        const filteredStories = data.filter((story) => story.status === status);
        setStories(filteredStories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setLoading(false);
      }
    };

    fetchFilteredStories();
  }, [status]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (stories.length === 0) {
    return <p>Không có truyện nào thuộc trạng thái này.</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">{status === "completed" ? "Truyện Đã Hoàn" : "Truyện Đang Ra"}</h1>
      <div className="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default FilteredStories;
