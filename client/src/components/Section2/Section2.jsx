import React from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Desc1 from "../../assets/desc1.jpg";
import Desc2 from "../../assets/desc2.jpg";
import Desc3 from "../../assets/desc3.jpg";


const Section2 = () => {
  return (
    <>
      <div className="container flex-col my-20">
        <div className="heading">
          <p className="flex font-mono justify-center items-center mt-2 text-5xl">
            Shop our Modern&nbsp;
            <img
              src={Image1}
              alt="Image 1"
              style={{ width: "75px", height: "75px" }}
            />{" "}
            &nbsp;luxury bags,
            <img
              src={Image2}
              alt="Image 2"
              style={{ width: "75px", height: "75px" }}
            />{" "}
            &nbsp; bestselling{" "}
          </p>
          <p className="flex font-mono justify-center items-center mt-10 mr-20 text-5xl mb-11">
            fine leather &nbsp;
            <img
              src={Image3}
              alt="Image 3"
              style={{ width: "75px", height: "75px" }}
            />{" "}
            &nbsp; curated collections.
          </p>
        </div>
        <div className="description flex justify-between items-center space-x-10 mx-auto max-w-7xl">
          <div className="image flex flex-col justify-center items-center text-center">
            <img src={Desc1} alt="" className="w-[450px] h-[500px]" />
            <h6 className="mt-4">Modern Statement</h6>
            <p className="mt-2">
              Timeless and wearable earrings with a modern twist that add a
              touch of style to any outfit.
            </p>
            <p className="mt-2 text-blue-600 cursor-pointer">SHOP BAGS</p>
          </div>
          <div className="image flex flex-col justify-center items-center text-center">
            <img src={Desc2} alt="" className="w-[450px] h-[500px]" />
            <h6 className="mt-4">The Essentials Collection</h6>
            <p className="mt-2">
              Our signature pieces designed to be worn everyday with subtle
              details in contemporary shapes.
            </p>
            <p className="mt-2 text-blue-600 cursor-pointer">SHOP CLASSICS</p>
          </div>
          <div className="image flex flex-col justify-center items-center text-center">
            <img src={Desc3} alt="" className="w-[450px] h-[500px]" />
            <h6 className="mt-4">Made-To-Order Jewelry</h6>
            <p className="mt-2">
              Handmade pieces that are carefully crafted to ensure that you'll
              love for a lifetime.
            </p>
            <p className="mt-2 text-blue-600 cursor-pointer">SHOP NOW</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
