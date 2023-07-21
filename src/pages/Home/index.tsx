import { Link } from 'react-router-dom';
import { DataBox } from '../../components/DataBox';
import { useHomeData } from '../../hooks/useHomeData';
import styles from './styles.module.scss';

export const Home = () => {
    const { localStorageLength, diffItemsNumber, recentItemsNumber, recentItems } = useHomeData();

    return (
        <main className={styles.wrapper}>
            <p className={styles.title}>Dashboard</p>
            <section className={styles.section1}>
                <DataBox title='Items Diversity' number={diffItemsNumber}/>
                <DataBox title='Total Items' number={localStorageLength}/>
                <DataBox title='Recent Items' number={recentItemsNumber}/>
                <DataBox title='Running Out Items' number={1}/>
            </section>
            <section className={styles.section2}>
                <section>
                    <p className={styles.subtitle}><span>Recent Items</span><span>Actions</span></p>
                    <div>
                        {recentItems.map(item => <span className={styles.item} key={item.id}><span>{item.name}</span><Link to={`/items/${item.id}`}><button>Ver</button></Link></span>)}
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