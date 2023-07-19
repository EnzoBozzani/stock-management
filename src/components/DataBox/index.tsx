import styles from './styles.module.scss';

export const DataBox = (props: { title: string, number: number }) => {
    return (
        <article className={styles.wrapper}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.number}>{props.number}</p>
        </article>
    )
}