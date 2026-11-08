import React from "react";

const AddButton = () => {
  return (
    <button className="relative bg-indigo-500 text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-lg flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
      <span className="mr-10">Add Task</span>
      <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-md flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="w-[1.1em] transition-transform duration-300 text-indigo-500 group-hover:translate-x-[0.1em]"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default AddButton;
