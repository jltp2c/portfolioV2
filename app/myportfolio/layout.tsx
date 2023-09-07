import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

function layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
