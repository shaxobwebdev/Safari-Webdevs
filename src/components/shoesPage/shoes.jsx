import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { useSearchContext } from "../Home/useSearch";

const Shoes = () => {
  const { inputVal } = useSearchContext();
  const [disNext, setDisNext] = useState(false);
  const [disPrev, setDisPrev] = useState(false);
  const [limit, setLimit] = useState(10);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        setUsers(res?.data);
      });
    if (limit === 10) {
      setDisPrev(true);
      setDisNext(false);
    } else {
      setDisPrev(false);
      setDisNext(true);
    }
  }, [limit]);
  const filteredUsers = users.filter((user) =>
    user.category.toLowerCase().includes(inputVal.toLowerCase())
  );
  const img = users?.slice(users.length - 10, users.length);
  const next = () => {
    setLimit((page) => page * 2);
    if (limit === 20) {
      setDisNext(true);
    } else {
      setDisNext(false);
      setDisPrev(false);
    }
  };
  const prev = () => {
    setLimit((page) => page / 2);
    if (img.length < 4) {
      setDisPrev(true);
    } else {
      setDisNext(false);
      setDisPrev(false);
    }
  };

  return (
    <div className="relative h-[100%]">
      <div>
        <div className="relative w-full">
          <Navbar />
          <div className="flex justify-center items-center w-full mb-[500px]">
            <div className="flex justify-between w-[95%] items-center">
              <div className=" flex flex-col pt-[200px] w-[25%]">
                <h1 className="capitalize mb-2 text-[25px] font-normal">
                  clothes
                </h1>
                <div className=" absolute ml-[420px]  w-[69%] mt-[45px]  h-[1px] bg-slate-950 "></div>
                <hr className="w-[400px] h-5" />
                <div className="">
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    all
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    dress
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    denim
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    jeans
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    jumpsuits
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    tops
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    jacets and coats
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    pants
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    shorts
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    skirts
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    loungeria & undervar
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    leather
                  </h1>
                  <h1 className=" uppercase text-[#777] text-[22px] mb-2">
                    sweaters & knits
                  </h1>
                </div>
                <div className="mt-3">
                  <h1 className="mb-3 capitalize text-[30px]">size</h1>
                  <div className="h-[2px] mb-3 bg-[#999] w-[80%]"></div>
                  <div className="w-[350px] grid grid-cols-4 gap-6">
                    <button className="w-[70px] border-2 rounded pt-4 py-4 border-[#555] uppercase hover:bg-red-600 ">
                      xxs
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase  hover:bg-red-600 ">
                      xs
                    </button>
                    <button className="w-[70px] border-2 p-4 pt-4 rounded border-[#555] uppercase  hover:bg-red-600">
                      s
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase  hover:bg-red-600 ">
                      m
                    </button>
                    <button className="w-[70px] pt-4 p-4  border-2 rounded border-[#555] uppercase  hover:bg-red-600 ">
                      l
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase  bg-[#ED165F]">
                      xl
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase  hover:bg-red-600 ">
                      23
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase   hover:bg-red-600">
                      24
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase   hover:bg-red-600">
                      25
                    </button>
                    <button className="w-[70px] py-4 p-4 border-2 rounded border-[#555] uppercase  hover:bg-red-600">
                      26
                    </button>
                    <button className="w-[70px] py-4 p-4 border-2 rounded border-[#555] uppercase  hover:bg-red-600">
                      27
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase hover:bg-red-600">
                      28
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase hover:bg-red-600">
                      28
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase hover:bg-red-600">
                      29
                    </button>
                    <button className="w-[70px] pt-4 p-4 border-2 rounded border-[#555] uppercase hover:bg-red-600">
                      30
                    </button>
                    <button className="w-[70px] p-4 pt-4 border-2 rounded border-[#555] uppercase  bg-[#ED165F]">
                      31
                    </button>
                  </div>
                </div>
                <div className="mt-[100px]">
                  <h1 className="capitalize mb-2  text-[30px] font-normal">
                    colors
                  </h1>
                  <div className="h-[2px] mb-5 bg-[#999] w-[80%]"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8  bg-[#F3ECDB]"></div>beidge
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8  bg-[#465BA3] rounded"></div>blue
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#000]"></div>
                      black
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#F07B4E]"></div>
                      orange
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#41854D]"></div>
                      green
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#665147]"></div>
                      brown
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#893D88]"></div>
                      purple
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#F3B121]"></div>
                      gold
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#CAC1B8]"></div>
                      taup
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 bg-white rounded cursor-pointer"></div>
                      white
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#F2A1B1]"></div>
                      pink
                    </span>
                    <span className="flex items-center gap-2 capitalize text-[20px]">
                      <div className="w-10 h-8 rounded cursor-pointer  bg-[#D23C47]"></div>
                      red
                    </span>
                  </div>
                </div>
                <div className="mt-10">
                  <h1 className="mb-3 capitalize text-[30px]">price</h1>
                  <div className="h-[2px] mb-3 bg-[#999] w-[80%]"></div>
                  <div className="flex flex-col">
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $0 - 10 000
                    </div>
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $10, 000 - 20 000
                    </div>
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $20, 000 - 50 000
                    </div>
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $50, 000 - 100 000
                    </div>
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $100 - 200, 000
                    </div>
                    <div className="flex gap-3 capitalize text-[22px] mb-4">
                      <input type="checkbox" className="w-[40px]" />
                      $0 - 10 000
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className="w-16 rounded border-2 border-[#000]"
                    />{" "}
                    to
                    <input
                      type="text"
                      className="w-16 rounded border-2 border-[#000]"
                    />
                    <button className="w-[80px]  bg-[#ED165F] capitalize text-teal-100 text-[15px]">
                      apply
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[70%]">
                <div>
                  <select className="outline-none w-[200px] h-10 px-4 border-2 rounded-lg border-[#000] text-center absolute right-10 top-[200px]">
                    <option
                      className="uppercase "
                      value="sort by: most popular"
                    >
                      SHOPPING
                    </option>
                    <option
                      className="uppercase "
                      value="sort by: most popular"
                    >
                      Karzinka
                    </option>
                    <option className="uppercase " value="best silling">
                      Best
                    </option>
                    <option className="uppercase " value="price: high to low">
                      Hero
                    </option>
                    <option className="uppercase " value="price: high to high">
                      Prite
                    </option>
                  </select>
                </div>
                <div className="text-center mx-auto h-[100%] flex flex-col absolute top-[350px]">
                  <div className="grid items-center justify-center w-full grid-cols-3 gap-8">
                    {filteredUsers?.map((item) => {
                      return (
                        <div className="flex flex-col items-center relative  w-[420px] h-[440px] pt-5 rounded-lg mx-auto cursor-pointer hover:shadow-slate-500 hover:shadow-2xl">
                          <div className="flex flex-col absolute z-[-1] top-[35%]">
                            <i className=" cursor-pointer fa-regular fa-heart mb-3 text-[35px] text-[#ED165F]"></i>
                            <span className="capitalize font-bold inline-block w-[150px] h-10 bg-[#ffffff] pt-2 rounded text-[20px]">
                              add to cart{" "}
                              <i className="cursor-pointer fa-solid fa-cart-shopping text-[22px] text-[#ED165F]"></i>
                            </span>
                          </div>
                          <img
                            className="w-64 h-64 mb-6 hover:opacity-30 hover:transition-opacity"
                            src={item.image}
                            alt=""
                          />
                          <h2 className="capitalize text-[#000000] text-[24px] font-normal">
                            {item.category}
                          </h2>
                          <p className="text-[#000000] text-[20px]">
                            ${item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center gap-5 mt-12">
                    <button
                      className="w-12 h-8 mx-2 my-4 border-2 border-red-200 cursor-pointer"
                      disabled={disPrev}
                      onClick={prev}
                    >
                      1
                    </button>
                    <button
                      className="w-12 h-8 mx-2 my-2 border-2 border-red-200 cursor-pointer"
                      disabled={disNext}
                      onClick={next}
                    >
                      2
                    </button>
                    <button
                      className="w-12 h-8 mx-2 my-2 border-2 border-red-200 cursor-pointer"
                      disabled={disNext}
                      onClick={next}
                    >
                      3
                    </button>
                    <button
                      className="w-12 h-8 mx-2 my-2 border-2 border-red-200 cursor-pointer"
                      disabled={disNext}
                      onClick={next}
                    >
                      4
                    </button>
                    <i class="fa-solid fa-chevron-right text-[20px] cursor-pointer text-red-200"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <Footer />
      </div>
    </div>
  );
};

export default Shoes;
