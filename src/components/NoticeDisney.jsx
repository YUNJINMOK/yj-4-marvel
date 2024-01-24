import React from "react";
import Layout from "./Layout";
import disneyimg from "../assets/png/disneyimg.png";

export default function NoticeDisney() {
  return (
    <>
      <div className="w-full h-10 bg-main-dark flex justify-center items-center uppercase text-gray-300 text-xs space-x-2">
        <span>stream echo on</span>
        <img src={disneyimg} alt="disney" />
      </div>
    </>
  );
}
