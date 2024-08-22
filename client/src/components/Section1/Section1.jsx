import React from "react";
import Wallpaper from "../../assets/sec1wallpaper2.jpg";
import "./section1.scss";
import Navbar from "../Navbar/Navbar";

const Section1 = () => {
  return (
    <div className="section1 relative">
      {/* <video
        autoPlay
        loop
        muted
        className="video-background object-cover w-full h-full absolute top-0 left-0"
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src={Wallpaper} alt="Wallpaper" className="h-[850px] w-full" />

      {/* Navbar over the section */}
      <Navbar />

      <div className="content absolute inset-0 flex flex-col justify-center items-start text-white z-10 px-10">
        <div>
          <h1 className="text-6xl font-sans font-extrabold">Everyday Luxury</h1>
          <p className="mt-2 mb-0">
            Beautiful pieces to pass down for generations
          </p>
        </div>

        <div className="flex gap-2 space-x-3 mx-1 p-10">
          <div className="flex items-center gap-1.5 cursor-pointer text-xs font-bold mt-11 border-2 bg-black text-white w-[150px] justify-center">
            <span className="p-[14px]">Shop Collection</span>
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer text-xs font-bold mt-11 border-2 bg-white text-black w-[150px] justify-center">
            <span className="p-[14px]">Shop Sale</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
