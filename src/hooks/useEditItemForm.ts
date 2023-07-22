import { useState } from "react";
import ItemType from "../types/ItemType";
import Item from "../classes/Item";

export const useEditItemForm = (item: ItemType) => {
    const [ name, setName ] = useState(item.name);
    const [ qtd, setQtd ] = useState(item.qtd);
    const [ price, setPrice ] = useState(item.price);
    const [ category, setCategory ] = useState(item.category);
    const [ desc, setDesc ] = useState(item.desc);
    const [ title, setTitle ] = useState(item.name);

    const handleSubmit = (ev: any) => {
        ev.preventDefault();
        setName('');
        setQtd('');
        setPrice('');
        setCategory('Select a Category');
        setDesc('');
        const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];
        const date = new Date();
        const editedItem = new Item(item.id, name, qtd, price, category, desc, item.signedUp, item.momentSignedUp);
        editedItem.setLastEdited(`${daysOfWeek[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`);
        editedItem.addToLocalStorage();
        setTitle(name);
    }

    return { name, setName, qtd, setQtd, price, setPrice, category, setCategory, desc, setDesc, title, handleSubmit };
}