import { createBrowserRouter } from "react-router-dom";
import { Root, Home, Items, ItemsRoot, NewItem, EditItem, Item } from "./pages";
import { loadItem } from "./loaders/loadItem";
import { ItemBoundary } from "./error-boundaries/ItemBoundary";
import { loadItems } from "./loaders/loadItems";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Root/>,
        children: [
            {
                index: true, 
                element: <Home/>
            }, 
            {
                path: 'items/', 
                element: <ItemsRoot/>,
                children: [
                    {
                        index: true, 
                        element: <Items/>,
                        loader: loadItems,
                        errorElement: <ItemBoundary/>,
                    }, 
                    {
                        path: 'new',
                        element: <NewItem/>
                    }, 
                    {
                        path: ':id',
                        element: <Item/>, 
                        loader: loadItem, 
                        errorElement: <ItemBoundary/>
                    },
                    {
                        path: 'edit/:id', 
                        element: <EditItem/>, 
                        loader: loadItem, 
                        errorElement: <ItemBoundary/>
                    }
                ]
            }
        ]
    }
])