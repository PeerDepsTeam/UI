import {FC} from "react";
import backgroundImage from "@/pages/image/bg.jpg";
import logoImage from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center pt-1 filter w-full h-full object-cover filter brightness-75"
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className="mt-5 h-screen">
          <header className="flex items-center justify-between rounded-full border-b-2 border-gray-300 bg-white bg-opacity-75 px-5 py-2">
            <div className="logo">
              <img src={logoImage} alt="" className="w-15 h-14" />
            </div>

            <button className=" rounded-full bg-[#F79540] px-10 py-2 font-bold text-white hover:bg-[#FC4F00]">
              <Link to="/signin">Login</Link>
              
            </button>
          </header>
          <div className="flex h-screen items-center justify-center">
            <div className="w-1/3 ">
              <h1 className="text-6xl font-bold text-white">
                Welcome to EDUC-FI
              </h1>
              <p className="w-{30px} text-l mt-6 text-white text-2xl text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                corporis ducimus officia, dolore quia ex quam expedita cumque
                numquam odio, mollitia natus voluptas. Quisquam commodi tempore,
                esse illo quo ab.
              </p>
              <div className="flex items-center justify-center ">
              <Button className="bg-[#FC4F00] rounded-full px-12 py-7 mt-12 text-md  hover:bg-[#FC4F00]">
                <Link to="/signup">Join for Free</Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
