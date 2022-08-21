import React from "react";

const Loader = () => {
  return (
    <div className="loading w-screen h-screen bg-white grid place-content-center max-w-full">
      <div className="w-20 h-20 border-b-[5px] border-solid border-gray-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;