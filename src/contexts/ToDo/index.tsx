import { createContext } from "react";
import { Task } from "../../models/Task";

type ToDoContextProps = {
    taskListState: Task[],
    setTaskListState: React.Dispatch<React.SetStateAction<Task[]>>
}

const ToDoContext = createContext({})

export default ToDoContext;