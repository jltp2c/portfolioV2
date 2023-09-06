import React from "react";

function Experiences() {
  return (
    <div className="p-14 h-screen md:h-[calc(100vh)] text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto ">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">1.</span> MES EXPÉRIENCES
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-60"></span>
      </div>
      <div className="flex flex-row gap-14 justify-center">
        <div className="entreprises"></div>
      </div>
    </div>
  );
}

export default Experiences;
