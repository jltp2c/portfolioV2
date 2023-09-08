"use client";

import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import { PageWrapper2 } from "../pageWrapper";

function NavBar() {
  return (
    <nav className="h-24">
      <PageWrapper2>
        <div className="absolute border-2 p-1 top-6 left-4 border-orange text-orange cursor-pointer rounded-sm font-bold ">
          <a href="/">JLT</a>
        </div>
      </PageWrapper2>
      <input type="checkbox" className={styles.toggler} />
      <div className={styles.hamburger}>
        <div></div>
      </div>
      <div className={styles.menu}>
        <div>
          <ul className="md:flex md:justify-end m-2 gap-6 p-1 text-sm">
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <span className={styles.number}>1.</span> Qui suis-je
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <span className={styles.number}>2.</span> Experiences
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="projets"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <span className={styles.number}>3.</span> Projets
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                <span className={styles.number}>4.</span> Contact
              </Link>
            </li>
            <div className="cursor-pointer">
              <a href="/assets/cv/cv.pdf" target="_blank">
                <span className={styles.cv}>Curriculum Vitae</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
