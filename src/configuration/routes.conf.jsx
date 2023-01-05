import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/main.layout'
import CatalogPage from '../pages/catalog.page'
import CartPage from '../pages/cart.page'
import NotFoundPage from '../pages/notFound.page'

const RouteConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/makko-spb'}>
                    <Route index element={<MainLayout><CatalogPage /></MainLayout>}/>
                    <Route path={'catalog'} element={<MainLayout><CatalogPage /></MainLayout>}/>
                    <Route path={'cart'} element={<MainLayout><CartPage /></MainLayout>}/>
                </Route>
                <Route path={'*'} element={<MainLayout><NotFoundPage /></MainLayout>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig