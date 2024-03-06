import React from "react";
import logo from "../images/Logo-1.jpeg";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] flex justify-around h-[200px] items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="capitalize">
        <h3 className=" uppercase text-[18px] text-[#000000] mb-2">about</h3>
        <h3 className=" uppercase text-[18px] text-[#000000] mb-2">contact</h3>
        <h3 className=" uppercase text-[18px] text-[#000000] mb-2">
          terms & conditions
        </h3>
      </div>
      <div className="flex flex-col justify-center gap-3 capitalize">
        <span>
          <i className=" uppercase text-[22px] text-[#ED165F] cursor-pointer pr-2 fa-brands fa-facebook-f"></i>
          facebook
        </span>
        <span>
          <i className=" uppercase text-[22px] text-[#ED165F] cursor-pointer pr-2 fa-brands fa-twitter"></i>
          twitter
        </span>
        <span>
          <i className=" uppercase text-[22px] text-[#ED165F] cursor-pointer pr-2 fa-brands fa-instagram"></i>
          instagram
        </span>
      </div>
      <div>
        <h3 className="capitalize text-[#000] text-[22px] mb-3">
          subscribe to our newslatter
        </h3>
        <input
          type="text"
          placeholder="email adress"
          className="w-[210px] h-[40px] outline-none capitalize pl-2 border-2 px-4 py-4 border-[#ED165F] rounded-md"
        />
        <button className="h-[40px] bg-[#ED165F] w-[61px] rounded-md cursor-pointer hover:bg-inherit hover:border-2 hover:border-[#ed165f]">
          ok
        </button>
      </div>
      <div>
        <h3 className="text-[18px] mb-2 capitalize">
          497 everdren Rd rosevilla ca 95673
        </h3>
        <h4 className="text-[18px] mb-2 capitalize">+44 345 678 903</h4>
        <h4 className="text-[18px] mb-2 capitalize">abodexd@mail.com</h4>
      </div>
    </div>
  );
};

export default Footer;
