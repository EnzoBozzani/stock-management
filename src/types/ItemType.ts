export default interface ItemType {
    id: string, 
    name: string, 
    qtd: string, 
    price: string, 
    category: 'Games'| 'Mobile' | 'Tablets' | 'Videogames' | 'Select a Category', 
    desc: string, 
    signedUp: string, 
    momentSignedUp: number, 
    lastEdited?: string
}