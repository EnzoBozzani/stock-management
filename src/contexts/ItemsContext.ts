import { createContext } from "react";
import Item from "../classes/Item";

const ItemsContext = createContext<[Item[], Function]>([[], Function]);

export default ItemsContext;