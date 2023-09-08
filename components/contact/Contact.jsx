import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className="contact p-14 h-screen text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">4.</span> CONTACT
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-72"></span>
      </div>
      <div className="w-2/3 flex flex-col justify-center text-center gap-10 ">
        <h1 className="text-2xl md:text-4xl font-extrabold"> What's next ? </h1>

        <h2 className="text-center text-gray">
          Je suis à la recherche d'opportunités passionnantes dans le
          développement web, avec une expertise en TypeScript avec du React,
          Node.js, Next.js pour créer des expériences web exceptionnelles.
          Engageons la conversation et faisons équipe pour créer quelque chose
          d'extraordinaire !
        </h2>
        <div className={styles.iconesStacks}>
          <Image src="/assets/icones/typescript.png" width={50} height={40} />
          <Image src="/assets/icones/react.png" width={60} height={40} />
          <Image src="/assets/icones/nextJS.png" width={60} height={40} />
          <Image
            src="/assets/icones/tailwind.svg"
            width={80}
            height={60}
            className="bg-graylight p-1 border-2 rounded-md"
          />
          <Image src="/assets/icones/node.png" width={60} height={40} />
          <Image src="/assets/icones/mongodb.png" width={60} height={40} />
          <Image
            src="/assets/icones/postgresql.png"
            width={160}
            height={20}
            className="bg-graylight p-1 border-2 rounded-md"
          />
        </div>
        <div className="flex gap-5 justify-center">
          <Link
            className="border-2 border-orange p-2 hover:bg-lightorange transition-all rounded-md"
            href="mailto:'jeanluc.tan75@gmail.com'">
            Mon mail
          </Link>
          <Link
            className="border-2 border-orange p-2 hover:bg-lightorange transition-all rounded-md"
            href="https://github.com/jltp2c">
            Mon github
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
