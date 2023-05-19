import { createContext, useState } from "react";
import { Toast } from "../../components/Toast";

type ToastProviderProps = {
    children: React.ReactNode;
}

type Toast = {
    message: string;
    type: 'success' | 'danger';
}

type ToastContext = {
    isHidden: boolean;
    showToast(data: Toast): void;
}

const ToastContext = createContext<ToastContext>({
    isHidden: false,
    showToast: () => { }
} as ToastContext)

const ToastProvider = ({ children }: ToastProviderProps) => {

    const [isHidden, setIsHidden] = useState<boolean>(true);

    const showToast = ({ message, type }: Toast) => {
        setIsHidden(false);

        setTimeout(() => {
            setIsHidden(true);
        }, 2800);
    }

    return (
        <ToastContext.Provider value={{ isHidden, showToast }}>
            {!isHidden && <Toast message='Tarefa adicionada com sucesso' type="success" />}
            {children}
        </ToastContext.Provider>
    )
}