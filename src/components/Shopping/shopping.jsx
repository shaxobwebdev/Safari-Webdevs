import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartData")) || [];
    setProducts(storeData);
  }, []);

  const removeCart = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);

    localStorage.setItem("cartData", JSON.stringify(updatedProducts));
  };

  const handleAdd = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div className="flex justify-center pt-[250px]">
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-10 mx-auto">
              <div className="w-[68%] flex justify-between items-center">
                <h2 className="capitalize text-[30px] font-bold">
                  shopping cart: {products.length} items
                </h2>
                <h3 className="capitalize text-[22px] text-[#666]">quality</h3>
                <h3 className="capitalize text-[22px] text-[#666]">
                  unite price
                </h3>
                <h3 className="capitalize text-[22px] text-[#666]">
                  sub total
                </h3>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="w-[70%] flex h-[260px] items-center justify-evenly  mb-10 border-2 rounded-md border=[#999] pl-10"
                >
                  <div className="flex items-center gap-[100px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[300px] h-[210px]"
                    />
                    <h3 className="capitalize text-[30px]">{item.category}</h3>
                    <p className="capitalize text-[22px]">
                      $ {item.price}
                    </p>{" "}
                    <br />
                  </div>
                  <button
                    onClick={() => removeCart(index)}
                    className="capitalize text-[24px] flex items-center gap-3 text-red-600"
                  >
                    <i className="fa-solid fa-xmark"></i>remove
                  </button>
                  <button
                    onClick={handleAdd}
                    className="capitalize text-[22px] w-[200px] h-10"
                  >
                    {" "}
                    to home page
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
