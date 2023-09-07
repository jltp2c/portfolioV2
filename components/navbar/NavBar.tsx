"use client";
import Link from "next/link";

import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav className="h-24">
      <div className="absolute border-2 p-1 top-6 left-4 border-orange text-orange cursor-pointer rounded-sm font-bold ">
        <Link href="/">JLT</Link>
      </div>
      <input type="checkbox" className={styles.toggler} />
      <div className={styles.hamburger}>
        <div></div>
      </div>
      <div className={styles.menu}>
        <div>
          <ul className="md:flex md:justify-end m-2 gap-6 p-1 text-sm">
            <li>
              <Link href="/myportfolio/quisuisje">
                <span className={styles.number}>1.</span> Qui suis-je
              </Link>
            </li>
            <li>
              <Link href="/myportfolio/experiences">
                <span className={styles.number}>2.</span> Experiences
              </Link>
            </li>
            <li>
              <Link href="/myportfolio/projets">
                <span className={styles.number}>3.</span> Projets
              </Link>
            </li>
            <li>
              <Link href="/myportfolio/contact">
                <span className={styles.number}>4.</span> Contact
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className={styles.cv}>CV</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
