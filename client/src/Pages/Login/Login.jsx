import React, { useState } from "react";
import svgs from "./svgs.svg";
import svg1 from "./svg1.svg";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getLoginToken } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [FormData, setFormData] = useState({});
  const [btn, setBtn] = useState(false);
  const [types, setTypes] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setFormData({
      ...FormData,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (FormData) {
      dispatch(getLoginToken(FormData));
      setTimeout(()=>{
        navigate("/dashboard");
      },2000)
    } else {
      alert("Invalid Credentials");
    }
  };

  const rightLogoOnClick = () => {
    setTypes(types === "password" ? "text" : "password");
  };

  const handleCreateAcc = () => {
    btn ? setBtn(false) : setBtn(true);
  };
  return (
    <div>
      {btn ? (
        <div className="flex bg-[#d1e0ec]  flex-col items-center justify-center  min-h-screen  m-auto  w-full">
          <div className="text-left font-bold text-red-600">Quiz App</div>
          <form
            className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "
            onSubmit={handleSubmit}
          >
            <div className="bg-[#13193c] rounded-2xl shadow shadow-gray-500/40 grid lg:grid-cols-2 md:grid-cols-1 md:w-2/3  sm:w-11/12 max-w-4xl ">
              <div className="py-0">
                <h2 className="text-3xl font-bold text-red-600 mb-2 mt-5">
                  Admin Login
                </h2>
                <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

                <div className="md:w-3/9 p-2">
                  <p className="my-3 text-red-500 font-semibold"> OR </p>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-md">
                      <FaRegEnvelope className="text-gray-400 mr-2" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-base min-w-fit pr-12 text-gray-700 font-semibold
                  flex-1"
                      />
                    </div>
                    <div className="bg-gray-100 w-72 p-2 flex items-center rounded-md mb-3 ">
                      <MdLockOutline className="text-gray-400 mr-2" />
                      <input
                        type={types}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-base pr-12 text-gray-700
                  flex-1"
                      />
                      {types === "password" ? (
                        <AiFillEye onClick={rightLogoOnClick} />
                      ) : (
                        <AiFillEyeInvisible onClick={rightLogoOnClick} />
                      )}
                    </div>
                    <div className="flex justify-between w-64 mb-5 ">
                      <label className="flex items-center text-sm text-white">
                        <input
                          type="checkbox"
                          name="remember"
                          className="mr-1 text-base"
                        />
                        Remember me
                      </label>
                      <a href="#" className="text-sm">
                        Forgot Password
                      </a>
                    </div>
                    <button
                      className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold tracking-wider
                 hover:bg-white hover:text-green-500"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <p className="mt-4 text-sm mb-2 font-semibold">
                    You'r a User ?
                    <a
                      href="#"
                      className="font-bold cursor-pointer text-blue-600 "
                    >
                      {" "}
                      User Login
                    </a>
                  </p>
                </div>
              </div>

              <div className=" md:w-full m-auto  text-white p-2 flex justify-center items-center">
                <img src={svgs} alt="a" className=" w-full rotate-270 " />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen  m-auto bg-[#dedede] w-full">
          <form
            className="flex items-center justify-center w-full flex-1 px-20 text-center "
            onSubmit={handleSubmit}
          >
            <div className=" bg-[#9fcbc8] rounded-2xl shadow shadow-gray-500/40  grid align-center justify-center lg:grid-cols-2 md:grid-cols-1  md:w-2/3  sm:w-11/12 max-w-4xl ">
              <div className="py-0">
                <h2 className="text-3xl font-bold text-red-600 mb-2 mt-5">
                  User Login
                </h2>
                <div className="border-2 w-10 h-0 border-blue-500 inline-block mb-2"></div>

                <div className="sm:w-auto md:w-3/9 p-2">
                  <p className="my-3 font-semibold text-red-600"> OR </p>
                  <div className="flex flex-col items-center md:w-auto">
                    <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-md">
                      <FaRegEnvelope className="text-gray-400 mr-2" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-base min-w-fit pr-12  text-gray-700 font-semibold
                 flex-1"
                      />
                    </div>
                    <div className="bg-gray-100 w-72 p-2 flex items-center rounded-md mb-3 ">
                      <MdLockOutline className="text-gray-400 mr-2" />
                      <input
                        type={types}
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-base pr-12 text-gray-700
                 flex-1 "
                      />
                      {types === "password" ? (
                        <AiFillEye
                          onClick={rightLogoOnClick}
                          className="cursor-pointer"
                        />
                      ) : (
                        <AiFillEyeInvisible
                          onClick={rightLogoOnClick}
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="flex justify-between w-64 mb-5 ">
                      <label className="flex items-center text-sm text-white">
                        <input
                          type="checkbox"
                          name="remember"
                          className="mr-1 text-base"
                        />
                        Remember me
                      </label>
                      <a href="#" className="text-sm">
                        Forgot Password
                      </a>
                    </div>
                    <button
                      className="border-2 text-white border-white rounded-full px-12 py-2 inline-block font-bold tracking-wider
                hover:bg-white hover:text-green-500"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <p className="mt-4 text-sm mb-2 font-semibold text-white">
                    you'r a Admin ?
                    <a
                      href="#"
                      className="font-bold cursor-pointer text-blue-600 "
                      onClick={handleCreateAcc}
                    >
                      {" "}
                      Admin Login
                    </a>
                  </p>
                </div>
              </div>

              <div className="w-1/9  text-white p-2 flex justify-center items-center">
                <img src={svg1} alt="" className="w-full rotate-270 " />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
