import React from "react";
import SendImg from "@/images/icons/send.svg";

export default function Button({
  children = "Click Here",
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group flex items-center justify-between bg-black border border-gray-700 
                  rounded-full pl-6 pr-1 py-1 min-w-[180px] hover:bg-gray-900 
                  transition-all active:scale-95 ${className}`}
      {...props}
    >
      <span className="text-white font-semibold text-lg">{children}</span>

      <div className="bg-[#008080] rounded-full w-10 h-10 flex items-center justify-center ml-4 group-hover:bg-[#009a9a] transition-colors">
        <img
          src={SendImg}
          alt="icon"
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
        />
      </div>
    </button>
  );
}
