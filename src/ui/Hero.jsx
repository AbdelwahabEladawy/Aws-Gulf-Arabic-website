import Button from "../components/Button";
import heroImg from "../../public/assets/images/34beae32-da62-437d-9af6-1c67cc073acd.png";
import x from "../../public/assets/icons/x.svg";
import faceBook from "../../public/assets/icons/facebook.svg";
import youtube from "../../public/assets/icons/youtube.svg";
import insta from "../../public/assets/icons/insta.svg";
import behance from "../../public/assets/icons/behance.svg";
import snap from "../../public/assets/icons/snap.svg";
import linked from "../../public/assets/icons/linked.svg";

export default function Hero() {
  return (
    <div className="flex-col mt-28 text-primary m-0 xl:flex xl:flex-row ">
      <div className="xl:w-50 m-auto w-fullflex-col justify-center items-center ">
        <h1 className="mb-6 font-cairo text-[48px] font-bold">دليلك نحو المستقبل</h1>
        <p className="text-secondary mb-28 font-cairo leading-8 font-normal xl:w-[500px]ps self-stretch ">
          {" "}
          استشارات التسويق، تصميم واجهات المستخدم وتجربة المستخدم للمواقع،
          تطبيقات الهواتف البرمجية، الإعلانات المدفوعة، إنشاء المحتوى، التصميم
          الجرافيكي، الذكاء الاصطناعي وإنتاج الفيديو.
        </p>
        <Button type="primary">اتصل بنا الآن</Button>


        <div className="flex  mx-0 mt-14  sm:space-x-5  space-x-2">
          <img src={x} alt="x-platform"  className="xl:w-[25px] sm:me-3 me-2  " />
          <img src={snap} alt="snap-platform" className="xl:w-[25px] " />
          <img src={faceBook} alt="faceBook-platform" className="xl:w-[25px] " />
          <img src={youtube} alt="youtube-platform" className="xl:w-[25px] " />
          <img src={linked} alt="linked-platform" className="xl:w-[25px] " />
          <img src={insta} alt="insta-platform" className="xl:w-[25px] " />
          <img src={behance} alt="behance-platform" className="xl:w-[25px] " />
        </div>

    
      </div>

      <div className="w-full  flex-col space-y-16 items-center justify-center mt-16 xl:mt-0 ">
        <img src={heroImg} className=" m-auto w-80 h-64" alt="Logo" />
        <div className="flex-col xl:flex xl:flex-row xl:justify-center xl:gap-32 xl:items-center space-y-4 xl:space-y-0  ">
          <Button type="primaryTrans"> Software Solutions</Button>  
          <Button type="primaryTrans" >Marketing Solutions</Button>
        </div>
      </div>
    </div>
  );
}
