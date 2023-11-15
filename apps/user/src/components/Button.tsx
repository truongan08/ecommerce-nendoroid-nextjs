import React from "react";
interface ButtonProps {
  text: string;
  onClickProps: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ text, onClickProps, className }) => {
  return (
    <button
      className={`bg-blue-800 md:my-0 my-7 text-sm flex items-center gap-2 text-white px-6 py-2 rounded md:ml-8 hover:bg-blue-600 duration-300 transition whitespace-nowrap ${className}`}
      onClick={() => onClickProps()}
    >
      {text}
    </button>
  );
};

export default Button;
