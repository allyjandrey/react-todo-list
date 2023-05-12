import styles from './index.module.css';
import plus from '../../assets/plus.svg';
import { NoContent } from '../NoContent';
import { TodoList } from '../TodoList';
import { ChangeEvent, useState } from 'react';

type Task = {
    id: string,
    description: string,
    isDone: boolean;
}

export const Content = () => {

    const [description, setDescription,] = useState<string>("")

    const [tasksList, setTasksList] = useState<Task[]>([
        {
            id: '1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore provident esse fugit dolorem illum cumque odio nulla consectetur similique, necessitatibus sunt magnam repellendus ducimus ad harum in modi quos?',
            isDone: false
        },
        {
            id: '2',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi unde suscipit, ipsa eius officiis tempore praesentium quis quidem quod iste alias earum voluptatem consectetur optio nemo repellendus vero nulla minima.',
            isDone: false
        },
        {
            id: '3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad labore praesentium totam dolorum explicabo officia tempore hic esse facere dicta nihil soluta eveniet, exercitationem autem. Ea molestias ipsam magni aspernatur!',
            isDone: false
        }
    ]);

    const addTaskOnList = () => {
        const newTask = {
            id: '5',
            description,
            isDone: false,
        }
        setTasksList((currentValue) => [...currentValue, newTask]);
    }

    const removeTaskOnList = (id: string) => {
        setTasksList((currentValue) => currentValue.filter(task => task.id !== id))
    }

    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" onChange={(event : ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} />
                    <button className={styles.button} onClick={() => addTaskOnList()}>
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
                {tasksList.length == 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} list={tasksList}/>}
            </main>
        </section>
    )
}