import { useContext } from 'react';
import styles from './styles.module.scss';
import UrlContext from '../../contexts/UrlContext';

export const Items = () => {
    const setUrl = useContext(UrlContext);
    setUrl(location.href);
    return (
        <main className={styles.wrapper}>
            <span className={styles.subtitle}>
                <span>ID</span>
                <span>Name</span>
                <span>In Stock</span>
                <span>Category</span>
                <span>Actions</span>
            </span>
            <span className={styles.item}>
                <span>vrinuinreirujdemroirejdmio</span>
                <span>7 Wonders</span>
                <span>8 items</span>
                <span>Games</span>
                <span className={styles.btns}>
                    <button className={styles.seeBtn}>Ver</button>
                    <button className={styles.editBtn}>Atualizar</button>
                    <button className={styles.deleteBtn}>Excluir</button>
                </span>
            </span>
        </main>
    )
}