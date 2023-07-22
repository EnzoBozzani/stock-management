import styles from './styles.module.scss';
import { ItemsNavBar } from '../../components';
import { useLoaderData } from 'react-router-dom';
import { useEditItemForm } from '../../hooks/useEditItemForm';

export const EditItem = () => {
    const item: any = useLoaderData();
    const { name, setName, qtd, setQtd, price, setPrice, category, setCategory, desc, setDesc, title, handleSubmit } = useEditItemForm(item);

    return (
        <>
            <ItemsNavBar/>
            <main className={styles.wrapper}>
                <h1>Atualizar item - {title}</h1>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <div className={styles.inputs}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' value={name} onChange={(ev) => setName(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="qtd">Quantity:</label>
                            <input type="number" name='qtd' id='qtd' min={0} value={qtd} onChange={(ev) => setQtd(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Price:</label>
                            <input type="number" name='price' id='price' min={0} step={0.01} value={price} onChange={(ev) => setPrice(ev.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="cat">Category:</label>
                            <select name="cat" id="cat" value={category} onChange={(ev: any) => setCategory(ev.target.value)}>
                                <option disabled>Select a Category</option>
                                <option value="Games">Games</option>
                                <option value="Videogames">Videogames</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Tablets">Tablets</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.textareaGroup}>
                        <label htmlFor="desc"></label>
                        <textarea name="desc" id="desc" cols={30} rows={10} value={desc} onChange={(ev) => setDesc(ev.target.value)}></textarea>
                    </div>
                    <button>
                        Salvar
                    </button>
                </form>
            </main>
        </>
    )
}