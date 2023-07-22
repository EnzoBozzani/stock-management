import { Link, useLoaderData } from 'react-router-dom';
import { ItemsNavBar } from '../../components';
import styles from './styles.module.scss';
import { useState } from 'react';

export const Items = () => {
    const i: any = useLoaderData();
    const [ items, setItems ] = useState(i);

    return (
        <>
            <ItemsNavBar />
            <main className={styles.wrapper}>
                <span className={styles.subtitle}>
                    <span>ID</span>
                    <span>Name</span>
                    <span>In Stock</span>
                    <span>Category</span>
                    <span>Actions</span>
                </span>
                {items.length !== 0 ?
                    items.map((item: any) => {
                        return (
                            <span className={styles.item} key={item.id}>
                                <span>{item.id.slice(0, 15)}...</span>
                                <span>{item.name}</span>
                                <span>{item.qtd} items</span>
                                <span>{item.category}</span>
                                <span className={styles.btns}>
                                    <Link to={`/items/${item.id}`}><button className={styles.seeBtn}>See</button></Link>
                                    <Link to={`/items/edit/${item.id}`}><button className={styles.editBtn}>Edit</button></Link>
                                    <button className={styles.deleteBtn} onClick={() => {
                                        localStorage.removeItem(item.id);
                                        setItems((currentState: any) => {
                                            return currentState.filter((i: any) => i !== item)
                                        })
                                    }}>
                                        Delete
                                    </button>
                                </span>
                            </span>
                        )
                    })
                    :
                    (
                        <h2>There are no items in stock!</h2>
                    )
                }
            </main>
        </>
    )
}