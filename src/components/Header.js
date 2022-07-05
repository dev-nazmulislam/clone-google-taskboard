import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.Init";
import { useLocation, useNavigate } from "react-router-dom";
import "./Components.css";

const Header = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  if (user) {
    // navigate("/app");
  }

  return (
    <header className="flex items-center w-full px-4 fixed h-16 justify-between bg-white bg-opacity-95 shadow">
      <a href="/" rel="noreferrer">
        <div className="flex items-center w-full">
          <img
            src="https://i.ibb.co/pyTkZNy/logo.png"
            alt="logo"
            width="35"
            height="35"
          />
          <h1 className="text-2xl ml-3 open-sans text-gray-500">TasksBoard</h1>
        </div>
      </a>
      {user ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0">
              <div className="profile">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <a
            href="/premium"
            rel="noreferrer"
            className="open-sans text-lg text-gray-800"
          >
            Premium
          </a>
          <span className="hidden md:block ml-8" rel="noreferrer">
            <div onClick={() => signInWithGoogle()} className="sign-in">
              <FcGoogle />
              <span className="ml-2">Sign in with Google</span>
            </div>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
