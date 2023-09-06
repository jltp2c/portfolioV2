import Acceuil from "../../components/accueil/Accueil.jsx";
import About from "../../components/about/About.jsx";
import Experiences from "../../components/experiences/Experiences.jsx";
import Projets from "../../components/projets/Projets.jsx";
import Contact from "../../components/contact/Contact.jsx";
function PortFolio() {
  return (
    <div className="text-orange">
      <Acceuil />
      <About />
      <Experiences />
      <Projets />
      <Contact />
    </div>
  );
}

export default PortFolio;
