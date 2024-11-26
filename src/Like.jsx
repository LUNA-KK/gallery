import { useAtom } from "jotai";
import { liked } from "./store";
import "./Like.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Like() {
  const [like] = useAtom(liked);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const likes = JSON.parse(sessionStorage.getItem("likes")) || like;
  console.log(likes);

  return (
    <div>
      <h1 className="subtitle">what you like</h1>
      <Slider {...settings} className="link-container">
        {likes.map((item) => (
          <div className="item-container">
            <img
              className="art-image-like"
              src={sessionStorage.getItem(`${item}url`)}
              alt={sessionStorage.getItem(`${item}title`) || ""}
            ></img>
            <div className="name-set">
              <p className="art-title-like">
                {sessionStorage.getItem(`${item}title`)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
