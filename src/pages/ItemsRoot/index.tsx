import styles from './styles.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const ItemsRoot = () => {
    return (
        <>
            <header className={styles.wrapper}>
                <p className={styles.title}>Stock Items</p>
                <nav>
                    <div>
                        <Link to={'/items'}>All Items</Link>
                        <Link to={'/items/new'}>New Item</Link>
                    </div>
                    <hr />
                </nav>
            </header>
            <Outlet />
        </>
    )
}