import React from "react";
import "./Components.css";
import { FcGoogle } from "react-icons/fc";

const Banner = () => {
  return (
    <div className="flex items-center w-full flex-col w-screen">
      <section className="flex flex-col items-center w-full mt-32">
        <img
          src="https://i.ibb.co/pyTkZNy/logo.png"
          alt="TasksBoard logo"
          width="128"
          height="128"
        />
        <h1 className="text-5xl font-bold mt-10 open-sans text-center">
          TasksBoard
        </h1>
        <h2 className="text-3xl mt-4 text-center">
          A desktop app for Google Tasks
        </h2>
        <a href="/app" className="mt-14">
          <div className="sign-in">
            <FcGoogle />
            <span className="ml-2">Sign in with Google</span>
          </div>
        </a>
      </section>
      <section className="max-w-6xl mt-16">
        <div className="flex flex-col-reverse sm:flex-row-reverse mt-10 sm:mt-4 items-center w-full px-4 md:px-8 lg:px-28 mb-24">
          <img
            className="w-full md:w-1/2 p-4 object-scale-down"
            alt="Manage your Google Tasks"
            src="https://i.ibb.co/9gVN84d/google-tasks-full-screen.jpg"
          />
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-4 leading-10">
              Get more things done on a full screen
            </h1>
            <h2 className="mb-6 text-xl text-gray-600 leading-8">
              Organize your lists in full screen board to stay on top of your
              work.
            </h2>
            <a
              className="text-blue-600 open-sans hover:text-blue-700"
              href="/app"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mt-10 sm:mt-4 items-center w-full px-4 md:px-8 lg:px-28 mb-24">
          <img
            className="w-full md:w-1/2 p-8 object-scale-down"
            alt="Share your Google Tasks list with anyone"
            src="https://i.ibb.co/vvz1y3T/share-google-tasks.jpg"
          />
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-4 leading-10">
              Share your tasks
            </h1>
            <h2 className="mb-6 text-xl text-gray-600 leading-8">
              Share your Google Tasks lists in real-time with your team with one
              link.
            </h2>
            <a
              className="font-medium text-blue-600 open-sans hover:text-blue-700"
              href="/app"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row-reverse mt-10 sm:mt-4 items-center w-full px-4 md:px-8 lg:px-28 mb-24">
          <img
            className="w-full md:w-1/2 p-8 object-scale-down"
            alt="Attach Google Drive documents to Google Tasks and export to Google Sheets"
            src="https://i.ibb.co/KsvmPTV/tasksboard-google-workspace.jpg"
          />
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-4 leading-10">
              Fully integrated with Google Workspace
            </h1>
            <h2 className="mb-6 text-xl text-gray-600 leading-8">
              Export your lists to Google Sheets, attach Google Drive files and
              Gmail emails to your tasks.
            </h2>
            <a
              className="font-medium text-blue-600 open-sans hover:text-blue-700"
              href="/app"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mt-10 sm:mt-4 items-center w-full px-4 md:px-8 lg:px-28 mb-24">
          <div className="w-full md:w-1/2 flex flex-row items-center justify-between p-8">
            <a href="/app" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                <img
                  className="bounce cursor-pointer"
                  alt="TasksBoard is synced with Google Tasks on iOS"
                  src="https://i.ibb.co/yVK31Ld/iosLogo.jpg"
                  width="84"
                  height="150"
                />
                <label className="mt-4 text-gray-600">iOS</label>
              </div>
            </a>
            <a href="/app" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                <img
                  className="bounce cursor-pointer"
                  alt="TasksBoard is synced with Google Tasks on Android"
                  src="https://i.ibb.co/rmgjmvV/android-Logo.jpg"
                  width="84"
                  height="150"
                />
                <label className="mt-4 text-gray-600">Android</label>
              </div>
            </a>
            <a href="/app" rel="noreferrer" target="_blank">
              <div className="flex flex-col items-center">
                <img
                  className="bounce cursor-pointer"
                  alt="TasksBoard is synced with Google Tasks on Google Calendar"
                  src="https://i.ibb.co/QXjkXMz/calendar-Logo.jpg"
                  width="178"
                  height="150"
                />
                <label className="mt-4 text-gray-600">Calendar</label>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-4 leading-10">
              Synchronized across all your devices
            </h1>
            <h2 className="mb-6 text-xl text-gray-600 leading-8">
              TasksBoard stays in sync with Google Tasks on Gmail, Calendar and
              Google Tasks mobile.
            </h2>
            <a
              className="font-medium text-blue-600 open-sans hover:text-blue-700"
              href="/app"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
