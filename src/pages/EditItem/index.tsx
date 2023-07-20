import styles from './styles.module.scss';

export const EditItem = () => {
    return (
        <main className={styles.wrapper}>
            <h1>Atualizar item - (nome do item)</h1>
            <form>
                <div className={styles.inputs}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" name='price' id='price' value={'nome do item'}/>
                    </div>
                    <div>
                        <label htmlFor="qtd">Quantity:</label>
                        <input type="number" name='qtd' id='qtd' min={0} value={49}/>
                    </div>
                    <div>
                        <label htmlFor="">Price:</label>
                        <input type="number" name='price' id='price' min={0} value={59}/>
                    </div>
                    <div>
                        <label htmlFor="cat">Category:</label>
                        <select name="cat" id="cat">
                            {/* fazer com que as informações comecem marcadas já, como a atual do item */}
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
                    <textarea name="desc" id="desc" cols={30} rows={10} value={'descrição do item'}></textarea>
                </div>
                <button>
                    Salvar
                </button>
            </form>
        </main>
    )
}