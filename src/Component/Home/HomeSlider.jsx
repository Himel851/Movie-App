import React from "react";
import playButton from "../../Images/play-button.png";
import { Link } from "react-router-dom";
import play from "../../Images/play.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};

const HomeSlider = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="homeContainer">
      <Slider {...settings}>
        {items.map((item) => (
          <div className="box">
            <div className="coverImage">
              <img src={item.cover} alt="" />
            </div>
            <div className="content flex">
              <div className="details row">
                <h1>{item.name}</h1>
                <div className="rating flex">
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half"></i>
                  </div>

                  <label>{item.rating}</label>
                  <span>GP</span>
                  <label>{item.time}</label>
                </div>
                <p>{item.desc}</p>
                <div className="cast">
                  <h4>
                    <span>Starring &nbsp;</span>
                    {item.starring}
                  </h4>
                  <h4>
                    <span>Genres &nbsp;</span>
                    {item.genres}
                  </h4>
                  <h4>
                    <span>Tags &nbsp;</span>
                    {item.tags}
                  </h4>
                </div>
                <Link to={`/watch/${item.id}`}>
                  <button className="primary-btn">
                    <i className="fas fa-play"></i> PLAY NOW
                  </button>
                </Link>
              </div>
              <div className="playButton row">
                <Link to={`/watch/${item.id}`}>
                  <button>
                    <div className="img">
                      <img src={playButton} alt="" />
                      <img className="change" src={play} alt="" />
                    </div>
                    Watch Trailer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
