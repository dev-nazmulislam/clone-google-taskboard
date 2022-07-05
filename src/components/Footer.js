import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:px-4">
      <div className="flex flex-row items-center justify-between text-gray-700">
        <div className="flex flex-row items-center">
          <a className="px-4" href="/" rel="noreferrer">
            <h1 className="text-base md:text-xl open-sans">TasksBoard</h1>
          </a>
          <a className="px-2 md:px-4" href="/privacy" rel="noreferrer">
            <h1 className="text-xs md:text-base">Privacy</h1>
          </a>
          <a className="px-2 md:px-4" href="/terms" rel="noreferrer">
            <h1 className="text-xs md:text-base">Terms</h1>
          </a>
          <a className="px-2 md:px-4" href="/pricing" rel="noreferrer">
            <h1 className="text-xs md:text-base">Pricing</h1>
          </a>
          <a className="px-2 md:px-4" href="/help" rel="noreferrer">
            <h1 className="text-xs md:text-base">Help</h1>
          </a>
        </div>
        <div className="px-4">
          <a href="mailto:nazmulislamnr@gmail.com">
            <h1 className="text-xs md:text-base">Contact</h1>
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-gray-500 mt-2">
        <div className="px-4 mb-8 text-xs">
          Copyright &copy; by Md.{" "}
          <a target="_blank" href="https://developer-nazmul.web.app/">
            Nazmul Islam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
