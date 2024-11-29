import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import ForgotPassword from "../../components/password/ForgotPassword";

const AuthForm = () => {
  const [formType, setFormType] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  // Separate state for each form type
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotData, setForgotData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const validatePassword = (password) => password.length >= 8;
  const validateFullName = (fullName) => {
    return /^[a-zA-Z\s]+$/.test(fullName) && fullName.length >= 3;  // Only letters and spaces, at least 3 characters
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update state based on formType
    switch (formType) {
      case "login":
        setLoginData({ ...loginData, [name]: value });
        break;
      case "register":
        setRegisterData({ ...registerData, [name]: value });
        break;
      case "forgot":
        setForgotData({ ...forgotData, [name]: value });
        break;
      default:
        break;
    }

    const newErrors = { ...errors };

    // Validate input based on form type
    if (name === "fullName") {
      if (!validateFullName(value)) {
        newErrors.fullName = "Full Name must be at least 3 characters long";
      } else {
        delete newErrors.fullName; // Only delete error if valid
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        delete newErrors.email; // Only delete error if valid
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        newErrors.password = "Password must be at least 8 characters long";
      } else {
        delete newErrors.password; // Only delete error if valid
      }
    }

    if (name === "confirmPassword") {
      if (value !== registerData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      } else {
        delete newErrors.confirmPassword; // Only delete error if valid
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formType === "login" ? loginData : formType === "register" ? registerData : forgotData);
  };

  const getFormTitle = () => {
    switch (formType) {
      case "login":
        return "Welcome Back";
      case "register":
        return "Create Account";
      case "forgot":
        return "Reset Password";
      default:
        return "";
    }
  };

  const getFormSubtitle = () => {
    switch (formType) {
      case "login":
        return "Please sign in to continue";
      case "register":
        return "Please fill in the information below";
      case "forgot":
        return "Enter your email to reset your password";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{getFormTitle()}</h2>
            <p className="text-gray-600 mt-2">{getFormSubtitle()}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={formType}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
            >
              {formType === "login" && (
                <Login
                  formData={loginData}
                  errors={errors}
                  handleInputChange={handleInputChange}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  setFormType={setFormType}
                />
              )}

              {formType === "register" && (
                <Register
                  formData={registerData}
                  errors={errors}
                  handleInputChange={handleInputChange}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              )}

              {formType === "forgot" && (
                <ForgotPassword
                  formData={forgotData}
                  errors={errors}
                  handleInputChange={handleInputChange}
                />
              )}

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                {formType === "login" ? "Sign In" : formType === "register" ? "Sign Up" : "Reset Password"}
              </button>
            </motion.form>
          </AnimatePresence>

          <div className="mt-6 text-center">
            {formType === "forgot" ? (
              <button
                onClick={() => setFormType("login")}
                className="text-purple-600 hover:text-purple-500 transition-colors duration-300"
              >
                Back to Sign In
              </button>
            ) : (
              <button
                onClick={() => setFormType(formType === "login" ? "register" : "login")}
                className="text-purple-600 hover:text-purple-500 transition-colors duration-300"
              >
                {formType === "login" ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
