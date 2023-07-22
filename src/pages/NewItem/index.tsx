import { ItemsNavBar } from '../../components';
import { useNewItemForm } from '../../hooks/useNewItemForm';
import styles from './styles.module.scss';

export const NewItem = () => {
    const { name, setName, qtd, setQtd, price, setPrice, category, setCategory, desc, setDesc, handleSubmit } = useNewItemForm();
    
    return (
        <>
            <ItemsNavBar/>
            <main className={styles.wrapper}>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <div className={styles.inputs}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" name='price' id='price' value={name} onChange={(ev) => setName(ev.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="qtd">Quantity:</label>
                            <input type="number" name='qtd' id='qtd' min={0} value={qtd} onChange={(ev) => setQtd(ev.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Price:</label>
                            <input type="number" name='price' step={0.01} id='price' min={0} value={price} onChange={(ev) => setPrice(ev.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="cat">Category:</label>
                            <select name="cat" id="cat" value={category} onChange={(ev) => setCategory(ev.target.value)}>
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
                    <button type='submit'>
                        Salvar
                    </button>
                </form>
            </main>
        </>
    )
}