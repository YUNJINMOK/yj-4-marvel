import React from "react";
import TitleRotate from "../components/TitleRotate";
import Button from "../components/Button";

export default function TitleImgeBox() {
  return (
    <section className="w-full">
      {/* 이미지로 된 타이틀 */}
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 82%, 0 100%)",
        }}
        className=" relative w-full h-[500px] flex justify-end bg-main-dark"
      >
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 5% 100%)",
          }}
          className="w-[50%] h-full"
        >
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fjacuwmANHozWrXRmlO_CXHXznpsL8oULw&usqp=CAU"
            alt="comics_title-img"
          />
        </div>
        {/* 절대퍼지션 */}
        <div className=" absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="max-w-7xl w-full h-full flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              {/* 사선으로 된 제목 */}
              <TitleRotate text="available now!!!" />
              <h1 className="text-4xl font-bold uppercase">
                new on marvel unlimited
              </h1>
              <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
            </div>
            <Button outline="outline" text="get involved unlimited" />
          </div>
        </div>
      </div>
      {/* 코믹스 리스트 */}
    </section>
  );
}
