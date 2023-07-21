import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

export const ItemsRoot = () => {
    return (
        <>
            <header className={styles.wrapper}>
                <p className={styles.title}>Stock Items</p>
            </header>
            <Outlet />
        </>
    )
}