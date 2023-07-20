import styles from './styles.module.scss';
import { Link, Outlet } from 'react-router-dom';
import UrlContext from '../../contexts/UrlContext';
import { useState } from 'react';

export const ItemsRoot = () => {
    const [url, setUrl] = useState<string>(location.href);
    return (
        <UrlContext.Provider value={setUrl}>
            <header className={styles.wrapper}>
                <p className={styles.title}>Stock Items</p>
                <nav>
                    <div>
                        {
                            url.endsWith('/items') ?
                                (
                                    <>
                                        <Link to={'/items'} className='selectedLink'>All Items</Link>
                                        <Link to={'/items/new'}>New Item</Link>
                                    </>
                                )
                                :
                                url.endsWith('/items/new') ?
                                    (
                                        <>
                                            <Link to={'/items'}>All Items</Link>
                                            <Link to={'/items/new'} className='selectedLink'>New Item</Link>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Link to={'/items'}>All Items</Link>
                                            <Link to={'/items/new'}>New Item</Link>
                                        </>
                                    )
                        }
                    </div>
                    <hr />
                </nav>
            </header>
            <Outlet />
        </UrlContext.Provider>
    )
}