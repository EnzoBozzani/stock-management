import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ItemBoundary = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)){
        switch (error.status){
            case 404: 
                return <h1 style={{fontSize: '2rem', margin: '5rem auto'}}>Oops... Item not found!</h1>
        }
    }
    return <h1 style={{fontSize: '2rem', margin: '5rem auto'}}>Oops... Something went wrong!</h1>
}