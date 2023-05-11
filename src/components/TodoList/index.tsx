import trash from '../../assets/trash.svg';
import styles from './index.module.css';

export const TodoList = () => {
    return (
        <section className={styles.section_container}>
            <article className={styles.content_container}>
                <input type="checkbox" />
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Ex repudiandae necessitatibus itaque magnam nobis
                  rerum repellendus provident eos incidunt, deserunt aut perspiciatis.
                   Accusamus reiciendis error odio quod nemo optio laborum?</p>
                <img src={trash} alt="Ícone de lixeira" />
            </article>
        </section>
    )
}