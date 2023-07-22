import ItemType from "../types/ItemType";

export const loadItems = () => {
    const items: ItemType[] = Object.values(localStorage).map((item: string) => JSON.parse(item))
    return items;
}