import Image from "next/image";
import React from "react";
import styles from '../styles/home/Home.module.css'
import checkbox from "../public/checkbox.png";
import ontic from "../public/ontik-logo-white 1.png";
import Services from "./Services";
import Projects from "./Projects";

const MainHome = () => {
  return (
    <div>
      <section>
        <h1>We Build Stunning online Experiences for your Products</h1>
        <p>
          HashCode is an agency that designs and develops Websites, Web
          Applications and Mobile Apps
        </p>
        <button>Discuss the project</button>
        <div className={styles.brand}>
          <Image src={checkbox}></Image>
          <Image src={ontic}></Image>
          <Image src={checkbox}></Image>
          <Image src={ontic}></Image>
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
};

export default MainHome;
