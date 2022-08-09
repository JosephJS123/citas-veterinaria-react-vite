import React from "react";

const Error = ({ children }) => {
  return (
    <div className="bg-rose-400 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  );
};

export default Error;
