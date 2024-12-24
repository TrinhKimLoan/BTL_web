// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { fetchStoryDetails, fetchChaptersByStory } from "../api";

// const StoryDetail = () => {
//   const { id } = useParams();
//   const [story, setStory] = useState(null);
//   const [chapters, setChapters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadStoryAndChapters = async () => {
//       try {
//         const storyData = await fetchStoryDetails(id);
//         setStory(storyData[0]); // Giả sử API trả về mảng
//         const chapterData = await fetchChaptersByStory(id);
//         setChapters(chapterData); // Lưu danh sách chương
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     loadStoryAndChapters();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!story) {
//     return <p>Không tìm thấy truyện.</p>;
//   }

//   return (
//     <div>
//       <h1>{story.title}</h1>
//       <img src={story.image} alt={story.title} />
//       <p><strong>Tác giả:</strong> {story.author}</p>
//       <p>{story.description}</p>
//       <p><strong>Trạng thái:</strong> {story.status}</p>
//       <p><strong>Ngày đăng:</strong> {new Date(story.created_at).toLocaleDateString()}</p>
      
//       <h2>Danh Sách Chương</h2>
//       <ul>
//         {chapters.map((chapter) => (
//           <li key={chapter.id}>
//             <Link to={`/chapter/${chapter.id}`}>
//               {`Chương ${chapter.chapter_number}: ${chapter.title}`}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StoryDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchStoryDetails, fetchChaptersByStory } from "../api";

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoryAndChapters = async () => {
      try {
        const storyData = await fetchStoryDetails(id);
        setStory(storyData[0]);
        const chapterData = await fetchChaptersByStory(id);
        setChapters(chapterData);

        // Fetch genres
        const genreResponse = await fetch(
          `http://localhost:3000/story-genres/story/${id}`
        );
        const genreData = await genreResponse.json();
        setGenres(genreData.map((genre) => genre.genre_name));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    loadStoryAndChapters();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!story) {
    return <p>Không tìm thấy truyện.</p>;
  }

  return (
    <div className="story-detail-container">
      {/* Left Section: Cover Image */}
      <div className="story-detail-cover">
        <img src={story.image} alt={story.title} className="story-cover-image" />
      </div>

      {/* Right Section: Story Info */}
      <div className="story-detail-info">
        <div className="story-info-box">
          <h1 className="story-title">{story.title}</h1>
          <p>
            <strong>Tác giả:</strong> {story.author}
          </p>
          <p>
            <strong>Thể loại:</strong> {genres.join(", ")}
          </p>
          <p>
            <strong>Ngày đăng:</strong>{" "}
            {new Date(story.created_at).toLocaleDateString()}
          </p>
          <p>
            <strong>Trạng thái:</strong> {story.status}
          </p>
          <div className="story-buttons">
            <Link to={`/chapter/${chapters[0]?.id}`} className="btn btn-primary btn-detail">
              Chương đầu
            </Link>
            <Link
              to={`/chapter/${chapters[chapters.length - 1]?.id}`}
              className="btn btn-primary btn-detail"
            >
              Chương cuối
            </Link>
          </div>
        </div>
      </div>

      {/* Story Description */}
      <div className="story-description">
        <h2><i class="fa-regular fa-envelope-open"></i> Văn án</h2>
        <p>{story.description}</p>
      </div>

      {/* Chapter List */}
      <div className="story-detail-chapters">
        <h2 style={{ fontFamily: 'Courier New' }}><i class="fa-solid fa-bomb"></i> Danh Sách Chương</h2>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <div className="chapter-item" key={chapter.id}>
              <Link to={`/chapter/${chapter.id}`}>
                {`Chương ${chapter.chapter_number}: ${chapter.title}`}
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StoryDetail;

