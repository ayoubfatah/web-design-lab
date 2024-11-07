import { motion } from "framer-motion";
import { useState } from "react";
export const Navbar: React.FC<{ nav1v: 1 | 2 }> = ({ nav1v }) => {
  const animation =
    "motion-translate-x-in-[0%] motion-translate-y-in-[52%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/translate";

  return (
    <ul
      className={` ${animation}   h-[66px] bg-white text-blue-500  flex items-center w-full justify-between py-3 px-2  rounded-t-md"`}
    >
      {nav1v === 1 && (
        <div
          className={`${animation}  flex items-center justify-between w-full`}
        >
          <li className="text-2xl font-semibold text-black">Tahanout</li>{" "}
          <ul className="flex  gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <Avatar />
        </div>
      )}
      {nav1v === 2 && (
        <div
          className={`${animation}  flex items-center justify-between w-full`}
        >
          <li className="text-2xl font-semibold text-black">Tahanout</li>{" "}
          <ul className="flex  gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      )}
    </ul>
  );
};

export const Navbar2: React.FC<{ searchInput: number }> = ({ searchInput }) => {
  const searchAnimation =
    "motion-translate-x-in-[0%] motion-translate-y-in-[72%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/translate";

  return (
    <ul
      className={` ${searchAnimation}  h-[66px] bg-white top-0 left-0 flex items-center w-full justify-around py-3 px-2 rounded-t-md"`}
    >
      <li className="text-2xl font-semibold">Tahanout</li>
      {searchInput === 1 && <SearchInput1 searchAnimation={searchAnimation} />}
      {searchInput === 2 && <SearchInput2 searchAnimation={searchAnimation} />}
      <Avatar />
    </ul>
  );
};

const SearchInput1 = ({ searchAnimation }: { searchAnimation: string }) => {
  return (
    <form
      className={`${searchAnimation} flex items-center w-[600px] mx-auto pointer-events-none  h-[46px]`}
    >
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 "
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 "
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        Search
      </button>
    </form>
  );
};
const SearchInput2 = ({ searchAnimation }: { searchAnimation: string }) => {
  return (
    <form className={`${searchAnimation} w-[600px]  mx-auto h-[46px]`}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-blue-500 absolute end-2.5 bottom-3  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  "
        >
          Search
        </button>
      </div>
    </form>
  );
};

const Avatar = () => {
  return (
    <img
      className="w-10 h-10 rounded-full"
      src="https://i.pravatar.cc/150?img=48"
      alt="Rounded avatar"
    />
  );
};
