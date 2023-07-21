import _ from 'lodash';

export default class Item {
    private id: string;
    private name: string;
    private qtd: string;
    private price: string;
    private category: string;
    private desc: string;
    private signedUp: string;
    private lastEdited: string | undefined;
    constructor(name: string, qtd: string, price: string, category: string, desc: string, signedUp: string){
        let id = this.generateRandomId();
        while (localStorage.getItem(id)){
            id = this.generateRandomId();
        }
        this.id = id;
        this.name = name;
        this.qtd = qtd;
        this.price = price;
        this.category = category;
        this.desc = desc;
        this.signedUp = signedUp;
    }
    private generateRandomId = () => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]{}/.,<>()-_/|!@#$%&*+=";
        let id: string = '';
        for (let i = 0; i < 20; i++){
            id += _.sample(chars);
        }
        return id;
    }
    public set setLastEdited(lastEdited : string) {
        this.lastEdited = lastEdited;
    }
    public addToLocalStorage(){
        localStorage.setItem(this.id, JSON.stringify(this));
    }
}