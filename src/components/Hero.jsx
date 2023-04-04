import React from "react";
import WomanImg from "../img/woman_hero.png";
import image from "../img/image.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-[800px] bg-blue-200 bg-center bg-no-repeat py-24 mt-0">
      <div className="mx-12 flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3 mb-16">New Trend</div>
          </div>
          <h1 className="text-[70px] leadinf-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">MENS & WOMENS</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to={"/"}
          >
            Discover More
          </Link>
        </div>
        <div>
          {/* <img className="hidden lg:block" src={WomanImg} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
