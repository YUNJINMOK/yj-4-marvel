import React from "react";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import { testimonials } from "../lib/menu";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import NoticeDisney from "../components/NoticeDisney";
import Logoimg from "../assets/png/logo.png";

const Card = ({
  image,
  title,
  link,
  text,
  selected,
  setSelected,
  position,
  btn1,
  btn2,
  link2,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className=" w-full h-full flex justify-center">
      <motion.div
        initial={false}
        animate={{
          x: `${offset}%`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          zIndex: position,
        }}
        onClick={() => setSelected(position)}
        className="absolute top-0 left-0 w-full min-h-full p-8  flex  flex-col justify-center items-center"
      >
        <div className=" absolute top-0 left-0 w-full h-full flex justify-center">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={title}
          />
          <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
            {Logoimg && (
              <div className="h-10">
                <img
                  src={Logoimg}
                  alt="slide_logo"
                  className="h-full object-cover"
                />
              </div>
            )}
            <h1 className="text-4xl font-bold uppercase">echo comics</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, eos!
            </p>
            <div className="flex space-x-4">
              <Button link={link} text={btn1} />
              <Button link={link2} text={btn2} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <>
      <div className=" flex space-x-2">
        {numTracks.map((item, index, array) => (
          <button
            onClick={() => setSelected(index)}
            key={index}
            className="h-2 w-full bg-slate-300 relative"
          >
            {selected === index ? (
              <motion.span
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => {
                  setSelected(selected === array.length - 1 ? 0 : selected + 1);
                }}
                className="absolute top-0 left-0 bg-red-600 w-full h-full "
              ></motion.span>
            ) : (
              <span
                className="absolute top-0 left-0 bg-red-600"
                style={{
                  width: selected > index ? "100%" : "0%",
                }}
              ></span>
            )}
            <p
              className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${
                selected === index && "text-red-600"
              } uppercase`}
            >
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </>
  );
};

export default function MainSilde() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <section className="w-full flex flex-col overflow-hidden">
        <NoticeDisney />
        {/* 그림영역 */}
        <div className=" relative w-full h-[450px]">
          {testimonials.map((item, index) => (
            // 5개중의 1개 아이템
            <Card
              key={index}
              {...item}
              selected={selected}
              setSelected={setSelected}
              position={index}
            />
          ))}
        </div>
        {/* 버튼영역 */}
        <div className="w-full h-20 flex justify-center">
          <div className="max-w-7xl h-full w-full grid grid-cols-4">
            {/* 1: 75% grid-cols-3 */}
            <div className="col-span-3 bg-white">
              <SelectedBtns
                numTracks={testimonials}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
            {/* 2: 25% grid-cols-1 */}
            <div className="flex w-full h-full justify-end space-x-4">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
