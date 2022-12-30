import Image from "next/image";
import avater from "../public/Avatar.png";
import styles from '../styles/customerReview/customerReview.module.css'

const CustomerReview = () => {
  return (
    <div className={styles.container}>
      <section className={styles.review_container}>
        <div className={styles.review_title}>
          <p>Customer Testimonials</p>
          <h1>What Our Clients say about us</h1>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </small>
        </div>
        <div className={styles.reviews}>
          <div className={styles.single_review}>
            <p>star-ratings</p>
            <p className={styles.review_pera}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <Image src={avater} />
            <h3 className={styles.name}>Name Surname</h3>
            <p className={styles.position}>Position, Company name</p>
          </div>
          <div className={styles.single_review}>
            <p>star-ratings</p>
            <p className={styles.review_pera}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <Image src={avater} />
            <h3 className={styles.name}>Name Surname</h3>
            <p className={styles.position}>Position, Company name</p>
          </div>
          <div className={styles.single_review}>
            <p>star-ratings</p>
            <p className={styles.review_pera}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <Image src={avater} />
            <h3 className={styles.name}>Name Surname</h3>
            <p className={styles.position}>Position, Company name</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
