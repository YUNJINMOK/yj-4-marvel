import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text, outline }) {
  return (
    <Link to={link}>
      <div>
        <button
          style={{
            clipPath:
              "polygon(13% 0, 100% 0, 100% 64%, 89% 100%, 0 100%, 0 38%)",
          }}
          className={`uppercase px-10 py-4 font-bold bg-red-600 text-white duration-500 hover:bg-red-700 ${
            outline === "outline"
              ? "bg-gray-500 hover:bg-gary-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {text}
        </button>
      </div>
    </Link>
  );
}
