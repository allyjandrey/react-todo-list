import styles from './index.module.css'
import plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'

export const Content = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
                    <button className={styles.button}>
                        Criar
                        <img
                            src={plus}
                            alt="Ícone de mais" /></button>
                </article>
                <article className={styles.content_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_created}>Tarefas Criadas</p>
                        <span className={styles.span_value}>0</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_done}>Concluídas</p>
                        <span className={styles.span_value}>0</span>
                    </article>
                </article>
                <NoContent />
            </main>
        </section>
    )
}