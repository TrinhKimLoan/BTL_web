import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  const [genres, setGenres] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:3000/genres");
        if (!response.ok) {
          throw new Error("Failed to fetch genres");
        }
        const data = await response.json();
        setGenres(data); // Cập nhật danh sách thể loại
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fb6f92" }}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand text-white" to="/">
          Novel
        </Link>

        {/* Center Menu */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/completed">
                Truyện đã hoàn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ongoing">
                Truyện đang ra
              </Link>
            </li>

            {/* Dropdown for Genres */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="genreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Phân loại
              </a>
              <ul className="dropdown-menu" aria-labelledby="genreDropdown">
                {genres.length > 0 ? (
                  genres.map((genre) => (
                    <li key={genre.id}>
                      <Link className="dropdown-item" to={`/genres/${genre.id}`}>
                        {genre.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item text-muted">Không có thể loại</li>
                )}
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          {/* Search Button */}
          <button
            className="btn btn-outline-light me-2"
            onClick={() => setShowSearch(!showSearch)}
          >
            <i className="fas fa-search"></i>
          </button>
          {showSearch && (
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm truyện..."
              />
            </div>
          )}

          {/* User Icon */}
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <i className="fas fa-user-circle" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

