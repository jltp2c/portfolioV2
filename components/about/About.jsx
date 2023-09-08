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
  const librairies = ["React", "Node", "Express", "Redux", "Next.JS", "Prisma"];
  const databases = ["NoSQL (Mongoose/MongoDB)", "SQL (postgreSQL)"];

  const Outils = ["Git", "Webpack", "Netlify", "Firebase", "Babel"];

  return (
    <div className="about p-14 md:h-[calc(100vh+10rem)] text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto ">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
          <span className="text-orange ">1.</span> QUI SUIS-JE ?
        </h1>
        <span className=" w-10 h-1 bg-graydark ml-5 rounded-sm md:w-60 lg:w-96"></span>
      </div>
      <div className="flex flex-col gap-14 justify-center  md:flex-row ">
        <div className="flex md:justify-center mx-auto  md:mx-0 md:h-60 border-2 rounded-sm border-orange text-justify">
          <Image
            src={portrait}
            width={220}
            height={220}
            className={styles.portrait}
            alt="portrait"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <p className="mb-5 text-sm  text-justify">
            Bonjour ! Je suis <span className="text-orange"> Jean-Luc</span>, et
            je suis prêt à propulser votre projet vers de nouveaux sommets !
            Actuellement basé à Paris, je suis un
            <span className="text-orange"> Ingénieur</span>, fort de plus de 2
            ans et demi d'expérience réussie dans la gestion de projets
            nucléaires. Mon expertise ne s'arrête pas là, j'aime résoudre les
            solutions de problèmes complexes au développement Web, évidemment je
            suis prêt à affronter les défis les plus ardus. De plus, j'ai
            décroché une certification de{" "}
            <span className="text-orange">
              développeur Web de niveau 6 RNCP
            </span>
            , suite à une formation intensive de plus de 400 heures.
            <br />
            Je suis avide de nouvelles opportunités dans le domaine du
            développement Web, avec une spécialisation en{" "}
            <span className="text-orange">Front-End/FullStack. </span>
            <br />
            Prêt à rejoindre votre équipe ASAP, je suis déterminé à apporter mon
            énergie, mon expertise et ma passion pour l'innovation à chaque
            projet.
          </p>
          <h1 className="mb-2 underline text-sm ">
            Langages de programmation :
          </h1>
          <div className="flex">
            <ul className="grid grid-cols-2 gap-5 text-xs">
              {langages.map((item, ind) => (
                <li key={ind}>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">Librairies & Frameworks :</h1>
          <div className="flex text-justify">
            <ul className="grid grid-cols-3 gap-5 text-xs  ">
              {librairies.map((item, ind) => (
                <li key={ind}>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">BDD :</h1>
          <div className="flex ">
            <ul className="grid grid-cols-2 gap-5 text-xs">
              {databases.map((item, ind) => (
                <li key={ind}>
                  {" "}
                  <span className="text-orange l">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="mb-2 underline text-sm ">Outils :</h1>
          <div className="flex ">
            <ul className="grid grid-cols-3 gap-5 text-xs">
              {Outils.map((item, ind) => (
                <li key={ind}>
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
