import { useState } from "react";

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 border rounded-md focus:outline-none"
      >
        Select an option
      </button>
      <div
        className={`absolute w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden transition-all ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-blue-200"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
