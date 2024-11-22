import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content - Login Form */}
      <div className="flex flex-col items-center justify-center flex-grow p-10">
        <div className="flex flex-col md:flex-row gap-10 p-10 bg-gray-800 rounded-lg shadow-lg w-full md:w-[900px]">
          {/* Welcome Section */}
          <div className="text-center md:text-left md:flex-1">
          <h1 className="text-5xl font-bold">
              BrightPath <span className="text-purple-500">AI</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold">Welcome Back!</h2>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md bg-gray-700 p-8 rounded-lg relative">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 bg-gradient-to-r from-blue-500 to-purple-600 h-20 w-20 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 bg-gradient-to-r from-purple-600 to-blue-500 h-20 w-20 rounded-full opacity-30 blur-xl"></div>
            <h3 className="text-2xl font-semibold">Login</h3>
            <p className="text-gray-400 mt-2 mb-6">Glad you're back!</p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:bg-purple-600"
              >
                Login
              </button>
            </form>

            <a
              href="#"
              className="block mt-4 text-sm text-center text-purple-400 hover:underline"
            >
              Forgot password?
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
              <span>Or</span>
            </div>

            <div className="flex justify-center mt-4 gap-4">
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaGoogle size={24} className="text-white" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaFacebookF size={24} className="text-white" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-600">
                <FaGithub size={24} className="text-white" />
              </button>
            </div>

            <div className="mt-6 text-center text-black-950">
              Don’t have an account?{" "}
              <a href="/signup" className="text-purple-400 hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LoginPage;
