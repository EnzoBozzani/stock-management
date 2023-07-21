import ItemType from "../types/ItemType";

export const useHomeData = () => {
    const localStorageLength = localStorage.length;
    const diversity = {
        'Games': 0, 
        'Videogames': 0, 
        'Tablets': 0, 
        'Mobile': 0
    }

    let recentItemsNumber: number = 0;
    const recentItems: ItemType[] = [];
    const ids = Object.keys(localStorage);
    ids.forEach((id: string) => {
        const item: ItemType = JSON.parse(localStorage[id]);
        diversity[item.category]++;
        
        const daysWasSignedUp = ((((item.momentSignedUp / 1000)/60)/60)/24)
        const today = ((((Date.now() / 1000)/60)/60)/24);
        const diffDays = Math.round(today - daysWasSignedUp);
        if (diffDays < 10){
            recentItemsNumber++;
            recentItems.push(item);
        }
    })
    let diffItemsNumber: number = 0;
    Object.values(diversity).forEach(value => {
        value !== 0 && diffItemsNumber++;
    })
    return { localStorageLength, diffItemsNumber, recentItemsNumber, recentItems };
}