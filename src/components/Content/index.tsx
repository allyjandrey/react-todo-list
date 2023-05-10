import styles from './index.module.css'
import plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'
import { useState } from 'react';

export const Content = () => {
    const nomeState = useState<string>("Milos");
    const todoList = useState([
        {
            id: '1',
            description: 'Varrer meu quarto',
            isDone: false
        },
        {
            id: '2',
            description: 'Lavar as roupas',
            isDone: true
        },
        {
            id: '3',
            description: 'Pagar meus boletos',
            isDone: false
        }
    ]);
    const array = [
        {
            id: '',
            description: '',
            isDone: false
        },
        {
            id: '',
            description: '',
            isDone: false
        }
    ];

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