import logo from '../../assets/logo.svg'
import styles from './index.module.css'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo principal do sistema" />
        </header>
    )
}