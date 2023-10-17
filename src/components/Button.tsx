import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-blue-800 md:my-0 my-7 text-lg flex items-center gap-2 text-white px-6  py-2 rounded md:ml-8 hover:bg-blue-600 duration-300 transition">
      {children}
    </button>
  );
};

export default Button;
