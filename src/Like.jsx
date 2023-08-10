import { useAtom } from "jotai";
import { liked } from "./store";
import "./Like.css";

export default function Like() {
  const [like] = useAtom(liked);
  console.log(like);
  return (
    <div>
      <h1 className="subtitle">what you like</h1>
      <div className="top-container">
        <div>
          {like.map((item) => (
            <div className="item-container">
              <img
                className="art-image"
                src={localStorage.getItem(`${item}url`)}
              ></img>
              <div className="name-set">
                <p className="art-title">
                  {localStorage.getItem(`${item}title`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
