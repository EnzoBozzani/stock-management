import { createBrowserRouter } from "react-router-dom";
import { Root, Home, Items, ItemsRoot, NewItem, EditItem, Item } from "./pages";

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
                        element: <Items/>
                    }, 
                    {
                        path: 'new',
                        element: <NewItem/>
                    }, 
                    {
                        path: ':id',
                        element: <Item/>
                    },
                    {
                        path: 'edit/:itemId', 
                        element: <EditItem/>
                    }
                ]
            }
        ]
    }
])