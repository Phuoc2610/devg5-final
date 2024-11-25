import React, { useState } from "react";
import { FaSpinner, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!isLogin && !formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const toggleForm = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsFlipping(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      setErrors({});
    }, 600); // Increased animation duration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-indigo-600 p-4 transition-all duration-500 ease-in-out">
      <div
        className={`relative w-full max-w-md perspective-1000 ${isFlipping ? "animate-flip-card" : ""}`}
      >
        <div 
          className={`bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-3xl ${
            isFlipping ? "animate-flip rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden"
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in transition-all duration-500 ease-in-out transform hover:scale-105">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative transform transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
                <div className="relative overflow-hidden rounded-xl">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${errors.name ? "border-red-500 animate-shake" : "border-gray-300"} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ease-in-out outline-none transform hover:translate-x-1`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in transition-all duration-300 ease-in-out" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
            )}

            <div className="relative transform transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
              <div className="relative overflow-hidden rounded-xl">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 ${errors.email ? "border-red-500 animate-shake" : "border-gray-300"} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ease-in-out outline-none transform hover:translate-x-1`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in transition-all duration-300 ease-in-out" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative transform transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
              <div className="relative overflow-hidden rounded-xl">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border-2 ${errors.password ? "border-red-500 animate-shake" : "border-gray-300"} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ease-in-out outline-none transform hover:translate-x-1`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in transition-all duration-300 ease-in-out" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="relative transform transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
                <div className="relative overflow-hidden rounded-xl">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 rounded-xl border-2 ${errors.confirmPassword ? "border-red-500 animate-shake" : "border-gray-300"} focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ease-in-out outline-none transform hover:translate-x-1`}
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in transition-all duration-300 ease-in-out" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-teal-400 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <FaSpinner className="animate-spin mr-2" />
                  Processing...
                </span>
              ) : (
                isLogin ? "Sign In" : "Sign Up"
              )}
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={toggleForm}
                className="text-indigo-600 hover:text-indigo-800 transition-all duration-300 ease-in-out font-semibold transform hover:scale-105"
              >
                {isLogin ? "Create an account" : "Already have an account? Login"}
              </button>
            </div>

            {isLogin && (
              <div className="text-center mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300 ease-in-out font-semibold transform hover:scale-105 inline-block">
                  Forgot Password?
                </a>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate-y-180 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(180deg);
          }
        }

        .animate-flip {
          animation: rotate-y-180 0.6s ease-in-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Login;