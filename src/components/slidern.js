import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,

} from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
  const {  onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowRight}
                     className="slick-arrow slick-next"
                     onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowLeft}
                     className="slick-arrow slick-prev"
                     onClick={onClick}/>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="section container">
      <div>
        <Slider {...settings}>
          <div>
            <StaticImage src="../../static/img/natasha1.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>
            <StaticImage src="../../static/img/natasha2.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>

            <StaticImage src="../../static/img/natasha3.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>
            <StaticImage src="../../static/img/natasha4.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>
            <StaticImage src="../../static/img/natasha5.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>
            <StaticImage src="../../static/img/natasha6.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
          <div>
            <StaticImage src="../../static/img/natasha7.png" alt="natasha" className="sliderimage"
                         objectFit="contain"
                         placeholder="none"
                         backgroundColor= "transparent"
            />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

