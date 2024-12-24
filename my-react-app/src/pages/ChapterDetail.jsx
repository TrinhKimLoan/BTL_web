import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchChapterDetails } from "../api";
import "../index.css"; // Import CSS file

const ChapterDetail = () => {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  // Xử lý scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const loadChapter = async () => {
      try {
        const data = await fetchChapterDetails(id);
        setChapter(data[0]); // Giả sử API trả về mảng
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chapter:", error);
        setLoading(false);
      }
    };

    loadChapter();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!chapter) {
    return <p>Không tìm thấy chương.</p>;
  }

  return (
    <div className="chapter-container">
      
      <h1 className="chapter-title">{`Chương ${chapter.chapter_number}: ${chapter.title}`}</h1>
      <p className="chapter-date">
        <strong>Ngày đăng:</strong> {new Date(chapter.created_at).toLocaleDateString()}
      </p>
      <div
        className="chapter-content"
        dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, "<br>") }}
      ></div>
      <button className="scroll-to-top" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default ChapterDetail;
