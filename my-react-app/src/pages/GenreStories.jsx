import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StoryCard from "../components/StoryCard";

const GenreStories = () => {
  const { genreId } = useParams();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoriesByGenre = async () => {
      try {
        // Lấy danh sách story_id từ genre_id
        const response = await fetch("http://localhost:3000/story-genres");
        const data = await response.json();
        const storyIds = data
          .filter((item) => item.genre_id.toString() === genreId)
          .map((item) => item.story_id);
  
        // Lấy chi tiết các truyện theo story_id
        const storyDetails = await Promise.all(
          storyIds.map(async (id) => {
            const res = await fetch(`http://localhost:3000/stories/${id}`);
            return res.json();
          })
        );
  
        // Làm phẳng mảng để loại bỏ các mảng con
        setStories(storyDetails.flat());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stories by genre:", error);
        setLoading(false);
      }
    };
  
    fetchStoriesByGenre();
  }, [genreId]);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (stories.length === 0) {
    return <p>Không có truyện nào trong thể loại này.</p>;
  }

  return (
    <div className="container mt-5">
      
      <div className="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
  
};

export default GenreStories;
