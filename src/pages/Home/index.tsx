import { Link } from 'react-router-dom';
import { DataBox } from '../../components';
import { useHomeData } from '../../hooks/useHomeData';
import styles from './styles.module.scss';

export const Home = () => {
    const { localStorageLength, diffItemsNumber, recentItemsNumber, recentItems, runningOutNumber, runningOut } = useHomeData();

    return (
        <main className={styles.wrapper}>
            <p className={styles.title}>Dashboard</p>
            <section className={styles.section1}>
                <DataBox title='Items Diversity' number={diffItemsNumber}/>
                <DataBox title='Total Items' number={localStorageLength}/>
                <DataBox title='Recent Items' number={recentItemsNumber}/>
                <DataBox title='Running Out Items' number={runningOutNumber}/>
            </section>
            <section className={styles.section2}>
                <section>
                    <p className={styles.subtitle}><span>Recent Items</span><span>Actions</span></p>
                    <div>
                        {recentItems.length !== 0 ?
                            recentItems.map(item => <span className={styles.item} key={item.id}><span>{item.name}</span><Link to={`/items/${item.id}`}><button>Ver</button></Link></span>)
                            :
                            (
                                <h2>There are no recent items!</h2>
                            )
                        }

                    </div>
                </section>
                <section>
                    <p className={styles.subtitle}><span>Items Running Out</span><span>Quantity</span><span>Actions</span></p>
                    <div>
                        {runningOut.length !== 0 ?
                            runningOut.map(item => <span className={styles.item} key={item.id}><span>{item.name}</span><span>{item.qtd}</span><Link to={`/items/${item.id}`}><button>Ver</button></Link></span>)
                            :
                            (
                                <h2>There are no running out items!</h2>
                            )
                        }
                    </div>
                </section>
            </section>
        </main>
    )
}