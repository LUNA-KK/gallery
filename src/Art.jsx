import { useState } from "react";
import { ReactComponent as Heart } from "./asset/heart.svg";
import filled from "./asset/filled-heart.png";
import "./Art.css";
import { useAtom } from "jotai";
import { art, liked } from "./store";
import Header from "./Header";
//&department=Chinese Art

export default function Art() {
  const [artResponse] = useAtom(art);
  const [like, setLike] = useAtom(liked);
  const [, setRender] = useState(1);
  const storeLike = (idx) => {
    localStorage.setItem(`${idx}url`, artResponse[idx].images.web.url);
    localStorage.setItem(`${idx}title`, artResponse[idx].title);
    localStorage.setItem(`${idx}`, idx);
    setLike((prev) => [...prev, idx]);
    setRender((prev) => prev + 1);
  };
  console.log(like);
  return (
    <div className="container">
      <Header />
      <div className="top-container">
        {artResponse &&
          artResponse.map((item, idx) => (
            <div className="item-container">
              <img src={item.images.web.url} className="art-image"></img>
              <div className="name-set">
                <p className="art-title">{item.title}</p>
                {localStorage.getItem(`${idx}`) !== null ? (
                  <img src={filled} className="heart-svg" />
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

        <button type="button">See more</button>
      </div>
    </div>
  );
}
