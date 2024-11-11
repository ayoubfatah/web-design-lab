import React, { useState } from "react";

const ToggleButton = ({
  initialState = false,
  onChange,
}: {
  initialState: boolean;
  onChange: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors duration-200 ease-in-out focus:outline-none ${
        initialState
          ? "bg-yellow-300 border-yellow-500"
          : "bg-gray-100 border-gray-300"
      }`}
      role="switch"
      aria-checked={initialState}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        className={`inline-block h-[19px] w-[19px] transform rounded-full bg-white transition duration-200 ease-in-out ${
          initialState ? "translate-x-5" : "translate-x-1"
        } shadow-sm border border-gray-200`}
      />
    </button>
  );
};

export default ToggleButton;
