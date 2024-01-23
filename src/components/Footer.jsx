import React from "react";
import footerLogo from "../assets/png/logo.png";
import Facebook from "../assets/Facebook";
import Tumb from "../assets/Tumb";
import Instagram from "../assets/Instagram";
import Twitter from "../assets/Twitter";
import Youtube from "../assets/Youtube";
import Snapchat from "../assets/Snapchat";
import Pinterest from "../assets/Pinterest";

export default function Footer() {
  return (
    <div className="bg-main-dark w-full flex justify-center py-16">
      <div className="max-w-7xl w-full flex justify-between text-white">
        {/* 1. 로고파트 */}
        <div className="flex space-x-8">
          {/* 로고 */}
          <div>
            <img src={footerLogo} alt="footerimg" />
          </div>
          {/* 2 */}
          <div>
            <p>ABOUT MARVEL</p>
            <p>HELP/FAQS</p>
            <p>CAREERS</p>
            <p>INTERNSHIPS</p>
          </div>
          {/* 3 */}
          <div>
            <p>ADVERTISING</p>
            <p>DISNEY+</p>
            <p>MARVELHQ.COM</p>
            <p>REDEEM DIGITAL COMICS</p>
          </div>
        </div>
        {/* 2. ads */}
        <div className=" space-y-8">
          {/* 위 */}
          <div className="flex space-x-4">
            {/* 이미지 */}
            <div className="h-8">
              <img
                className="h-full"
                src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                alt="insider_img"
              />
            </div>
            {/* 본문 */}
            <div className=" text-white">
              <h2 className=" uppercase font-semibold">marvel insider</h2>
              <p className=" text-gray-500 text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>
          {/* 아래 */}
          <div className="flex space-x-4">
            {/* 이미지 */}
            <div className="h-8">
              <img
                className="h-full"
                src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                alt="insider_img"
              />
            </div>
            {/* 본문 */}
            <div className=" text-white">
              <h2 className=" uppercase font-semibold">marvel unlimited</h2>
              <p className=" text-gray-500 text-sm">
                Access Over 30,000+ Digital Comics
              </p>
            </div>
          </div>
        </div>
        {/* 3. 아이콘 */}
        <div>
          <h3 className=" uppercase">FOLLOW MARVEL</h3>
          <div>
            <p>
              <Facebook />
            </p>
            <p>
              <Twitter />
            </p>
            <p>
              <Instagram />
            </p>
            <p>
              <Tumb />
            </p>
            <p>
              <Youtube />
            </p>
            <p>
              <Snapchat />
            </p>
            <p>
              <Pinterest />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
