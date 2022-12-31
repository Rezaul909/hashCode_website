import Image from 'next/image';
import styles from '../styles/projects/projects.module.css';
import banner from '../public/image 111.png'

const Projects = () => {
    return (
        <div className={styles.project_container}>
            <section>
                <h1 className={styles.project_title}>Featured Project</h1>
                <div className={styles.projects}>
                    <div className={styles.projects_img}>
                        <Image src={banner} alt="banner"/>
                    </div>
                    <div className={styles.project_info}>
                        <h4>BATCH</h4>
                        <p className={styles.project_detail}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth sam familie. Lor separat.</p>
                        <div className={styles.project_btn}>
                            <a href="">UI Design</a>
                            <a href="">Website Development</a>
                            <a href="">Dashboard</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projects}>
                    <div className={styles.projects_img}>
                        <Image src={banner} alt="banner"/>
                    </div>
                    <div className={styles.project_info}>
                        <h4>BATCH</h4>
                        <p className={styles.project_detail}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth sam familie. Lor separat.</p>
                        <div className={styles.project_btn}>
                            <a href="">UI Design</a>
                            <a href="">Website Development</a>
                            <a href="">Dashboard</a>
                        </div>
                    </div>
                </div>
                <div className={styles.projects}>
                    <div className={styles.projects_img}>
                        <Image src={banner} alt="banner"/>
                    </div>
                    <div className={styles.project_info}>
                        <h4>BATCH</h4>
                        <p className={styles.project_detail}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth sam familie. Lor separat.</p>
                        <div className={styles.project_btn}>
                            <a href="">UI Design</a>
                            <a href="">Website Development</a>
                            <a href="">Dashboard</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;