import { useState } from "react";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <span
        className={`w-6 h-6 border-2 rounded transition-all duration-300 ${
          isChecked ? "border-gray-400" : "border-gray-400"
        } flex items-center justify-center`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </span>
      
    </label>
  );
};

export default CustomCheckbox;
