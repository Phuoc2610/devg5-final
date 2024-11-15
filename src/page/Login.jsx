import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaVenusMars } from 'react-icons/fa';
import ImageLogo from "../assets/robot-assistant.png";
import ImageLogoGoogle from "../assets/LogoGoogle.png";

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div
      className={`relative w-[70%] mx-auto mt-24 h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-[1500ms] ${isSignUpMode ? 'sign-up-mode' : ''
        }`}
    >
      <div className="absolute w-full h-full top-0 left-0 transition-transform duration-[1500ms] ease-in-out z-30">
        <div
          className={`signin-signup absolute transform w-full transition-all duration-[1500ms] ease-in-out ${isSignUpMode ? 'top-[15%] left-[50%]' : 'top-[23%] left-[5%]'
            }`}
        >
          {/* Vùng chứa các nút chuyển đổi */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-10 z-50">
  {/* Button Sign up */}
  <button
    className={`absolute top-[180px] right-[24%] bg-white text-black border-2 border-gray-300 w-[130px] left-[710px] h-[41px] font-bold text-[0.9rem] cursor-pointer rounded-full hover:bg-gray-900 hover:text-white hover:bg-opacity-100 transition-all duration-200 ${isSignUpMode ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    onClick={() => setIsSignUpMode(true)}
  >
    Sign up
  </button>

  {/* Button Sign in */}
  <button
    className={`absolute top-[215px] left-[-30%] bg-white text-black border-2 border-gray-300 w-[130px] h-[41px] font-bold text-[0.9rem] cursor-pointer rounded-full hover:bg-gray-900 hover:text-white hover:bg-opacity-100 transition-all duration-200 ${isSignUpMode ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    onClick={() => setIsSignUpMode(false)}
  >
    Sign in
  </button>
</div>



          {/* Form Đăng nhập */}
{/* Form Đăng nhập */}
<form
  className={`sign-in-form absolute flex items-center justify-center flex-col py-0 px-20 left-[0px] w-[450px]  transition-all duration-[1500ms] ease-in-out ${isSignUpMode
    ? 'translate-x-full opacity-0 z-10 pointer-events-none'
    : 'translate-x-0 -translate-y-6 opacity-100 z-40 pointer-events-auto'
    }`}
>
  <h2 className="text-2xl text-gray-700 mb-4">Sign In</h2>

  {/* Email Input */}
  <div className="relative w-full max-w-[500px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaEnvelope className="text-gray-500" />
    </div>
    <input
      type="email"
      id="signin_email"
      className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="signin_email"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-4 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
    >
      Email
    </label>
  </div>

  {/* Password Input */}
  <div className="relative w-full max-w-[500px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaLock className="text-gray-500" />
    </div>
    <input
      type="password"
      id="signin_password"
      className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="signin_password"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-4 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
    >
      Password
    </label>
  </div>

  <button
    type="submit"
    className="w-[150px] bg-gray-800 border-none outline-none h-[49px] rounded-full text-white font-semibold my-2 cursor-pointer transition duration-500 hover:bg-gray-700"
  >
    Login
  </button>
  {/* Line with "or" */}
<div className="relative flex items-center w-full my-4 -top-2">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-4 text-gray-500 text-sm font-medium">or</span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>
  {/* Login with Google */}
<div className="mt-[-10px] left-[15px] flex justify-center items-center">
<button
  type="button"
  className="flex items-center justify-center w-[240px] h-[49px] bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
>
  <img
    src={ImageLogoGoogle}
    alt="Google Logo"
    className="w-5 h-5 mr-3"
  />
  <span className="text-sm font-medium">Login with Google</span>
</button>
</div>
</form>


         {/* Form Đăng ký */}
<form
  className={`sign-up-form absolute flex items-center justify-center flex-col py-0 px-20 left-[50px] w-[450px] transition-all duration-[1500ms] ease-in-out ${isSignUpMode
      ? 'translate-x-0 -translate-y-6 opacity-100 z-40 pointer-events-auto'
      : '-translate-x-full opacity-0 z-10 pointer-events-none'
    }`}
>
  <h2 className="text-2xl text-gray-700 mb-2">Sign Up</h2>

  {/* Email Input */}
  <div className="relative w-full max-w-[480px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaEnvelope className="text-gray-500" />
    </div>
    <input
      type="email"
      id="signup_email"
      className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="signup_email"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-4 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
    >
      Email
    </label>
  </div>

  {/* Fullname Input */}
  <div className="relative w-full max-w-[480px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaUser className="text-gray-500" />
    </div>
    <input
      type="text"
      id="signup_fullname"
      className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="signup_fullname"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-4 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
    >
      Fullname
    </label>
  </div>

  {/* Gender Select */}
  <div className="relative w-full max-w-[480px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaVenusMars className="text-gray-500" />
    </div>
    <select
    id="signup_gender"
    className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
  >
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <label
    htmlFor="signup_gender"
    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-5 bg-white dark:bg-gray-800 px-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
  >
    Gender
  </label>
  </div>

  {/* Password Input */}
  <div className="relative w-full max-w-[480px] mb-4">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <FaLock className="text-gray-500" />
    </div>
    <input
      type="password"
      id="signup_password"
      className="block pl-10 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="signup_password"
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform origin-[0] left-10 top-4 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600"
    >
      Password
    </label>
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
          className={`left-panel flex flex-col items-center justify-center text-center h-full bg-gray-800 transition-all duration-[1500ms] ease-in-out transform ${isSignUpMode ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
        <h2 className="text-white text-[30px] relative top-[-40px] left-[10px] mb-2">Dev5G</h2>
        <img src={ImageLogo} alt="" className="w-[80px] h-[80px] left-[10px] relative top-[-40px] mb-2" />
          
        </div>
        {/* Panel bên phải */}
        <div
          className={`right-panel flex flex-col items-center justify-center text-center h-full bg-gray-800 transition-all duration-[1500ms] ease-in-out transform ${isSignUpMode ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
        >
          <h2 className="text-white text-[30px] relative top-[-40px] left-[15px] mb-2">Dev5G</h2>
          <img src={ImageLogo} alt="" className="w-[80px] h-[80px] left-[15px] relative top-[-40px] mb-2" />
        </div>
      </div>
    </div>
  );
}

export default Login;
