import React from "react";
import Navbar from "./Navbar";
import bottom from "../images/bottom.png";
import image from "../images/header-bg.png";
import About from "./About";
import Footer from "./Footer";
import safari from "../images/safari.jpg";

const Home = () => {
  return (
    <div className="">
      <div className="mb-[200px]">
        <header className="w-full h-[100vh] bg-[#ED165F]  pb-3">
          <Navbar />
          <div className="flex justify-center h-[75%]">
            <img src={image} alt="" className=" h-[750px] w-[40%] mt-10" />
          </div>
          <div className="flex justify-center w-full gap-4 mt-24">
            <div className="w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-white border-[white]"></div>
            <div className="w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]"></div>
            <div className="w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]"></div>
            <div className="w-4 h-4 border-2 rounded-[50%] cursor-pointer  bg-inherit border-[white]"></div>
          </div>
          <div className="flex flex-col items-center w-full mt-8">
            <h1 className="capitalize text-[20px] text-white font-normal">
              explore our collection
            </h1>
            <img src={bottom} alt="" />
          </div>
        </header>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
