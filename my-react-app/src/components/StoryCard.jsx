// import React from "react";
// import { Link } from "react-router-dom";

// const StoryCard = ({ story }) => {
//   if (!story) {
//     return <p>Loading...</p>; // Xử lý khi không có dữ liệu
//   }

//   return (
//     <div className="card">
//       <img src={story.image} alt={story.title} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{story.title}</h5>
//         <p className="card-text">Tác giả: {story.author}</p>
//         <p className="card-text">Trạng thái: {story.status}</p>
//         <Link to={`/story/${story.id}`} className="btn btn-primary">
//           Xem chi tiết
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StoryCard;
import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Đảm bảo tạo file CSS này

const StoryCard = ({ story }) => {
  if (!story) {
    return <p>Loading...</p>; // Xử lý khi không có dữ liệu
  }

  return (
    <div className="story-card story-grid">
      <div className="image-wrapper">
        <img src={story.image} alt={story.title} className="story-image" />
      </div>
      <div className="story-details">
        <h5 className="story-title">{story.title}</h5>
        <p className="story-author"><strong>Tác giả: </strong>{story.author}</p>
        <p className="story-status"><strong>Trạng thái: </strong>{story.status}</p>
        <Link to={`/story/${story.id}`} className="btn btn-primary btn-detail">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
