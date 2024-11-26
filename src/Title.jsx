import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useQueryClient, useQuery, keepPreviousData } from "react-query";
import { getArtInfo } from "./api/api";
import { search, art, pages } from "./store";
import { Link } from "react-router-dom";

export default function Title() {
  const [theme, setTheme] = useAtom(search);
  const [, setArtResponse] = useAtom(art);
  const [number, setNumber] = useAtom(pages);

  const queryClient = useQueryClient();
  const { data } = useQuery(
    ["artworks", theme, number],
    () => getArtInfo(theme, number),
    {
      placeholderData: keepPreviousData,
    }
  );

  const themeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      queryClient.invalidateQueries(["artworks", theme]);
    }
  };

  useEffect(() => {
    if (data) {
      setArtResponse(data);
    }
  }, [data, setArtResponse, setNumber]);

  return (
    <div className="Title-container">
      <div className="title-container">
        <nav>
          <Link to="/" className="Title">
            The Cleveland Museum of Art
          </Link>
        </nav>
        <div className="input-container">
          <input
            type="text"
            className="search-box"
            value={theme}
            onChange={themeChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by keyword"
          />
          <button
            className="search-btn"
            type="button"
            onClick={() => queryClient.invalidateQueries(["artworks", theme])}
          >
            <img
              className="search-img"
              src="https://cdn-icons-png.flaticon.com/512/2866/2866321.png"
              alt="search icon"
            ></img>
          </button>
        </div>
      </div>
      <Link to="/like" className="tolike-btn">
        what you like
      </Link>
    </div>
  );
}
