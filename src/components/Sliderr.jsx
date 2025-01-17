// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cisco from "../../public/assets/images/cisci.png";
import dell from "../../public/assets/images/dell.png";
import kasper from "../../public/assets/images/kasper.jpg";
import lenovo from "../../public/assets/images/lenovo.png";
import microsoft from "../../public/assets/images/microsoft 1.jpg";
import pep from "../../public/assets/images/pep.png";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    centerMode: true,
    cssEase: "linear",
  };
  return (
    <>
      <div className="h-32  ">
        <Slider {...settings} className="md:flex md:justify-center md:items-center  flex-col">
          <div>
            <img
              className="sm:w-64 w-40 h-[30px]  gap-[40px] sm:h-[70px]"
              src={kasper}
              alt="kasper-logo"
            />
          </div>
          <div>
            <img
              className="sm:w-64 w-40 h-[30px] gap-[40px] sm:h-[70px]"
              src={microsoft}
              alt="microsoft-logo"
            />
          </div>
          <div>
            <img
              className="sm:w-64 w-40 h-[30px] gap-[40px] sm:h-[70px]"
              src={pep}
              alt="kasper-logo"
            />
          </div>
          <div>
            <img
              className="sm:w-64 w-40 h-[30px] gap-[40px] sm:h-[70px]"
              src={dell}
              alt="dell-logo"
            />
          </div>
          <div>
            <img
              className="sm:w-64 w-40 h-[30px] gap-[40px] sm:h-[70px]"
              src={cisco}
              alt="pep-logo"
            />
          </div>
          <div>
            <img
              className="sm:w-64 w-40 h-[30px] gap-[40px] sm:h-[70px]"
              src={lenovo}
              alt="dell-logo"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
