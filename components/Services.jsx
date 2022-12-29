import Image from "next/image";
import vector from "../public/Vector.png";
import styles from "../styles/services/services.module.css";

const Services = () => {
  return (
    <div >
      <section className={styles.services}>
        <div className={styles.service_title}>
          <h4>Our Services</h4>
          <h1>Design to Development, All in One place</h1>
          <p>
            The headless CMS technology provides an end-to-end solution for
            businesses who create and distribute content to websites and other
            digital experiences at scale.
          </p>
        </div>
        <div className={styles.service_container}>
          <div className={styles.service}>
            <Image src={vector}></Image>
            <div className={styles.service_details}>
              <h2>UI/UX Design</h2>
              <p>
                Your business needs a reliable & future-proof infrastructure
              </p>
              <a href="">LEARN MORE</a>
            </div>
          </div>
          <div className={styles.service}>
            <Image src={vector}></Image>
            <div className={styles.service_details}>
              <h2>Mobile App Development</h2>
              <p>
                Your business needs a reliable & future-proof infrastructure
              </p>
              <a href="">LEARN MORE</a>
            </div>
          </div>
          <div className={styles.service}>
            <Image src={vector}></Image>
            <div className={styles.service_details}>
              <h2>Website Developement</h2>
              <p>
                Your business needs a reliable & future-proof infrastructure
              </p>
              <a href="">LEARN MORE</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
