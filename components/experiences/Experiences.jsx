"use client";
import React, { useState } from "react";
import { experiences } from "./data";
import Formations from "./Formations.jsx";

function Experiences() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="experiences p-14 text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">2.</span> MES EXPÉRIENCES
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-44"></span>
      </div>
      <h1 className="font-bold mt-10 md:text-xl">
        Expériences professionnelles
      </h1>
      <div className="flex flex-col justify-center gap-8 md:flex-row md:w-2/3">
        <div className="title flex gap-1 justify-center items-center md:flex-col md:justify-normal">
          {experiences.map((exp, index) => {
            return (
              <button
                className="rounded-sm p-1 m-2 transition-transform text-xs md:text-sm"
                key={index}
                style={{
                  background: selected === index ? "#ff700a3c" : "#111111",
                  color: selected === index ? "#ff700a" : "#8492a6",
                }}
                onClick={() => setSelected(index)}>
                {exp.entreprise}
              </button>
            );
          })}
        </div>
        <div className=" entreprises h-96 flex flex-col sm :w-80 md:w-2/3">
          <p className="m-2 w-2/3 ">
            {experiences[selected].status}{" "}
            <span className="text-orange font-bold">
              @{experiences[selected].entreprise}
            </span>
          </p>
          <p className="m-2 w-2/3 ">{experiences[selected].date}</p>
          {experiences[selected].projets.map((pro) => (
            <div className="flex flex-col m-2 text-gray text-sm" key={pro}>
              <p>
                <span className="text-orange">▹ </span>
                {pro}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1 className="font-bold md:text-xl">Formations</h1>
      <Formations />
    </div>
  );
}

export default Experiences;
