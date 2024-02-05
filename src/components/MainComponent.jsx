import React from "react";
import "./MainComponent.css";

function MainComponent() {
  return (
    <main className="min-h-screen text-[16px] bg-main-yellow flex flex-col items-center justify-center py-6">
      <div className="main-container w-[375px] bg-white p-5 rounded-xl">
        <div className="image h-[220px] rounded-xl mb-6"></div>
        <h2 className="bg-main-yellow tag font-bold w-24 py-2 flex items-center justify-center mb-4 cursor-pointer rounded-md shadow-sm">
          Learning
        </h2>
        <p className="font-semibold mb-4 ">Published 21 Dec 2023</p>
        <h1 className="mb-4 font-bold text-2xl">HTML & CSS foundations</h1>
        <p className="text-base text-main-grey tracking-wide font-semibold mb-6">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-x-3">
          <img
            className="w-12 h-12 cursor-pointer"
            src="../../public/assets/images/image-avatar.webp"
            alt="user pic"
          />{" "}
          <p className="font-bold ">Greg Hooper</p>
        </div>
      </div>
      <div className="mt-6 font-semibold text-lg">
        Challenge by{" "}
        <a
          className="text-white"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        Coded by{" "}
        <a href="#" className="text-white">
          Tech-Rocket
        </a>
      </div>
    </main>
  );
}

export default MainComponent;
