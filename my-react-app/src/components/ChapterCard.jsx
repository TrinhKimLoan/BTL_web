import React from "react";
import { Link } from "react-router-dom";

const ChapterCard = ({ chapter }) => {
  return (
    <li className="list-group-item">
      <Link to={`/chapters/${chapter.id}`}>
        {chapter.chapter_number}. {chapter.title}
      </Link>
    </li>
  );
};

export default ChapterCard;
