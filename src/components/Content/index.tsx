import styles from './index.modules.css'

export const Content = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input type="text" placeholder="Adicione uma nova tarefa"/>
                    <button>Criar</button>
                </article>
            </main>
        </section>
    )
}