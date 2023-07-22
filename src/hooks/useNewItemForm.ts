import { useState } from 'react';
import Item from '../classes/Item';

export const useNewItemForm = () => {

    const [name, setName] = useState<string>('');
    const [qtd, setQtd] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('Select a Category');
    const [desc, setDesc] = useState<string>('');

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
        const newItem = new Item('', name, qtd, price, category, desc,
            `${daysOfWeek[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`, Date.now());
        newItem.addToLocalStorage();
    }

    return { name, setName, qtd, setQtd, price, setPrice, category, setCategory, desc, setDesc, handleSubmit };
}