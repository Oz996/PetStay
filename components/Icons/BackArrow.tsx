import React from "react";

const BackArrow = () => {
  return (
    <div className="flex gap-5 items-center text-lg cursor-pointer">
      <svg
        width="34"
        height="29"
        viewBox="0 0 34 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 14.5H32M2 14.5L14.5 2M2 14.5L14.5 27"
          stroke="#23C28D"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Go back</p>
    </div>
  );
};

export default BackArrow;
