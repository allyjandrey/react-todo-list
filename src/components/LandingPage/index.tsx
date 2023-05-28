import { Link } from "react-router-dom";
import Capa from "../../assets/capa.svg";
import styles from "./index.module.css";

export const LandingPage = () => {
    return (
        <section className={styles.container}>
            <article className={styles.title_container}>
                <h1>ToDo List</h1>
            </article>
            <article className={styles.cape_container}>
                <Link to="/to-do">
                    <img className={styles.img} src={Capa} alt="Capa do sistema" />
                </Link>
            </article>
        </section>
    );
}

export default LandingPage;