import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaVenusMars } from 'react-icons/fa';

function AuthForm() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div
      className={`relative w-[70%] mx-auto mt-24 h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-[1500ms] ${
        isSignUpMode ? 'sign-up-mode' : ''
      }`}
    >
      <div className="absolute w-full h-full top-0 left-0 transition-transform duration-[1500ms] ease-in-out">
        <div
          className={`signin-signup absolute transform w-full transition-all duration-[1500ms] ease-in-out ${
            isSignUpMode ? 'top-[15%] left-[58%]' : 'top-[23%] left-[10%]'
          }`}
        >
          {/* Form Đăng nhập */}
          <form
            className={`sign-in-form absolute flex items-center justify-center flex-col py-0 px-20 transition-all duration-[1500ms] ease-in-out ${
              isSignUpMode
                ? 'translate-x-full opacity-0 pointer-events-none'
                : 'translate-x-0 -translate-y-6 opacity-100 z-20 pointer-events-auto'
            }`}
          >
            <h2 className="text-2xl text-gray-700 mb-2">Sign In</h2>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaEnvelope />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent outline-none border-none leading-tight font-semibold text-[1.1rem] text-gray-800 placeholder-gray-400 placeholder:font-medium"
              />
            </div>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none border-none leading-tight font-semibold text-[1.1rem] text-gray-800 placeholder-gray-400 placeholder:font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-[150px] bg-gray-800 border-none outline-none h-[49px] rounded-full text-white font-semibold my-2 cursor-pointer transition duration-500 hover:bg-gray-700"
            >
              Login
            </button>
          </form>

          {/* Form Đăng ký */}
          <form
            className={`sign-up-form absolute flex items-center justify-center flex-col py-0 px-20 transition-all duration-[1500ms] ease-in-out ${
              isSignUpMode
                ? 'translate-x-0 -translate-y-6 opacity-100 z-20 pointer-events-auto'
                : '-translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            <h2 className="text-2xl text-gray-700 mb-2">Sign Up</h2>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none border-none leading-tight font-semibold text-[1.1rem] text-gray-800 placeholder-gray-400 placeholder:font-medium"
              />
            </div>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Fullname"
                className="bg-transparent outline-none border-none leading-tight font-semibold text-[1.1rem] text-gray-800 placeholder-gray-400 placeholder:font-medium"
              />
            </div>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaVenusMars />
              </div>
              <select
                required
                className="bg-transparent outline-none border-none font-semibold text-[1.1rem] text-gray-800"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="max-w-[380px] w-full bg-gray-200 my-2 h-[55px] rounded-full grid grid-cols-[15%_85%] px-1 relative">
              <div className="text-center leading-[55px] text-gray-400 transition duration-500 text-lg">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none border-none leading-tight font-semibold text-[1.1rem] text-gray-800 placeholder-gray-400 placeholder:font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-[150px] bg-gray-800 border-none outline-none h-[49px] rounded-full text-white font-semibold my-2 cursor-pointer transition duration-500 hover:bg-gray-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="absolute h-full w-full top-0 left-0 grid grid-cols-2">
        {/* Panel bên trái */}
        <div
          className={`left-panel flex flex-col items-center justify-center text-center h-full z-20 bg-gray-800 transition-all duration-[1500ms] ease-in-out transform ${
            isSignUpMode ? 'scale-x-100' : 'scale-x-50'
          } ${
            isSignUpMode ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h2 className="text-white text-[30px] my-1">Dev5G</h2>
          <img src="/img/robot-assistant.png" alt="" className="w-[80px] h-[80px] my-2" />
          <button
            className="bg-transparent border-2 border-white w-[130px] h-[41px] font-semibold text-[0.8rem] cursor-pointer hover:bg-gray-700 hover:text-white"
            onClick={() => setIsSignUpMode(false)}
          >
            Sign in
          </button>
        </div>
        {/* Panel bên phải */}
        <div
          className={`right-panel flex flex-col items-center justify-center text-center h-full z-20 bg-gray-800 transition-all duration-[1500ms] ease-in-out transform ${
            isSignUpMode ? 'scale-x-50' : 'scale-x-100'
          } ${
            isSignUpMode ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
        >
          <h2 className="text-white text-[30px] my-1">Dev5G</h2>
          <img src="/img/robot-assistant.png" alt="" className="w-[80px] h-[80px] my-2" />
          <button
            className="bg-transparent border-2 border-white w-[130px] h-[41px] font-semibold text-[0.8rem] cursor-pointer hover:bg-gray-700 hover:text-white"
            onClick={() => setIsSignUpMode(true)}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
