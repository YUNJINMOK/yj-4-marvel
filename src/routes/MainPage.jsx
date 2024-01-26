import Layout from "../components/Layout";
import MainSilde from "../components/MainSilde";
import TitleImgeBox from "../components/TitleImgeBox";
import Layout7 from "../components/Layout7";
import { useQuery } from "react-query";
import { apiGetComics } from "../API";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useMeasure } from "react-use";

const ListItem = ({ item, CARD_WIDTH, CARD_HEIGHT, MARGIN }) => (
  <div
    className=""
    style={{
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      margin: MARGIN,
    }}
  >
    {/* 1 이미지 박스 */}
    <div className="w-full h-[280px]">
      <img
        className="w-full h-full object-cover object-center"
        src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
        alt="comic_image"
      />
    </div>
    {/* 2 타이틀 */}
    <div>
      <h2 className="text-sm font-semibold">{item.title}</h2>
      <h4 className="text-sm text-gray-500">{item.modified.substr(0, 10)}</h4>
    </div>
  </div>
);

export default function MainPage() {
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  let lists; // fetch 요청한 배열을 받기 위한 변수
  if (!isLoading) {
    lists = data?.data.results;
  }
  console.log(isLoading, data);

  const CARD_WIDTH = 195;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN;

  const BREAKPOINT = {
    sm: 640,
    lg: 1024,
  };

  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > BREAKPOINT.lg ? 3 : width > BREAKPOINT.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shifLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => pv + CARD_SIZE);
  };
  const shifRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSilde />

      {/* 코믹스 섹션 */}
      <TitleImgeBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
      <section className="w-full flex justify-center">
        <div ref={ref} className="relative max-w-7xl w-full">
          <motion.div
            animate={{
              x: offset,
            }}
            className="  w-full flex"
          >
            {lists?.map((item, index) => (
              <ListItem
                CAED_WIDTH={CARD_WIDTH}
                CARD_HEIGHT={CARD_HEIGHT}
                MARGIN={MARGIN}
                item={item}
                key={index}
              />
            ))}
          </motion.div>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            onClick={shifLeft}
            className="absolute left-0 top-[35%] bg-slate-500/50 duration-100 p-3  pl-2 text-4xl text-white hover:pl-3"
          >
            <FaAngleLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            onClick={shifRight}
            className="absolute right-0 top-[35%] bg-slate-500/50 duration-100 p-3  pl-2 text-4xl text-white hover:pr-3"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </section>
    </Layout>
  );
}
