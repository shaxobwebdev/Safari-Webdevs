import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Shopping from "../Shopping/shopping";
import { useSearchContext } from "./useSearch";

const About = () => {
  const { inputVal } = useSearchContext();
  const [disNext, setDisNext] = useState(false);
  const [disPrev, setDisPrev] = useState(false);
  const [limit, setLimit] = useState(10);
  const [myData, setMyData] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  let result = localStorage.getItem("token");
  console.log(result);

  const handleClick = (item) => {
    const result = localStorage.getItem("token");
    if (result) {
      const storedData = JSON.parse(localStorage.getItem("cartData")) || [];
      localStorage.setItem("cartData", JSON.stringify([...storedData, item]));
      navigate("/shopping");
    } else {
      navigate("/account");
    }
  };

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
    <div className="pt-6 mx-auto text-center">
      <div className="flex justify-center mt-4 mb-10">
        <div>
          <div className="flex justify-between gap-12">
            <div className=" w-[40%] h-[1px]  mt-4 bg-neutral-950"></div>
            <div>
              <h1 className="items-center text-xl text-amber-950 ">
                SHOPING MEN'S
              </h1>
            </div>
            <div className=" w-[40%] mt-4  h-[1px] bg-neutral-950 "></div>
          </div>
          <h1 className="pt-4 text-3xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            gravida cursus adipiscing <br /> viverra at tortor, egestas odio
            parturient. Morbi ut lorem in erat. Et et molestie diam diam
            ultricies. <br /> Scelerisque duis diam ac cras dictum adipiscing.
            Venenatis at sit proin ut vitae adipiscing id facilisis.
          </h1>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-3 gap-12">
        {filteredUsers?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className="flex flex-col items-center relative  w-[420px] h-[520px] pt-32 rounded-lg mx-auto cursor-pointer hover:shadow-slate-500 hover:shadow-2xl"
            >
              <div
                key={index}
                className="flex flex-col absolute z-[-1] top-[35%]"
              >
                <i className=" cursor-pointer fa-regular fa-heart mb-3 text-[35px] text-[#ED165F]"></i>
                <span className="capitalize font-bold inline-block w-[250px] h-10 bg-[#ffffff] mt-12 rounded text-[22px]">
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
              <p className="text-[#000000] text-[20px]">${item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          className="w-12 h-8 mx-2 my-2 border-2 border-red-200 cursor-pointer"
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
          4
        </button>
        <button
          className="w-12 h-8 mx-2 my-2 border-2 border-red-200 cursor-pointer"
          disabled={disNext}
          onClick={next}
        >
          4
        </button>
        <i className="fa-solid fa-chevron-right text-[24px] cursor-pointer text-red-200"></i>
      </div>
    </div>
  );
};

export default About;
