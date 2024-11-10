import React, { useState } from "react";

const ToggleButton = ({
  initialState = false,
  onChange,
}: {
  initialState: boolean;
  onChange: (state: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors duration-200 ease-in-out focus:outline-none ${
        isChecked
          ? "bg-yellow-300 border-yellow-500"
          : "bg-gray-100 border-gray-300"
      }`}
      role="switch"
      aria-checked={isChecked}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        className={`inline-block h-[19px] w-[19px] transform rounded-full bg-white transition duration-200 ease-in-out ${
          isChecked ? "translate-x-6" : "translate-x-1"
        } shadow-sm border border-gray-200`}
      />
    </button>
  );
};

export default ToggleButton;
