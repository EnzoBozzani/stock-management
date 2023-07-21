import { useEffect, useState } from 'react';
import { DataBox } from '../../components/DataBox';
import styles from './styles.module.scss';

export const Home = () => {

    const [ localStorageLength, setLocalStorageLength ] = useState<number>(localStorage.length);

    useEffect(() => {
        setLocalStorageLength(localStorage.length);
    }, [localStorage.length]);

    return (
        <main className={styles.wrapper}>
            <p className={styles.title}>Dashboard</p>
            <section className={styles.section1}>
                <DataBox title='Items Diversity' number={2}/>
                <DataBox title='Total Items' number={localStorageLength}/>
                <DataBox title='Recent Items' number={2}/>
                <DataBox title='Running Out Items' number={1}/>
            </section>
            <section className={styles.section2}>
                <section>
                    <p className={styles.subtitle}><span>Recent Items</span><span>Actions</span></p>
                    <div>
                        <span className={styles.item}><span>7 Wonders</span><button>Ver</button></span>
                    </div>
                </section>
                <section>
                    <p className={styles.subtitle}><span>Items Running Out</span><span>Quantity</span><span>Actions</span></p>
                    <div>
                        <span className={styles.item}><span>7 Wonders</span><span>8</span><button>Ver</button></span>
                    </div>
                </section>
            </section>
        </main>
    )
}