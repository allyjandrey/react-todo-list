import styles from './index.module.css';
import plus from '../../assets/plus.svg';
import { NoContent } from '../NoContent';
import { TodoList } from '../TodoList';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
            isDone: true
        }
    ]);

    const taskDone = tasksList.filter((task) => {
        return task.isDone !== false
    })

    const disabledButton = !description.length;
    const addTaskOnList = () => {
        const newTask = {
            id: uuidv4(),
            description,
            isDone: false
        }
        setTasksList((currentValue) => [...currentValue, newTask]);
        setDescription('')
    }

    const removeTaskOnList = (id: string) => {
        setTasksList((currentValue) => currentValue.filter(task => task.id !== id))
    }

    const changeStatusCheckbox = (id: string) => {
        const elements = tasksList.map((task) => {
            if(task.id == id){
                return {
                    ...task,
                    isDone: !task.isDone
                }
            }
            return task;
        }); 
        setTasksList(elements)
    }

    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" value={description} placeholder="Adicione uma nova tarefa" onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} />
                    <button className={styles.button} disabled={disabledButton} onClick={() => addTaskOnList()}>
                        Criar
                        <img
                            src={plus}
                            alt="Ícone de mais" /></button>
                </article>
                <article className={styles.content_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_created}>Tarefas Criadas</p>
                        <span className={styles.span_value}>{tasksList.length}</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.tasks_done}>Concluídas</p>
                        <span className={styles.span_value}>{taskDone.length} de {tasksList.length}</span>
                    </article>
                </article>
                {tasksList.length == 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} onChangeCheckbox={changeStatusCheckbox} list={tasksList} />}
            </main>
        </section>
    )
}