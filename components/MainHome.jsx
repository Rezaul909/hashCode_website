import Image from "next/image";
import React from "react";
import styles from "../styles/home/Home.module.css";
import checkbox from "../public/checkbox.png";
import ontic from "../public/ontik-logo-white 1.png";
import vector from "../public/Vector.png";


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
        <div>
          <h4>Our Services</h4>
          <h1>Design to Development, All in One place</h1>
          <p>
            The headless CMS technology provides an end-to-end solution for
            businesses who create and distribute content to websites and other
            digital experiences at scale.
          </p>
        </div>
        <div>
          <Image src={vector}></Image>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
