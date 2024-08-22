import React from "react";
import Sec3img from "../../assets/sec3img.jpg";
import Sec3img2 from "../../assets/sec3img2.jpg";
import Sec3img3 from "../../assets/sec3img3.jpg";

const Section3 = () => {
  return (
    <div className="flex justify-around gap-5 items-center my-10 p-11"
    style={{
        backgroundColor:"#f5f2ec"
    }}>
      <div>
        <img src={Sec3img} alt="sec 3" className="w-[600px] h-[600px]" />
      </div>
      <div className="flex-col justify-center items-center gap-11">
        <p className="font-thin text-center">Trends & Tradition</p>
        <h4 className="font-extrabold font-serif text-4xl mt-4 mb-4">
          For Everyday Wear
        </h4>
        <p className="text-2xl font-light mb-9">
          From dainty classics that are perfect for daily adornment <br /> to
          chic, to trendsetting pieces designed <br /> to complement any
          occasion – our selection <br /> blends exquisite craftsmanship with
          modern sensibility.
        </p>
        <div className="image flex justify-evenly space-x-2">
          <div className="flex-col">
            <img
              src={Sec3img2}
              alt=""
              className="w-[200px] h-[250px] mb-4 cursor-pointer"
            />
            <span className="border-none bg-slate-500 px-[56px] py-[18px] text-slate-800 text-center">
              BestSellers<sup>97</sup>
            </span>
          </div>
          <div className="flex-col">
            <img
              src={Sec3img3}
              alt=""
              className="w-[201px] h-[250px] mb-4 cursor-pointer"
            />
            <span className="border-none bg-slate-500 px-[78px] py-[18px] text-slate-800 text-center">
              New<sup>15</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
