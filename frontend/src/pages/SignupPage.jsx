import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { signup } from "../services/authService"; // Import signup API call

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(""); // For displaying messages
  const [error, setError] = useState(""); // For handling errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for password confirmation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.password,
      });
      setMessage("Signup successful! Please log in.");
      setError(""); // Clear error message on success
    } catch (err) {
      setError(
        err.response?.data?.detail || "Something went wrong. Please try again.", err
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />

      <div className="flex flex-col items-center justify-center flex-grow p-10">
        <div className="flex flex-col md:flex-row gap-10 p-10 bg-gray-800 rounded-lg shadow-lg w-full md:w-[900px]">
          {/* Left Section (Welcome Message) */}
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-5xl font-bold">
              BrightPath <span className="text-purple-500">AI</span>
            </h1>
            <h2 className="mt-4 text-3xl font-semibold">Roll the Carpet..!</h2>
            <p className="mt-2 text-gray-400">
              Just some details to get you in!
            </p>
          </div>

          {/* Right Section (Sign-Up Form) */}
          <div className="w-full max-w-md bg-gray-700 p-8 rounded-lg relative">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 bg-gradient-to-r from-blue-500 to-purple-600 h-20 w-20 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 bg-gradient-to-r from-purple-600 to-blue-500 h-20 w-20 rounded-full opacity-30 blur-xl"></div>

            <h3 className="text-3xl font-semibold mb-6">Sign up</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:bg-purple-600"
              >
                Signup
              </button>
            </form>

            {message && (
              <p className="mt-4 text-center text-green-400">{message}</p>
            )}
            {error && <p className="mt-4 text-center text-red-400">{error}</p>}

            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-gray-400">Or sign up with</span>
            </div>

            <div className="flex justify-center mt-4 gap-4">
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaGoogle size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaFacebook size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaGithub size={20} />
              </button>
            </div>

            <div className="mt-6 text-center text-gray-400 text-sm">
              Already registered?{" "}
              <a href="/login" className="text-purple-400 hover:underline">
                Login
              </a>
            </div>

            <div className="mt-4 text-center text-gray-400 text-xs">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Support
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Customer Care
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignupPage;
