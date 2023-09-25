import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className="contact p-14 md:h-screen  text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4x">
          <span className="text-orange ">4.</span> CONTACT
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-96"></span>
      </div>
      <div className="w-2/3 flex flex-col justify-center text-center gap-10 ">
        <h1 className="text-2xl md:text-4xl font-extrabold"> What's next ? </h1>

        <h2 className="text-justify text-gray mb-10">
          Je suis à la recherche d'opportunités passionnantes dans le
          développement web, avec une expertise en TypeScript : React.js,
          Node.js, Next.js, BDD(mongoDB, PostgreSQL) afin de créer des
          expériences web optimales. Engageons la conversation et faisons équipe
          pour créer quelque chose d'extraordinaire !
        </h2>
        <div className={styles.iconesStacks}>
          <Image src="/assets/icones/typescript.png" width={50} height={40} />
          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src="/assets/icones/react.png" width={60} height={40} />
            <Image src="/assets/icones/node.png" width={60} height={40} />
          </div>
          <Image src="/assets/icones/nextJS.png" width={70} height={50} />
          <Image
            src="/assets/icones/tailwind.svg"
            width={80}
            height={60}
            className="bg-graylight p-1 border-2 rounded-md"
          />

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/assets/icones/mongodb.png" width={60} height={40} />
            <Image
              src="/assets/icones/postgresql.png"
              width={160}
              height={20}
              className="bg-graylight p-1 border-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <Link
            className="border-2 border-orange p-2 hover:bg-lightorange transition-all rounded-md"
            href="mailto:'jeanluc.tan75@gmail.com'">
            Mail
          </Link>
          <Link
            className="border-2 border-orange p-2 hover:bg-lightorange transition-all rounded-md"
            href="https://github.com/jltp2c">
            Github
          </Link>

          <Link
            className="border-2 border-orange p-2 hover:bg-lightorange transition-all rounded-md"
            href="https://linkedin.com/in/jeanluctan">
            Mon linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
