import React from "react";
import { bigProjects } from "./dataProjects";

function Projets() {
  return (
    <div className="p-14 text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto ">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">3.</span> MES PROJETS
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-44"></span>
      </div>
      <div className="projets flex gap-20 flex-col">
        {bigProjects.map((projet) => {
          return (
            <div className="border-2 border-graydark rounded-md w-72 h-80 bg-navbg">
              <h1>{projet.status}</h1>
              <h2>{projet.title}</h2>
              <h3>{projet.stacks}</h3>
              <p>{projet.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projets;
