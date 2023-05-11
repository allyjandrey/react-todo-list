import trash from '../../assets/trash.svg';
import styles from './index.module.css';

export const TodoList = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.content_container}>
                <input type="checkbox" />
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam velit sed dignissimos cupiditate? Ducimus, dignissimos! Minus maiores laborum facere velit nihil hic delectus cumque sed sunt, quaerat neque tempora corrupti!</p>
                <img src={trash} alt="Ícone de lixeira" />
            </article>
        </section>
    )
}