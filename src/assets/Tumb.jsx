import React from "react";
import { FaTumblr } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Tumb() {
  return (
    <Link to="https://www.tumblr.com/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaTumblr />
      </div>
    </Link>
  );
}
