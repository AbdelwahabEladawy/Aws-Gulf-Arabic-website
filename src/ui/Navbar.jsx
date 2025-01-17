import logo from "../../public/assets/icons/logo.svg";
import global from "../../public/assets/icons/Globe.svg";

import Toggle from "../components/Toggle";
import Button from "../components/Button";

export default function NavBar() {
  return (
    <>
      <div className="w-full m-auto  flex flex-col justify-center xl:w-75 items-center xl:flex xl:flex-row xl:justify-center xl:items-center xl:mt-[38px] font-cairo text-primary">
        <div className="flex-col justify-center items-center text-center xl:m-auto me-5   ">
          <img src={logo} className="xl:ms-[5px]" alt="GULF" />
          <span className="text-xl xl:px-[7px]  ">GULF</span>
        </div>
        <ul className=" w-full flex-col justify-center items-center xl:flex xl:flex-row xl:justify-center space-x-10">
          <li className=" text-center my-3 me-7">خدماتنا</li>
          <li className=" text-center my-3 whitespace-nowrap ">
            تكنولوجيا المعلومات والأجهزة
          </li>
          <li className=" text-center my-3">أعمالنا</li>
          <li className=" text-center my-3">من نحن</li>
          <li className=" text-center my-3">الوظائف</li>
          <li className=" text-center my-3">مقالاتنا</li>
        </ul>
        <div className="flex justify-center items-center xl:flex xl:flex-row xl:justify-center xl:items-center ">
          <Toggle />
          <span className="flex justify-center items-center w-6 h-6 xl:flex xl:flex-row xl:justify-center xl:items-center">
            <span className=" xl:me-14  me-6 text-center">English</span>
            <img src={global} className="w-6 h-6 m-0" alt="globalworld" />
          </span>

          <Button type="primary">
            <p>اتصل بنا</p>
          </Button>
        </div>
      </div>
    </>
  );
}
