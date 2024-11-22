import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-wrap gap-5 justify-between w-full text-3xl text-white max-w-[1344px] max-md:max-w-full">
      <a href="/">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f09e9fa03b8beaf4c4380580f518434e31f55e1110f5cdeb0db09781d38cdec?placeholderIfAbsent=true&apiKey=8f9f1b856d314aa1a6c7a43973a79627"
          alt="BrightPath AI logo"
          className="object-contain shrink-0 max-w-full aspect-[1.51] w-[125px]"
        />
      </a>
      <nav className="flex gap-4 items-center mt-8 -ml-4">
        <button
          className="text-white text-lg"
          onClick={() => navigate("/login")} // Navigate to login page on click
        >
          Login
        </button>
        <button className="px-6 py-2 text-lg text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
        onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Header;
