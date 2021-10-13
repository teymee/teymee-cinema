import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

function Slide(props) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }


  const responsives= [
    {
      breakpoint: 3400,
      settings: {
        slidesToShow: 6,
        speed: 1500,
        autoplaySpeed: 3800,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3                     ,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ]

    const responsives2= [
      {
      breakpoint: 3400,
      settings: {
        slidesToShow: 8,
        speed: 1500,
        autoplaySpeed: 4000,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
      },
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          speed: 1500,
          autoplaySpeed: 2500,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 1200,
          autoplaySpeed: 1000,
          dots: false,
        },
      },
    ]
 
  let responsive = props.component === "cast-list" ? responsives : responsives2;

  

  const settings = {
    infinite: true,
    swipeToSlide: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-out",
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive
  };




  let settingsFalse;


  if (!props.isTrue) {
    settingsFalse = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  let finalSetting = props.isTrue ? { ...settings } : { ...settingsFalse };

  return (
    <Slider {...finalSetting} className={props.styles}>
      {props.children}
    </Slider>
  );
}

export default Slide;
