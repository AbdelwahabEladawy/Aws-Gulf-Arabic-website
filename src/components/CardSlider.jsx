import mobile from "../../public/assets/images/mobileDev.svg";
import web from "../../public/assets/images/webDev.svg";
import design from "../../public/assets/images/designing.svg";
import arrow from "../../public/assets/icons/ArrowUpRight.svg";
import Button from "./Button";

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-10 mb-10 ">
        <Slider {...settings}>
          <div className="card flex-col items-center justify-center">
            <div
              className="my-5 mx-5 hover:scale-105 hover:transition-all hover:duration-100 hover:border hover:border-[#E0E0E0] border-2 hover:rounded-[10px] hover:bg-card
             border-[#E0E0E0] rounded-[10px] "
            >
              <div className="">
                <img
                  src={web}
                  className="w-[500px] h-[300px] m-auto mb-6 "
                  alt="webDevelopment"
                />
              </div>
              <div className="flex-col justify-start items-start ">
                <h3 className="font-cairo font-bold text-lg text-[#333] text-center mb-4">
                  تطوير المواقع الإلكترونية
                </h3>
                <p className="text-sm font-cairo font-normal text-center">
                  الاعتماد على حلولنا الرقمية يعني الاستفادة من خبرتنا <br />{" "}
                  .لتحويل أفكارك إلى واقع رقمي جذاب يحقق النجاح
                </p>

                <div className="flex justify-center mt-32 mb-7 ">
                  <img src={arrow} alt="arrowIcon" />
                  <Button type="linkBtn">اعرف المزيد</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="card flex-col items-center justify-center">
            <div
              className="my-5 mx-5 hover:scale-105 hover:transition-all hover:duration-100 hover:border hover:border-[#E0E0E0] border-2 hover:rounded-[10px] hover:bg-card
             border-[#E0E0E0] rounded-[10px] "
            >
              <div className="">
                <img
                  src={mobile}
                  className="w-[500px] h-[300px] m-auto mb-6 "
                  alt="webDevelopment"
                />
              </div>
              <div className="flex-col justify-start items-start ">
                <h3 className="font-cairo font-bold text-lg text-[#333] text-center mb-4">
                  تطوير تطبيقات الجوال{" "}
                </h3>
                <p className="text-sm font-cairo font-normal text-center">
                  نقدم تطبيقات موبايل مبتكرة تتجاوز التوقعات، معززةً حضورك{" "}
                  <br />
                  .الرقمي بالكفاءة والتأثير
                </p>

                <div className="flex justify-center mt-32 mb-7 ">
                  <img src={arrow} alt="arrowIcon" />
                  <Button type="linkBtn">اعرف المزيد</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="card flex-col items-center justify-center ">
            <div
              className="my-5 mx-5 hover:scale-105 hover:transition-all hover:duration-100 hover:border hover:border-[#E0E0E0] border-2 hover:rounded-[10px] hover:bg-card
             border-[#E0E0E0] rounded-[10px] "
            >
              <div className="">
                <img
                  src={design}
                  className="w-[500px] h-[310px] m-auto mb-6 "
                  alt="webDevelopment"
                />
              </div>
              <div className="flex-col justify-start items-start ">
                <h3 className="font-cairo font-bold text-lg text-[#333] text-center">
                  تصميم يركز على المستخدم{" "}
                </h3>
                <p className="text-sm font-cairo font-normal text-center">
                  في سينديون، نبدع تجارب مستخدم بديهية وجذابة بصريًا، <br />{" "}
                  مصممة وفقًا لاحتياجات جمهورك، مما يضمن تفاعلات <br /> ذات مغزى
                  تعكس هوية علامتك التجارية
                </p>

                <div className="flex justify-center mt-32 mb-[16px] ">
                  <img src={arrow} alt="arrowIcon" />
                  <Button type="linkBtn">اعرف المزيد</Button>
                </div>
              </div>
            </div>
          </div>
        </Slider>

       <div className="mt-8">
       <Button type="linkBtn"> استكشف خدماتنا</Button>
       </div>
      </div>

    </>
  );
}
