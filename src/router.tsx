import { createBrowserRouter } from "react-router-dom";
import { Root, Home, Items, ItemsRoot, NewItem } from "./pages";

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
                    }
                ]
            }
        ]
    }
])