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
                <div className={styles.title}>
                    <h3>{item.name}</h3>
                    <div>
                        <button>Edit</button>
                        <button className={styles.deleteBtn}>Delete</button>
                    </div>
                </div>
                <span className={styles.info}>
                    <span>Category: {item.category}</span>
                    <span>In Stock: {item.qtd}</span>
                    <span>Pricing: R$ {item.price}</span>
                </span>
                <p>
                    {item.desc}
                </p>
                <span className={styles.dates}>
                    <span>Signed up: {item.signedUp}</span>
                    <span>Last edited: {item.lastEdited}</span>
                </span>
            </main>
        </>
    )
}