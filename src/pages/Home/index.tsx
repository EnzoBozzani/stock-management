import { DataBox } from '../../components/DataBox';
import styles from './styles.module.scss';

export const Home = () => {
    return (
        <main className={styles.wrapper}>
            <p className={styles.title}>Dashboard</p>
            <section className={styles.section1}>
                <DataBox title='Items Diversity' number={2}/>
                <DataBox title='Items Diversity' number={2}/>
                <DataBox title='Items Diversity' number={2}/>
                <DataBox title='Items Diversity' number={2}/>
            </section>
            <section className={styles.section2}>
                <section>
                    <p><span>Recent Items</span><span>Actions</span></p>
                    <div>

                    </div>
                </section>
                <section>
                    <p><span>Items Running Out</span><span>Quantity</span><span>Actions</span></p>
                    <div>
                        
                    </div>
                </section>
            </section>
        </main>
    )
}