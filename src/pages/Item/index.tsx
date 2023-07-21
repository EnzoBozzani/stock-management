import { Link, useLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';

export const Item = () => {
    const item: any = useLoaderData();
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Link to={'/items'}>All Items</Link>
                    <Link to={'/items/new'}>New Item</Link>
                </div>
                <hr />
            </nav>
            <main className={styles.wrapper}>
                <div>
                    <h1>{item.name}</h1>
                </div>
            </main>
        </>
    )
}