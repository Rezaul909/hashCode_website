import styles from '../styles/footer/footer.module.css'
import { IconName } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <section className={styles.footer_container}>
                <div className={styles.footer_title}>
                    <h1>Have an idea?</h1>
                    <a>Tell us about it</a>
                </div>
                <div className={styles.footer_contact}>
                    <p>contact@spaceteq.com</p>
                    <div className={styles.footer_links}>
                        <a href="">Link1</a>
                        <a href="">Link2</a>
                        <a href="">Link3</a>
                        <a href="">Link4</a>
                        <a href="">Link5</a>
                    </div>
                    <div className={styles.socialIcon}>
                        <span><FaFacebookF /></span> 
                        <span><FaInstagram /></span> 
                        <span><FaTwitter /></span>
                        <span><FaLinkedinIn /></span>
                    </div>
                </div>
                <hr />
                <div className={styles.privacy}>
                    <p>2021 Relume. All right reserved.</p>
                    <h5>Privacy Policy</h5>
                    <h5>Terms of Service</h5>
                    <h5>Cookies Settings</h5>
                </div>
            </section>
        </div>
    );
};

export default Footer;