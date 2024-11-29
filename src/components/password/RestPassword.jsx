import React, { useState } from 'react';
import AnimatedBackground from '../background/AnimatedBackground';
import InputPassword from './InputPassword';
import StrengthMeterPassword from './StrengthMeterPassword';

const RestPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = () => {
    const newErrors = { ...errors };
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter.';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Password must contain at least one number.';
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newErrors.password = 'Password must contain at least one special character.';
    } else {
      newErrors.password = '';
    }

    if (confirmPassword && confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validatePassword()) {
      // Submit form logic here (e.g., call an API to update the password)
      console.log('Password successfully updated');
    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden bg-gray-900 items-center justify-center p-4">
      <AnimatedBackground />
      <div className="max-w-md w-full fixed z-20 bg-gray-800/30 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Reset Password</h2>
            <p className="text-gray-300 mt-2">Enter your new password</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300" htmlFor="password">Password</label>
              <InputPassword
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                error={errors.password}
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
              <StrengthMeterPassword password={password} />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
              <InputPassword
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                error={errors.confirmPassword}
                showPassword={showConfirmPassword}
                togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-tl from-gray-900 to-slate-800 text-white py-2 rounded-lg hover:opacity-80 transition-opacity duration-300"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestPassword;
