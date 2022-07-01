import React from "react";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (
    <header class="flex items-center w-full px-4 fixed h-16 justify-between bg-white bg-opacity-95 shadow">
      <a href="/" rel="noreferrer">
        <div class="flex items-center w-full">
          <img
            src="https://i.ibb.co/pyTkZNy/logo.png"
            alt="logo"
            width="35"
            height="35"
          />
          <h1 class="text-2xl ml-3 open-sans text-gray-500">TasksBoard</h1>
        </div>
      </a>
      <div class="flex flex-row items-center">
        <a
          href="/premium"
          rel="noreferrer"
          class="open-sans text-lg text-gray-800"
        >
          Premium
        </a>
        <a class="hidden md:block ml-8" href="/app" rel="noreferrer">
          <div class="sign-in">
            <FcGoogle />
            <span className="ml-2">Sign in with Google</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
