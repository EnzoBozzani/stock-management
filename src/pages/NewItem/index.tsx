import { useContext } from 'react';
import styles from './styles.module.scss';
import UrlContext from '../../contexts/UrlContext';

export const NewItem = () => {
    const setUrl = useContext(UrlContext);
    setUrl(location.href);
    return (
        <main className={styles.wrapper}>
            <form>
                <div className={styles.inputs}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" name='price' id='price' />
                    </div>
                    <div>
                        <label htmlFor="qtd">Quantity:</label>
                        <input type="number" name='qtd' id='qtd' min={0} />
                    </div>
                    <div>
                        <label htmlFor="">Price:</label>
                        <input type="number" name='price' id='price' min={0} />
                    </div>
                    <div>
                        <label htmlFor="cat">Category:</label>
                        <select name="cat" id="cat">
                            <option selected>Select a Category</option>
                            <option value="Games">Games</option>
                            <option value="Videogames">Videogames</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Tablets">Tablets</option>
                        </select>
                    </div>
                </div>
                <div className={styles.textareaGroup}>
                    <label htmlFor="desc"></label>
                    <textarea name="desc" id="desc" cols={30} rows={10}></textarea>
                </div>
                <button>
                    Salvar
                </button>
            </form>
        </main>
    )
}