import { Outlet } from "react-router-dom"
import { Header, Footer } from '../../components';
import { useState } from "react";
import Item from "../../classes/Item";
import ItemsContext from "../../contexts/ItemsContext";

export const Root = () => {
    const [ items, setItems ] = useState<Item[]>([]);
    return (
        <ItemsContext.Provider value={[ items, setItems ]}>
            <Header/>
            <Outlet/>
            <Footer/>
        </ItemsContext.Provider>
    )
}