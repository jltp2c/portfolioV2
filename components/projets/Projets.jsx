import { bigProjects } from "./dataProjects";
import styles from "./projets.module.css";
import Image from "next/image";
import Link from "next/link";

function Projets() {
  return (
    <div className=" projets p-14 text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto ">
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
              <div className="  md:translate-x-36  md:flex md:flex-col md:text-right">
                <h1 className="text-sm text-orange ">{projet.status}</h1>
                <Link href={projet.link}>
                  <h2 className="text-2xl font-extrabold mb-5 hover:text-orange z-50">
                    {projet.title}
                  </h2>
                </Link>
                <div className="md:bg-graydark md:p-5 md:rounded-md">
                  <p className="text-gray text-sm mb-5 text-justify">
                    {projet.desc}
                  </p>
                  <h3 className="text-lightgray text-sm mb-10">
                    {projet.stacks}
                  </h3>
                </div>
              </div>

              <div className="flex justify-center ">
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
                      alt="github"
                    />
                  </Link>
                )}
                <Link href={projet.link}>
                  <Image
                    src="/assets/img/link.png"
                    width={20}
                    height={20}
                    className={styles.link}
                    alt="link"
                  />
                </Link>
              </div>
              <Link href={projet.link}>
                <Image
                  src={projet.img}
                  alt={projet.title}
                  className=" drop-shadow-sm opacity-5 md:hidden"
                  fill
                />
              </Link>
              {/* 768 px pour le changement dimage */}
              <div>
                <Image
                  src={projet.img}
                  alt={projet.title}
                  className={styles.imagePro}
                  fill
                />
                <Link href={projet.link}>
                  <Image
                    src={projet.gif}
                    alt={projet.title}
                    className={styles.imageGif}
                    fill
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projets;
