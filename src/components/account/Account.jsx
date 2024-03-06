import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const Account = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    lastName: "",
    login: "",
    createAccount: "",
    confirmAccount: "",
  });

  const myFuncBtn = () => {
    navigate("/");
  };
  return (
    <div className="">
      <Navbar />
      <div className="container flex justify-around w-full h-[100vh] items-center">
        <div className="flex w-[50%] flex-col gap-5">
          <h1 className="text-[30px] capitalize font-bold">hello there</h1>
          <p className="text-[20px] font-normal capitalize mb-4">
            please sign in or account to continue
          </p>
          <h3 className="text-[30px] capitalize font-bold">sign in</h3>
          <div className="input">
            <p className="mb-3 capitalize">email</p>
            <input
              type="text"
              name="email"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="password">
            <p className="mb-3 capitalize">password</p>
            <input
              type="password"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="enter your password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <span className="flex gap-2 capitalize">
            <input type="checkbox" className="cursor-pointer w-[30px]" />
            remember my details
          </span>{" "}
          <br />
          <button className="w-[400px] h-[40px] bg-[#ED165F] border-none rounded-md capitalize text-[white] text-[22px] cursor-pointer">
            sign in
          </button>
          <p>forgot password</p>
        </div>
        <div className="flex flex-col gap-5 pt-[200px]">
          <h1 className="capitalize text-[30px] font-extrabold">
            create account
          </h1>
          <div>
            <p className="mb-2 capitalize">first name</p>
            <input
              type="text"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="first name"
              name="firstname"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <p className="mb-2 capitalize">last name</p>
            <input
              type="text"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="last name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="password">
            <p className="mb-2 capitalize">email</p>
            <input
              type="text"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="enter your email"
              name="login"
              value={formData.login}
              onChange={(e) =>
                setFormData({ ...formData, login: e.target.value })
              }
              required
            />
          </div>
          <div className="password">
            <p className="mb-2 capitalize">create password</p>
            <input
              type="password"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="create password"
              name="createAccount"
              value={formData.createAccount}
              onChange={(e) =>
                setFormData({ ...formData, createAccount: e.target.value })
              }
              required
            />
          </div>
          <div>
            <p className="mb-2 capitalize">confirm password</p>
            <input
              type="password"
              className="w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize"
              placeholder="confirm password"
              value={formData.confirmAccount}
              onChange={(e) =>
                setFormData({ ...formData, confirmAccount: e.target.value })
              }
              required
            />
          </div>
          <span className="flex gap-3">
            <input type="checkbox" className="w-[30px] cursor-pointer" />I want
            to receive Safari newsletters with the best deals and offers
          </span>{" "}
          <br />
          <button
            className="w-[400px] h-[40px] bg-[#ED165F] border-none rounded-md capitalize text-[white] text-[22px] cursor-pointer"
            onClick={myFuncBtn}
          >
            create account
          </button>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Account;
