import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function facebook() {
  return (
    <Link to="https://www.facebook.com/?locale=ko_KR">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaFacebookSquare />
      </div>
    </Link>
  );
}
