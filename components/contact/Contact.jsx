import React from "react";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div className="contact p-14 h-screen text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">4.</span> CONTACT
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-72"></span>
      </div>
      <div className="w-2/3 flex flex-col justify-center text-center gap-10 md:w-1/3">
        <h1 className="text-4xl font-extrabold"> what's next ? </h1>
        <h2 className="text-center text-gray">
          Je suis à la recherche d'opportunités passionnantes dans le
          développement web, avec une expertise en React, Node.js, Next.js et
          TypeScript pour créer des expériences web exceptionnelles. N'hésitez
          pas à me contacter !
        </h2>
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
          Linkedin
        </Link>
      </div>
    </div>
  );
}

export default Contact;
