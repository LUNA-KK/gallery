import { useState } from "react";
import { ReactComponent as Heart } from "./asset/heart.svg";
import filled from "./asset/filled-heart.png";
import "./Art.css";
import { useAtom } from "jotai";
import { art, liked, pages } from "./store";
import Header from "./Header";
import React from "react";
//&department=Chinese Art

export default function Art() {
  const [artResponse] = useAtom(art);
  const [, setLike] = useAtom(liked);
  const [, setNumber] = useAtom(pages);
  const [height, setHeight] = useState(400);

  console.log(artResponse);

  const storeLike = (idx) => {
    sessionStorage.setItem(`${idx}url`, artResponse[idx].images.web.url);
    sessionStorage.setItem(`${idx}title`, artResponse[idx].title);
    sessionStorage.setItem(`${idx}`, idx);
    setLike((prev) => {
      sessionStorage.setItem("likes", JSON.stringify([...prev, idx]));
      return [...prev, idx];
    });
  };

  const handleSeeMore = () => {
    setNumber((prev) => prev + 30);
    setHeight((prev) => prev + 130);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="top-container" style={{ height: `${height}vh` }}>
          {artResponse &&
            artResponse.map((item, idx) => (
              <div className="item-container" key={idx}>
                {item.images?.web?.url ? (
                  <img
                    src={item.images.web.url}
                    alt={item.title || ""}
                    className="art-image"
                  />
                ) : (
                  <p></p>
                )}
                <div className="name-set">
                  <p className="art-title">{item.title}</p>
                  {sessionStorage.getItem(`${idx}`) !== null ? (
                    <img
                      src={filled}
                      alt="filled heart"
                      className="heart-svg"
                    />
                  ) : (
                    <Heart
                      type="button"
                      className="heart-svg"
                      onClick={() => storeLike(idx)}
                    />
                  )}
                </div>
              </div>
            ))}
          <button onClick={handleSeeMore} type="button">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
