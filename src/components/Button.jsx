import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text }) {
  return (
    <Link to={link}>
      <div>
        <button
          style={{
            clipPath:
              "polygon(13% 0, 100% 0, 100% 64%, 89% 100%, 0 100%, 0 38%)",
          }}
          className=" uppercase px-10 py-4 font-bold bg-red-600 text-white duration-500 hover:bg-red-700"
        >
          {text}
        </button>
      </div>
    </Link>
  );
}
