import React from "react";
import Image from "next/image";
import soutien from "../../public/assets/icones/soutien.png";
import styles from "./accueil.module.css";

function Accueil() {
  return (
    <div className="flex p-14 h-screen flex-col item-center gap-8 justify-center md:h-[calc(100vh-3rem)] lg:w-2/3 mx-auto">
      <h1 className="text-orange text-xl ">Bonjour, je suis</h1>

      <div className="flex">
        <h2 className="text-graylight font-extrabold text-4xl   md:text-6xl ">
          Jean-Luc TAN.
        </h2>
      </div>
      <h3 className="text-gray font-extrabold text-4xl  md:text-5xl ">
        Je développe des solutions WEB créatives et durables.
      </h3>
      <p className="text-gray  text-sm md:text-xl ">
        Ingénieur et développeur WEB, je suis à la recherche de
        <span className="text-orange"> nouvelles opportunités</span> dans le
        développement WEB avec une spécialisation
        <span className="text-orange"> Front-end/FullStack.</span>
      </p>
    </div>
  );
}

export default Accueil;
