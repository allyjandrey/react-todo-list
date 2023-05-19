import { useEffect, useState } from 'react';
import styles from './index.module.css'

type ToastProps = {
    message: string;
    type: 'success' | 'danger';
}

export const Toast = ({ message, type }: ToastProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const toggleToast = () => {
        setIsHidden(false);

        setTimeout(() => {
            setIsHidden(true);
        }, 2800);
    }

    useEffect(() => toggleToast(), [])

    return (
        <aside className={isHidden ? styles.container : styles.container_show}>
            <p className={type == "success" ? styles.success : styles.danger}>{message}</p>
        </aside>
    )
}