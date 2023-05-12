import trash from '../../assets/trash.svg';
import { Task } from '../../models/Task';
import styles from './index.module.css';

interface TodoListProps {
    list: Task[];
    onDelete: () => void
}

export const TodoList = ({list, onDelete} : TodoListProps) => {
    return (
        <section className={styles.section_container}>
            {list.map((task) => (
            <article key={task.id} className={styles.content_container}>
            <input type="checkbox" id={task.id} defaultChecked={task.isDone} />
            <p className={styles.text}>{task.description}</p>
            <img src={trash} alt="Ícone de lixeira" onClick={onDelete}/>
        </article>))}
            
        </section>
    )
}