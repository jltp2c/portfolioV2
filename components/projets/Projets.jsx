import React from "react";
import { bigProjects } from "./dataProjects";
import styles from "./projets.module.css";
import Image from "next/image";
import Link from "next/link";

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
            <div key={projet.id} className={styles.projetBox}>
              <h1 className="text-sm text-orange">{projet.status}</h1>
              <h2 className="text-xl font-extrabold mb-5">{projet.title}</h2>
              <p className="text-gray text-sm mb-5">{projet.desc}</p>
              <h3 className="text-gray text-sm mb-10">{projet.stacks}</h3>

              <div className="flex justify-center z-0">
                {projet.onBuild ? (
                  <Image
                    src="/assets/img/encours.png"
                    alt={projet.title}
                    className=" drop-shadow-sm"
                    width={60}
                    height={60}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="icones">
                {projet.github === "" ? (
                  ""
                ) : (
                  <Link href={projet.github}>
                    <Image
                      src="/assets/img/github.png"
                      width={20}
                      height={20}
                      className={styles.github}
                    />
                  </Link>
                )}
                <Link href={projet.link}>
                  <Image
                    src="/assets/img/link.png"
                    width={20}
                    height={20}
                    className={styles.link}
                  />
                </Link>
              </div>
              <Image
                src={projet.img}
                alt={projet.title}
                className="opacity-5 drop-shadow-sm"
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projets;
