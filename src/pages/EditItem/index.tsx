import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const EditItem = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Link to={'/items'}>All Items</Link>
                    <Link to={'/items/new'}>New Item</Link>
                </div>
                <hr />
            </nav>
            <main className={styles.wrapper}>
                <h1>Atualizar item - (nome do item)</h1>
                <form>
                    <div className={styles.inputs}>
                        <div>
                            <label htmlFor="">Name:</label>
                            <input type="text" name='price' id='price'/>
                        </div>
                        <div>
                            <label htmlFor="qtd">Quantity:</label>
                            <input type="number" name='qtd' id='qtd' min={0} />
                        </div>
                        <div>
                            <label htmlFor="">Price:</label>
                            <input type="number" name='price' id='price' min={0} step={0.01}/>
                        </div>
                        <div>
                            <label htmlFor="cat">Category:</label>
                            <select name="cat" id="cat">
                                {/* fazer com que as informações comecem marcadas já, como a atual do item */}
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
                        <textarea name="desc" id="desc" cols={30} rows={10} ></textarea>
                    </div>
                    <button>
                        Salvar
                    </button>
                </form>
            </main>
        </>
    )
}