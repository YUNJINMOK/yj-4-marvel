import React from "react";
import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo.png";

export default function Header() {
  return (
    <>
      {/* 헤더 */}
      <section className="w-full flex justify-center h-12 bg-main-dark ">
        <div className="relative max-w-7xl w-full h-full flex justify-between items-center text-white">
          {/* 왼쪽:회원정보 */}
          <div className="flex h-full items-center text-sm space-x-2 border-l border-r border-gray-700 px-4">
            <span className=" bg-white w-5 h-5 rounded-full inline-block text-main-dark text-right italic pr-0.5">
              IN
            </span>
            <span>Ken</span>
          </div>
          {/* 오른쪽:검색 */}
          <div className=" px-4 h-full flex border-l border-r border-gray-700 items-center space-x-4">
            {/* subscribe */}
            <div className="h-full flex items-center space-x-2">
              {/* 왼쪽:이미지 */}
              <img
                className="h-[60%] inline-block"
                src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                alt="imgmavvel"
              />
              <div className=" inline-block uppercase">
                <p className="text-sm">marvel unlimited</p>
                <p className="text-xs">subscribe</p>
              </div>
            </div>
            {/* 아이콘 */}
            <div className="h-full flex items-center border-l border-gray-700 pl-4">
              <FaSearch />
            </div>
          </div>
          {/* 중앙:로고 */}
          <div className=" absolute top-0 left-1/2 -translate-x-[50%] h-full">
            <img className="h-full" src={LogoLarge} alt="marverlLogo" />
          </div>
        </div>
      </section>
      <section className="w-full border-t border-b border-gray-700 flex justify-center h-10 bg-main-dark items-center uppercase text-white space-x-8 text-sm">
        <p>news</p>
        <p>comices</p>
        <p>characters</p>
        <p>movies</p>
        <p>tv show</p>
        <p>games</p>
        <p>videos</p>
        <p>more</p>
      </section>
    </>
  );
}
