type RoundedCheckboxTypes = {
  checked: boolean;
  onChange: () => void;
  label?: string;
};
export const RoundedCheckbox = ({
  checked,
  onChange,
  label,
}: RoundedCheckboxTypes) => {
  return (
    <div className="flex items-center">
      <label onClick={onChange} className="mr-1 cursor-pointer">
        {label}
      </label>
      <div
        className={`w-5 h-5 rounded-full border ${
          checked
            ? "bg-blue-500 border-blue-500"
            : "border-gray-400 hover:border-gray-500"
        } flex items-center justify-center cursor-pointer`}
        onClick={onChange}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
    </div>
  );
};
