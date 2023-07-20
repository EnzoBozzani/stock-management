import { Outlet } from "react-router-dom"
import { Header, Footer } from '../../components';
import { useState } from "react";
import Item from "../../classes/Item";
import ItemsContext from "../../contexts/ItemsContext";

export const Root = () => {
    const [ items, setItems ] = useState<Item[]>([])
    //lógica para pegar todos os itens do localStorage e colocar aqui
    return (
        <ItemsContext.Provider value={[ items, setItems ]}>
            <Header/>
            <Outlet/>
            <Footer/>
        </ItemsContext.Provider>
    )
}