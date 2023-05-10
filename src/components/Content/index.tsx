import styles from './index.modules.css'

export const Content = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input_container} type="text" placeholder="Adicione uma nova tarefa"/>
                    <button className={styles.input}>Criar</button>
                </article>
            </main>
        </section>
    )
}