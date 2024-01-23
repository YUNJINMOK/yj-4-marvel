import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Twitter() {
  return (
    <Link to="https://twitter.com/?lang=ko">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <BsTwitterX />
      </div>
    </Link>
  );
}
