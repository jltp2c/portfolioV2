import React from "react";

function Contact() {
  return (
    <div className="p-14 h-screen text-graylight flex flex-col gap-14 justify-center items-center lg:w-2/3 mx-auto">
      <div className="w-full flex items-center ">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          <span className="text-orange ">4.</span> CONTACT
        </h1>
        <span className="w-10 h-1 bg-graydark ml-5 rounded-sm md:w-44"></span>
      </div>
      <div className="">
        <h1>Je suis activement à la recherche d'un stage</h1>
      </div>
    </div>
  );
}

export default Contact;
