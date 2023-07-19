import { Outlet } from "react-router-dom"
import { Header, Footer } from '../../components';

export const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}