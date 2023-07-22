import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const ItemsNavBar = () => {
    if (location.href.endsWith('/items')){
        return (
            <nav className={styles.wrapper}>
                <div>
                    <Link to={'/items'} className='selectedLink'>All Items</Link>
                    <Link to={'/items/new'}>New Item</Link>
                </div>
                <hr />
            </nav>
        )
    } else if (location.href.endsWith('/items/new')){
        return (
            <nav className={styles.wrapper}>
                <div>
                    <Link to={'/items'}>All Items</Link>
                    <Link to={'/items/new'} className='selectedLink'>New Item</Link>
                </div>
                <hr />
            </nav>
        )
    }
    return (
        <nav className={styles.wrapper}>
            <div>
                <Link to={'/items'}>All Items</Link>
                <Link to={'/items/new'}>New Item</Link>
            </div>
            <hr />
        </nav>
    )
}