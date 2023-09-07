import React from "react";
import portrait from "../../public/assets/img/portrait.jpg";
import Image from "next/image";
import styles from "./about.module.css";

function About() {
  const langages = [
    "JavaScript (ES6)",
    "TypeScript",
    "HTML",
    "CSS (Sass / Tailwind / Bootstrap)",
  ];
  const librairies = [
    "React",
    "Node",
    "Express",
    "Redux toolkit",
    "Next.JS",
    "Prisma",
  ];
  const databases = ["NoSQL (Mongoose/MongoDB)", "SQL (postgreSQL)"];

  const Outils = ["Git", "Webpack", "Netlify", "Firebase", "Babel"];

  return (
    <div className="p-14 md:h-[calc(100vh+10rem)] text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto ">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">1.</span> QUI SUIS-JE ?
        </h1>
        <span className=" w-10 h-1 bg-graydark ml-5 rounded-sm md:w-60"></span>
      </div>
      <div className="flex flex-col gap-14 justify-center  md:flex-row ">
        <div className="flex md:justify-center mx-auto  md:mx-0 md:h-60 border-2 rounded-sm border-orange text-justify">
          <Image
            src={portrait}
            width={220}
            height={220}
            className={styles.portrait}
          />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <p className="mb-5 text-sm  text-justify">
            Bonjour ! Je me présente, Jean-Luc, et je réside actuellement à
            <span className="text-orange"> Paris</span>. J'ai obtenu un diplôme
            d'
            <span>Ingénieur</span> et j'ai plus de 2 ans et demi d'expérience
            dans la conduite de projets dans le domaine du nucléaire. De plus,
            je possède des compétences dans la résolutions des problèmes
            complexes liés à la conception du design mécanique. J'ai également
            validé une{" "}
            <span className="text-orange">
              certification de développeur Web de RNCP niveau 6{" "}
            </span>{" "}
            après avoir suivi une formation intensive de plus de 400 heures.
            <br />
            Je suis ouvert ASAP aux nouvelles opportunités dans le domaine du
            développement Web, avec une spécialisation en
            <span className="text-orange"> Front-End/FullStack</span>.
          </p>
          <h1 className="mb-2 underline text-sm ">
            Langages de programmation :
          </h1>
          <div className="flex">
            <ul className="grid grid-cols-2 gap-5 text-xs">
              {langages.map((item) => (
                <li>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">Librairies & Frameworks :</h1>
          <div className="flex text-justify">
            <ul className="grid grid-cols-3 gap-5 text-xs  ">
              {librairies.map((item) => (
                <li>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">BDD :</h1>
          <div className="flex ">
            <ul className="grid grid-cols-2 gap-5 text-xs">
              {databases.map((item) => (
                <li>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">Outils :</h1>
          <div className="flex ">
            <ul className="grid grid-cols-3 gap-5 text-xs">
              {Outils.map((item) => (
                <li>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
