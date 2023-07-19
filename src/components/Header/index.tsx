import { Link } from "react-router-dom";
import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <h3>REACT STOCK</h3>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/items'}>Items</Link>
            </nav>
        </header>
    )
}