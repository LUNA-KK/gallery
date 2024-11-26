import "./Like.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Like() {
  const likes = JSON.parse(sessionStorage.getItem("likes")) || [];

  const settings = {
    dots: true,
    infinite: likes.length > 1,
    speed: 1000,
    slidesToShow: likes.length > 3 ? 3 : likes.length,
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
