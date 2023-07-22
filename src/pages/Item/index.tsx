import { Link, useLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';
import { ItemsNavBar } from '../../components';

export const Item = () => {
    const item: any = useLoaderData();
    
    return (
        <>
            <ItemsNavBar />
            <main className={styles.wrapper}>
                <div className={styles.title}>
                    <h3>{item.name}</h3>
                    <div>
                        <Link to={`/items/edit/${item.id}`}><button>Edit</button></Link>
                        <Link to={`/items`}>
                            <button className={styles.deleteBtn} onClick={() => {
                                localStorage.removeItem(item.id);
                            }}>
                                Delete
                            </button>
                        </Link>
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