import React from "react";
import { formations } from "./data";
import { useState } from "react";

function Formations() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col justify-center gap-8 md:flex-row w-2/3">
      <div className="title  flex gap-1 justify-center items-center md:flex-col md:justify-normal	">
        {formations.map((exp, index) => {
          return (
            <button
              className="rounded-sm  p-1 transition-transform text-xs"
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
      <div className="entreprises h-80  flex flex-col sm:w-80 md:w-2/3">
        <p className="m-2 w-2/3 ">
          {formations[selected].titre}{" "}
          <span className="text-orange font-bold">
            @{formations[selected].entreprise}
          </span>
        </p>
        <p className="m-2 w-2/3 ">{formations[selected].date}</p>
        {formations[selected].descr.map((pro) => (
          <div className="flex flex-col m-2 text-gray text-sm" key={pro}>
            <p>
              <span className="text-orange">▹ </span>
              {pro}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formations;
