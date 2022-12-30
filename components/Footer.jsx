import styles from '../styles/footer/footer.module.css'

const Footer = () => {
    return (
        <div>
            <section className={styles.footer_container}>
                <div>
                    <h1>Have an idea?</h1>
                    <h2>Tell us about it</h2>
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
                    <div>
                        <p>icons</p>
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