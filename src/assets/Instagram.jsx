import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Instagram() {
  return (
    <Link to="https://www.instagram.com/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaInstagramSquare />
      </div>
    </Link>
  );
}
