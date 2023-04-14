import React from "react";
import ReactTypingEffect from "react-typing-effect";
import poto from "./../../assets/poto.png";
const Paneli = () => {
  return (
    <div className="shadow shadow-neutral">
      <div className="grid h-max mx-10 justify-center pt-7">
        <div className="avatar">
          <div className=" w-28 rounded-full">
            <img src={poto} />
          </div>
        </div>
      </div>
      <div className="grid justify-center">
        <ReactTypingEffect
          text={["Hi, I'm Diva 👋"]}
          speed={100}
          eraseDelay={5000}
          typingDelay={100}
        />
      </div>
      <div className="grid justify-center">
        <p className=" text-center pt-6 text-2xl">
          a student, learning web developer as
        </p>
        <p className="text-center text-2xl pb-20">
          a fullstack web developer using React JS
        </p>
      </div>
    </div>
  );
};

export default Paneli;
